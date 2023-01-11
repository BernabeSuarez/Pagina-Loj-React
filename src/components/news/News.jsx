import React from "react";
import { dataTour } from "../../data/dataTour";
import ReactPlayer from "react-player/lazy";

import {
  NewsContainer,
  TitleTour,
  DataContainer,
  NewsData,
  Button,
  VideoContainer,
  H2Empty,
} from "./newsElements";

const News = () => {
  return (
    <>
      <VideoContainer>
        <TitleTour>Novedades</TitleTour>
        <ReactPlayer url="https://www.youtube.com/embed/LrJUQXiCVPY" />
      </VideoContainer>
      <NewsContainer>
        {dataTour.length === 0 ? null : <TitleTour>Proximas Fechas</TitleTour>}
        <DataContainer>
          {dataTour.length === 0 ? (
            <H2Empty>...No Hay fechas Por el Momento...</H2Empty>
          ) : (
            dataTour.map((item) => (
              <NewsData>
                <h2>{item.date}</h2>
                <h2>{item.name}</h2>
                <p>{item.time}</p>
                <p>{item.place}</p>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <Button>Como Llegar</Button>
                </a>
              </NewsData>
            ))
          )}
        </DataContainer>
      </NewsContainer>
    </>
  );
};

export default News;
