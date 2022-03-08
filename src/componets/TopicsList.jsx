import { useEffect, useState } from "react";
import * as api from "../api";

export default function TopicsList() {
  const [topics, setTopic] = useState([]);
 
  useEffect(() => {
    api.fetchCategories().then(( {categories: categoriesList} ) => {
      console.log (categoriesList, "categories in categories list");
      setCategories(categoriesList);
    });
  }, []);


  return (
      
    categories.map(({category_name}) => {

        return <CategoriesCard category_name = {category_name}/>
    })
   
  )
 }