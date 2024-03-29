import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  useEffect(() => {
    fetchDetails(params);
  }, [params]);

  const fetchDetails = async (params) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=a75795e5e52d40d4ad16a13c53b75620`
    );
    const data = await api.json();
    setDetails(data);
  };

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          <ul>
            {details?.extendedIngredients.map((ing) => {
              return <li key={ing.id}>{ing.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s linear;
  &:hover {
    transform: scale(1.06, 1.06);
  }
`;

const Info = styled.div`
  margin-left: 10rem;
`;
