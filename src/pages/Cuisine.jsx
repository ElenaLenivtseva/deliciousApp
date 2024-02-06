import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import Card from "../Components/Card.jsx";
import Grid from "../Components/Grid.jsx";
import { Skeleton } from "../Components/Skeleton.jsx";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();
  // let paramsType = params.type;
  useEffect(() => {
    getCuisine(
      params.type,
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&cuisine=",
      setCuisine
    );
  }, [params.type]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&cuisine=${name}`
    )
      .catch((err) => console.warn(err))
      .finally(setIsLoading(false));
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  // useEffect((paramsType) => {
  //   fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&cuisine=${paramsType}`
  //   )
  //     .then((res) => 
  // res.json()
  //     console.log(res.json())
  //     )
  //     // .then((json) => {
  //     //   if (json.results) {
  //     //     console.log(json.results)
  //     //     setCuisine(json.results);
  //     //   }
        
  //     //   
  //     // })
  //     .catch((err) => {
  //       console.warn(err);
  //       alert("Ошибка при получении данных о пользователях");
  //     })
  //     .finally(() => setIsLoading(false));
  // }, [paramsType]);
  return (
    <Grid>
      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        cuisine.map((item) => {
          return <Card item={item} />;
        })
      )}
    </Grid>
  );
}
