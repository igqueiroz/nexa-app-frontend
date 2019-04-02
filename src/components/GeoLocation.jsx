import React from 'react';
import styled from "styled-components"

export default function GeoLocation(props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <section>
						<div className="row">
							<div className="col-sm-1" />
							<div className="col-sm-10">
								<h1>O que é Geolocalização?</h1>
								<p>Geolocalização é um detecção sem fio da localização física de um dispositivo remoto. Como substantivo, a geolocalização refere-se à localização física em si. Como verbo, o termo refere-se ao processo de detecção desse local.
								</p>
								<p>Dependendo do método usado, uma geolocalização pode ser tão geral quanto o continente ao qual o usuário está se conectando ou tão específico quanto sua posição geográfica, definida como coordenadas de latitude e longitude, ou às vezes latitude, longitude e altitude. A localização é um atributo menos específico, como, por exemplo, o Central Park de Nova York ou o North End de Boston.
								</p>
							</div>
							<div className="col-sm-1" />
						</div>
					</section>
                </div>
            </div>
        </div>
    );
}
