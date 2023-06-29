import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import styled from "styled-components";

const tracks = [
  {
    url: "music/la_Parecida.mp3",
    title: "La Parecida",
    tags: ["Folklore"],
  },
  {
    url: "music/Detras_del_viento.mp3",
    title: "Detras del viento",
    tags: ["Folklore"],
  },
  {
    url: "music/Querencia_de_mi_sentir.mp3",
    title: "Querencia de mi sentir",
    tags: ["Folklore"],
  },
];

const colors = `html {
          --tagsBackground: #6ffcc1;
          --tagsText: #000;
          --tagsBackgroundHoverActive: #2cc0a0;
          --tagsTextHoverActive: #ffffff;
          --searchBackground: #18191f;
          --searchText: #ffffff;
          --searchPlaceHolder: #575a77;
          --playerBackground: #18191f;
          --titleColor: #ffffff; 
          --timeColor: #ffffff;
          --progressSlider: #6ffcc1;
          --progressUsed: #ffffff;
          --progressLeft: #151616;
          --volumeSlider: #6ffcc1;
          --volumeUsed: #ffffff;
          --volumeLeft:  #151616;
          --playlistBackground: #18191f;
          --playlistText: #575a77;
          --playlistBackgroundHoverActive:  #18191f;
          --playlistTextHoverActive: #ffffff;
      }`;
const Container = styled.div`
  width: 60%;
  filter: drop-shadow(0 8px 14px rgba(4, 238, 255, 0.178));
  @media (max-width: 700px) {
    width: 90%;
  }
`;

const Reproductor = () => {
  return (
    <Container>
      <Player
        trackList={tracks}
        customColorScheme={colors}
        includeTags={false}
        includeSearch={false}
      />
    </Container>
  );
};

export default Reproductor;
