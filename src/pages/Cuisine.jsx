import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card.jsx";
import Grid from "../Components/Grid.jsx";
import { Skeleton } from "../Components/Skeleton.jsx";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();
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
    const recipes = await data.json();
    setCuisine(recipes.results);
    setIsLoading(false)
  };
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
