import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

export default function Searched() {

    const  [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    useEffect(()=>{
        getSearched(params.search)
    }, [params.search])
    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=a75795e5e52d40d4ad16a13c53b75620&query=${name}`
          );
        const recipes = await data.json();
        setSearchedRecipes(recipes.results)
        
    }
    
    return (
        <Grid>
            {searchedRecipes.map((item)=> {
                return (
                    <Card key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr) );
grid-gap: 3rem;
`;

const Card = styled.div`
img{
    width: 100%;
    border-radius: 2rem;

}
a {
    text-decoration: none;
}
h4 {
    text-align:center;
    padding: 1rem;
}
`