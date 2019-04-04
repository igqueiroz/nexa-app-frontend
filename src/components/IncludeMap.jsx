// Arquivo que gera o Google Maps, faz o dispatch dos dados para o nosso banco e interaje com o usuário
// O botão do Uber usado envia as coords de localização do usuário e do local escolhido para o App do Uber
// A função em alguns browsers não cosegue retornar se o Uber está instalado ou não, segunda a sua API: 
// https://developer.uber.com/docs/riders/ride-requests/tutorials/deep-links/introduction
import React, { useState } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import SaveData from '../utils/save_data'

function IncludeMap (props) {

    const mapInitial = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };
    const [mapUpdate, setmapUpdate] = useState(mapInitial)    
    const [places, setplacesUpdate] = useState([])    
    const [uber, setUberButton] = useState(false)
    const [leadData] = useState(props.leadData)

   // Retorna as funções imediatamente com o mapa pronto
    function onMapReady(mapProps, map) {
        searchNearby(map, map.center)
        map.setCenter({lat: props.myLocation[0], lng: props.myLocation[1]})
    }

    // Guarda as interações e verifica se o pin clicado é da localização do usuário ou universidade
    function onMarkerClick(props, marker, e) {
        setmapUpdate({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
            currentMarkerLat: e.latLng.lat(),
            currentMarkerLng: e.latLng.lng()
        });
        if (marker.title === "myPoint") {
            setUberButton(false)
        }        
        else {
            setUberButton(true)
            SaveData({
                nome:leadData.Nome,
                email: leadData.Email,
                currentMarkerLat: e.latLng.lat(),
                currentMarkerLng: e.latLng.lng(),
                selectedPlace: props.name
            })
        }
    }

    // Remove a janela de Info aberta no momento do clique
    function onMapClicked(props) {
        if (mapUpdate.showingInfoWindow) { 
           setmapUpdate({
                ...mapUpdate,
                showingInfoWindow: false
            });
        }
    }
    
    // Faz a busca de proximidade, quando retorna muitos dados o ideal é usar o Radar Search da API do Google
    // https://developers.google.com/places/web-service/search?hl=pt-br#RadarSearchRequests
    function searchNearby(map, center) {

        const {google} = props;
        const service = new google.maps.places.PlacesService(map);

        // Especifica a localização, raio e tipo de lugar para a API de Busca de Lugares (Places API)
        const request = {
           location: new google.maps.LatLng(props.myLocation[0],props.myLocation[1]),
           radius: props.nearByDistance,
           type: 'hospital'
         };

        // O serviço envia a array de dados para state para ser renderizado na view
        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setplacesUpdate(results)
          }        
        })
    }

        return (
            <Map
                google={props.google}
                className={'map'}
                onReady={onMapReady}
                visible={true}
                zoom={props.zoom}
                reset={props.reset}
                onClick={onMapClicked}
                clickableIcons={false}
            >
                <Marker
                    onClick={onMarkerClick}
                    title={"myPoint"}
                    name={"Estou aqui"}
                    position={{lat: props.myLocation[0], lng: props.myLocation[1]}}
                    icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
                />

                {places.map(places => 
                    <Marker
                        onClick={onMarkerClick}
                        key={places.id}
                        name={places.name}
                        title={places.name}
                        position={places.geometry.location}
                    />
                )}
                <InfoWindow
                    marker={mapUpdate.activeMarker}
                    visible={mapUpdate.showingInfoWindow}
                    onClose={mapUpdate.onInfoWindowClose}>
                    <div>
                        <h6>{mapUpdate.activeMarker.name}</h6>
                        {uber && <div className="uberButton">
                                <p>
                                    <a href={"https://m.uber.com/ul/?client_id=1zs9u7FpfBvi6QWa0E77GV3LP6c8V1iQ&action=setPickup&pickup[latitude]=lat:" + 
                                    props.myLocation[0] +
                                    "&pickup[longitude]=" +
                                    props.myLocation[1] +
                                    "&dropoff[latitude]=" +
                                    mapUpdate.currentMarkerLat +
                                    "&dropoff[longitude]=" +
                                    mapUpdate.currentMarkerLng
                                    }>
                                    <img src={require("../images/uber.png")} alt="Vá de Uber até esse local" title="Vá de Uber até esse local"/></a>
                                </p>
                            </div>
                            }
                            
                    </div>
                </InfoWindow>
               
            </Map>
        );

    }
export default GoogleApiWrapper({
    apiKey: "AIzaSyAmFYEUy9Kj2WhpImGyYHMb0t9efz3Vmbk",
    version: '3',
    language: 'portuguese'
})(IncludeMap)