import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "../Components/Card.jsx";

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
      .catch((err) => console.warn(err))
      .finally(setIsLoading(false));
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading
        ? cuisine.map((item) => {
            return (
            //   <Card key={item.id}>
            //     <Link to={`/recipe/${item.id}`}>
            //       <Skeleton width={100} height={100} />
            //       <Skeleton width={100} height={20} />
            //       {/* <h4>{item.title}</h4> */}
            //     </Link>
            //   </Card>
            <Card item={item}/>
            );
          })
        : cuisine.map((item) => {
            return (
              <Card item={item}>
              </Card>
            );
          })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

// const Card = styled.div`
//   img {
//     width: 100%;
//     border-radius: 2rem;
//   }
//   a {
//     text-decoration: none;
//   }
//   h4 {
//     text-align: center;
//     padding: 1rem;
//   }
// `;
