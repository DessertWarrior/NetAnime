let port = await fetch('../../port.txt')
port = await port.json();

export const data = async () => {
  return fetch(`http://localhost:${port}/api/animeList`)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};
export const cardData = async (id) => {
  return fetch(`http://localhost:${port}/api/animeList/${id}`)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
}
export const categories = async ()=> {
  return fetch(`http://localhost:${port}/api/catagories`)
  .then(response=>response.json())
  .then(response=>{
    return response;
  })
}
export const selectCatagoryList = async (category)=> {
  const categoryList = Object.values(category);
  if (categoryList.length==0)
    return fetch(`http://localhost:${port}/api/animeList`)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
  else
  return fetch(`http://localhost:${port}/api/animeList/category?category=${categoryList}`)
  .then(response=>response.json())
  .then(response=>{
    return response;
  })
}
export const postData= async (jsonData) => {
  try {
  let options;
    let secret = document.cookie.split(';');//spliting different cookies
      secret = secret.find(element=>element.startsWith('jwt=')).split('=')[1];
    if (jsonData.id) {
      options = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json',
        Authorization: `Bearer ${secret}`},
        body: JSON.stringify(jsonData)
      }
    }
    else {
      options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        Authorization: `Bearer ${secret}`},
        body: JSON.stringify(jsonData)
      }
    }
    const response = await fetch(`http://localhost:${port}/api/animeList`,options)
    const result = await response.json()
    console.log(result);
    return result
  } catch (e){
    console.error('Unauthorized')
    return false;
  }
  
}
export const deleteData= async (value)=>{
  try {
    if (!value.id) return null;
    let secret = document.cookie.split(';');//spliting different cookies
    secret = secret.find(element=>element.startsWith('jwt=')).split('=')[1];
    console.log(secret);
      const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
        Authorization: `Bearer ${secret}`},
        body: JSON.stringify(value)
      }
      const response = await fetch(`http://localhost:${port}/api/animeList`,options)
      const result = await response.json();
      console.log(result)
      return result;
  } catch (e) {
    console.error('Unauthorized')
    return false;
  }
  
}
export const signIn= async (value)=>{
  try{
    let durationOfToken= 15 * 60 *1000; //15minutes
      const option = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(value),
      }
      const response = await fetch(`http://localhost:${port}/login`,option)
      const result = await response.json()
      console.log(result);
      document.cookie= `jwt=${JSON.stringify(result)}; expires=${new Date(Date.now()+ durationOfToken)}; path=/; SameSite=Strict;`
      return true;
  } catch(e)
  {
    return false;
  }
  
}

//create object list

