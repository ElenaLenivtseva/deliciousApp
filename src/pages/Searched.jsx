import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Card from "../Components/Card.jsx";

export default function Searched() {
    const [isLoading, setIsLoading] = useState(true);
    const  [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    useEffect(()=>{
        getSearched(params.search)
    }, [params.search])
    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&query=${name}`
          ).catch((err) => console.warn(err)).finally(setIsLoading(false));
        const recipes = await data.json();
        setSearchedRecipes(recipes.results)
        
    }
    
    return (
        <Grid>
            {/* {isLoading? ('loading') :(searchedRecipes.map(item=> {
            return (
                <Card key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                    </Link>
            </Card>
            )
        }))}  */}
       {searchedRecipes.map((item) => {
            return (
            <Card item={item}/>
            );
          })}
        
        </Grid>
    )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr) );
grid-gap: 3rem;
`;

