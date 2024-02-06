import React from 'react';
import styled from "styled-components";
import { Link} from "react-router-dom";

export default function Card ({item, type}) {
    if (type==='picks') {
        return (
            <CardPicks key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                  <p>{item.title}</p>
                  <img src={item.image} alt={item.title} />
                  <Gradient />
                  </Link>
            </CardPicks>
        )
    } else {
        return (
            <CardSt key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                      <h4>{item.title}</h4>
                    </Link>
            </CardSt>
        )
    }
    
}
const CardSt = styled.div`
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
const CardPicks = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    width: 100%;
    z-index: 10;
    color: white;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;