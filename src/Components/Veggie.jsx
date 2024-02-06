import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "../Components/Card.jsx";
import Wrapper from "../Components/Wrapper.jsx";

export default function Veggie() {
  const { isLoading, setIsLoading } = useState(true);
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=a75795e5e52d40d4ad16a13c53b75620&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Our Vegetarian Picks</h3>
        {isLoading ? (
          <h4>Идет загрузка...</h4>
        ) : (
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: true,
              drag: "free",
              gap: "5rem",
            }}
          >
            {veggie.map((item) => {
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
