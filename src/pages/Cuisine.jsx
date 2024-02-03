import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'

export default function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams()
    
    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&cuisine=${name}`
          );
        const recipes = await data.json();
        setCuisine(recipes.results)
        console.log(recipes.results)
    }
    useEffect(()=> {
        getCuisine(params.type)
    }, [params.type])
    return (
        <>
        cuisine
        </>
    )
}