import React from 'react';
import { City, Container, MapContent, CreateOrphanageButton, Footer, Header, Sidebar, Subtitle, Title } from './styles';

import mapMarkerImg from "../../images/map-marker.svg";
import { FiPlus } from 'react-icons/fi';
import { TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css";

export const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />

          <Title>Escolha um orfanato no mapa</Title>
          <Subtitle>{'Muitas crianças estão esperando a sua visita :)'}</Subtitle>
        </Header>

        <Footer>
          <City>Águas Claras</City>
          <span>Brasília</span>
        </Footer>
      </Sidebar>

      <MapContent center={[-15.8430724, -48.0307621]} zoom={15}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </MapContent>

      <CreateOrphanageButton to="">
        <FiPlus size={32} color="#FFF" />
      </CreateOrphanageButton>
    </Container>
  );
}
