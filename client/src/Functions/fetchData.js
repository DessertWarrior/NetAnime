export const data = async () => {
  return fetch("http://localhost:8000/api/animeList")
    .then((response) => response.json())
    .then((response) => {
        // let list = {};
        // //for loop for response array
        // for (let element of response)
        // {
        //     let genre = element.genre;
        //     if (!list[genre])
        //         list[genre] = [element];
        //     else
        //         list[genre].push(element);;
        // }
        //if array item do esist on element genre, then add to object
      //return Object.entries(list);
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
  console.log(categoryList)
  return fetch(`http://localhost:8000/api/animeList/category?category=${categoryList}`)
  .then(response=>response.json())
  .then(response=>{
    console.log(response.rows)
    return response;
  })
}

//create object list

