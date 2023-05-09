export const data = async () => {
  return fetch("http://localhost:8000/api/animeList")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    });
};
export const categories = async ()=> {
  return fetch("http://localhost:8000/api/catagories")
  .then(response=>response.json())
  .then(response=>{
    return response;
  })
}
export const selectCatagoryList = async (category)=> {
  const categoryList = Object.values(category);
  if (categoryList.length==0)
    return fetch("http://localhost:8000/api/animeList")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
  else
  return fetch(`http://localhost:8000/api/animeList/category?category=${categoryList}`)
  .then(response=>response.json())
  .then(response=>{
    console.log(response)
    return response;
  })
}
export const postData= async (jsonData) => {
  let options;
  if (jsonData.id) {
    options = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jsonData)
    }
  }
  else {
    options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(jsonData)
    }
    
  }
  const response = await fetch(`http://localhost:8000/api/animeList`,options)
  const result = await response.json()
  console.log(result);
  return result
}
export const deleteData= async (value)=>{
  if (!value.id)
    return false;
  else
  {
    const options = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(value)
    }
    const response = await fetch(`http://localhost:8000/api/animeList`,options)
    const result = await response.json();
    console.log(result);
    return result;
  }
}

//create object list

