import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import {
  NewsContainer,
  TitleTour,
  DataContainer,
  NewsData,
  Button,
} from "./newsElements";

const dataShows = [];

let Shows = async () => {
  const querySnapshot = await getDocs(collection(db, "Shows"));

  querySnapshot.forEach((item) => {
    dataShows.push(item.data());
  });
  return dataShows;
};
console.log(dataShows);

Shows();
const News = () => {
  return (
    <>
      <NewsContainer>
        <TitleTour>Proximas Fechas</TitleTour>
        <DataContainer>
          {dataShows.map((item) => (
            <NewsData>
              <h2>{item.date}</h2>
              <h2>{item.name}</h2>
              <p>{item.time}</p>
              <p>{item.place}</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                <Button>Como Llegar</Button>
              </a>
            </NewsData>
          ))}
        </DataContainer>
      </NewsContainer>
    </>
  );
};

export default News;
