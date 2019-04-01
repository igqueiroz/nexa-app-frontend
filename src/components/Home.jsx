import React from 'react';
import styled from "styled-components"
import IncludeMap from "./IncludeMap"


export default function Home (props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <section class="destaques">
				        <div class="container">
				            <div class="row">
				                <div class="container">
				                	<div class="text-center"><img src="images/achar-clinicas.png" alt="Procura Clínicas" title="Procura Clínicas" /></div>
				            	</div>
				            </div>
				        	<div class="row">
				        		<div class="container mt-4">
				        			<h3 class="text-center text-center">Serviço de Localização de clínicas próximas a você:</h3>
				        		</div>
				        	</div>
				        	<div class="row">
				        		<div class="container mt-2 mb-2">
				        			<h5 class="title text-center">Digite seus dados:</h5>
				        		</div>
				        	</div>
				        	<div class="container">
						        <form id="form-contato" class="form-group" onSubmit="">
					            	<div class="row">
						                <div class="col-md-6">
						                    <input required name="name" id="name" type="text" class="input" placeholder="Nome Completo" forwardRef="name" autoComplete="off" value="" onChange="" />
						                        <label for="txtFullname">Nome</label>
						                </div>
						                <div class="col-md-6">
						                    <input required name="email" id="email" type="text" class="input" placeholder="nome@seuprovedor" forwardRef="email" autoComplete="off" value=""  onChange="" />
												<label for="txtEmail">E-mail</label>
						                </div>
					            	</div>
						            <div class="row mt-5">
						            	<div class="col-md-12">
						            		<h5 class="title text-center">Ache clínicas diagnósticas próximas num raio de:</h5>
						            	</div>
						        	</div>

						        	<div class="row">
							            <div class="col-md-4 extras text-center">
							                <button class="nearbymeters"> 1km </button>
							            </div>
							            <div class="col-md-4 extras text-center">
							                <button class="nearbymeters"> 2km </button>
							            </div>
							            <div class="col-md-4 extras text-center">
							                <button class="nearbymeters"> 3km </button>
							            </div>
							        </div>
							        <div class="row">
						           		<button class="locate" type="Submit">Eu quero achar universidades!</button>
						           	</div>
						        </form>
					        </div>
				            <Map>
					            {
					            	// this.state.submit && 
					            	<IncludeMap
	                                // store={this.props.routes[0].store}
	                                // myLocation={this.state.myLocation}
	                                // zoom={this.state.zoom}
	                                // nearByDistance={this.state.nearByDistance}
	                                // name={this.state.name}
	                                // email={this.state.email}
	                                // userDevice={this.state.userDevice}
	                             />}
				            </Map> 
				        </div>
				    </section>
                </div>
            </div>
        </div>
    );
}

const Map = styled.div`
	position: relative;
    width: 100%;
    height: 550px;
    clear: both;
    margin-top: 30px;
    float: left;
`