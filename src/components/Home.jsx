import React from 'react'
import styled from "styled-components"
import Form from './Form'

export default function Home (props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <section className="destaques">
				        <div className="container">
				            <div className="row">
				                <div className="container">
				                	<div className="text-center">
				                		<ImgLogo src={require("../images/achar-clinicas.png")} alt="Procura Clínicas" title="Procura Clínicas" />
				                	</div>
				            	</div>
				            </div>
				        	<div className="row">
				        		<div className="container mt-4">
				        			<h3 className="text-center text-center">Serviço de Localização de clínicas próximas a você:</h3>
				        		</div>
				        	</div>
				        	<div className="row">
				        		<div className="container mt-2 mb-2">
				        			<h5 className="title text-center">Digite seus dados:</h5>
				        		</div>
				        	</div>
				        	<div className="container">
						        <Form />
					        </div>
				        </div>
				    </section>
                </div>
            </div>
			
        </div>
    );
}

const ImgLogo = styled.img`
	width: 100%;
    max-width: 400px;
`
