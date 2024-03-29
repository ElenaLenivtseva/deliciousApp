import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "../Components/Card.jsx";
import Grid from "../Components/Grid.jsx";

export default function Searched() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&query=${name}`
    )
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
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
        searchedRecipes.map((item) => {
          return <Card item={item} />;
        })
      )}
    </Grid>
  );
}
