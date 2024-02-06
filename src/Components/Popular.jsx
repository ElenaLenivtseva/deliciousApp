import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import Card from "../Components/Card.jsx";
import Wrapper from "../Components/Wrapper.jsx";

export default function Popular() {
  const { isLoading, setIsLoading } = useState(true);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=a75795e5e52d40d4ad16a13c53b75620&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        {isLoading ? (
          <h4>Идет загрузка...</h4>
        ) : (
          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: true,
              drag: "free",
              gap: "5rem",
            }}
          >
            {popular.map((item) => {
              return (
                <SplideSlide>
                  <Card item={item} type="picks" />
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </Wrapper>
    </div>
  );
}
