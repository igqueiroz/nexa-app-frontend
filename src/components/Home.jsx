import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import IncludeMap from "./IncludeMap"

const propTypes = {
    /** Placeholder para o input */
    placeholder: PropTypes.string,
    /** Label que acompanha a tag input */
    label: PropTypes.string
};


const defaultProps = {};

export default function Home (props) {
	const inputRef = React.createRef()

	const [isFocused, setFocus] = useState(false)
	const [loadButton, setLoadButton] = useState(false)
	const [showMap, setShowMap] = useState(false)

	function handleChange(event)  {
	    const {name, value} = event.target
	    // updateLeadData({ name, value })
	    // hasValidation && validateField({ name, value })
	}
	const changeLoadButton = (value) => setLoadButton(value)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <section className="destaques">
				        <div className="container">
				            <div className="row">
				                <div className="container">
				                	<div className="text-center"><img src={require("../images/achar-clinicas.png")} alt="Procura Clínicas" title="Procura Clínicas" /></div>
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
						        <form id="form-contato" className="form-group">
					            	<div className="row">
						                <div className="col-md-6">
						                    <Input 
						                    required 
						                    name="name" 
						                    id="name" 
						                    type="text" 
						                    className="input" 
						                    placeholder="Nome Completo" 
						                    forwardRef="name" 
						                    autoComplete="off"
						                    onFocus={ _ => setFocus(true) }
                        					onChange={ event => handleChange(event) } />
						                    <Label htmlFor="txtFullname">Nome</Label>
						                </div>
						                <div className="col-md-6">
						                    <Input 
						                    	required 
						                    	name="email" 
						                    	id="email" 
						                    	type="text" 
						                    	className="input" 
						                    	placeholder="nome@seuprovedor" 
						                    	forwardRef="email" 
						                    	autoComplete="off" 
						                    	onChange={ event => handleChange(event) } 
						                    />
											<Label htmlFor="txtEmail">E-mail</Label>
						                </div>
					            	</div>
						            <div className="row mt-5">
						            	<div className="col-md-12">
						            		<h5 className="title text-center">Ache clínicas diagnósticas próximas num raio de:</h5>
						            	</div>
						        	</div>

						        	<div className="row">
							            <div className="col-md-4 extras text-center">
							                <Button className="nearbymeters"> 1km </Button>
							            </div>
							            <div className="col-md-4 extras text-center">
							                <Button className="nearbymeters"> 2km </Button>
							            </div>
							            <div className="col-md-4 extras text-center">
							                <Button className="nearbymeters"> 3km </Button>
							            </div>
							        </div>
							        <div className="row">
						           		<Button
						           			onClick={event => {
					                            event.preventDefault()
					                            changeLoadButton(true)
					                        	}
					                        }
						           			className={`locate ${(loadButton) ? "progress" : ""}`}
						           			type="Submit"
						           		>
						           			Quero achar clínicas próximas a mim
						           		</Button>
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

const Label = styled.label`
	font: 1.1em ;
	color: #22472c;
	position: absolute;
	top: -6px;
	font-size: 70%;
	left: 17px;
	z-index: 0;
	cursor: text;
	-webkit-transition: .2s ease;
	transition: .2s ease;
	padding: 0;
`

const Input = styled.input`
	border: 0;
	border-bottom: 1px solid #b2b2b2;
	color: #22472c;
	height: 40px;
	width: 100%;
	background: transparent;
	font-size: 1.2em;
	position: relative;
	z-index: 1;
	transition: .2s ease;
	padding-left: 9px;
	position: relative;
	opacity: 1;
	&:invalid {
		box-shadow: none; 
	}
	&:focus {
		color: #00c8b3;
		border-color: #00c8b3;
		outline: none; 
	}
	&:focus + label {
		color: #ea5f2a;
	}
	&::-webkit-input-placeholder {
		opacity: 0.5;
		-webkit-transition: all .2s;
		transition: all .2s;
	}
	&::-moz-placeholder {
		opacity: 0.5;
		-webkit-transition: all .2s;
		transition: all .2s;
	}
	&:-ms-input-placeholder {
		opacity: 0.5;
		-webkit-transition: all .2s;
		transition: all .2s;
	}
	&::placeholder {
		opacity: 0.5;
		-webkit-transition: all .2s;
		transition: all .2s;
	}
	&:placeholder-shown:not(:focus)::-webkit-input-placeholder {
		opacity: 0;
	}
	&::placeholder-shown:not(:focus)::-moz-placeholder {
 		opacity: 0;
 	}
 	&:placeholder-shown:not(:focus):-ms-input-placeholder {
		opacity: 0;
	}
	&:placeholder-shown:not(:focus)::placeholder {
		opacity: 0;
	}
	&:placeholder-shown:not(:focus) + * {
		font-size: 127%;
		top: 7px;
	}
	&:focus {
		outline: none;
		border-color: rgba(0, 0, 0, 0.5);
	}

`
const Button = styled.button`
	margin: 0 auto;
	color: #fff;
	font: 1em;
	border: solid 1px #ccc;
	border-radius: 21px;
	background: transparent;
	width: 100%;
	padding: 12px 0px;
	display: block;
	cursor: pointer;
	text-align: center;
	transition: .2s ease;
	outline: none;
	margin-top: 30px;
	transform: scale(1);
	margin-bottom: 20px;
	float: left;
	background: #71c2ff;

	&:hover, &.active {
		opacity: 0.75;
		border: solid 1px #22472c;
		color: #fff;
	}
	&:focus {
		opacity: 0.55;
	}

	&.progress {
		opacity: 0.7;
		background: #00c8b3;
		border: solid 1px #00c8b3;
		color: #ffffff;
		transform: scale(0.95);
		color: transparent !important;
		transition: .2s ease;
		border-radius: 21px;
		height: auto;
	}
	&.progress:before {
		position: relative;
		opacity: .8;
		margin-top: -16px;
		margin-left: -16px;
		width: 32px;
		height: 32px;
		content: '';
		display: inline-block;
		position: absolute;
		background: transparent;
		border: 1px solid #fff;
		border-top-color: transparent;
		border-bottom-color: transparent;
		border-radius: 50%;
		box-sizing: border-box;
		top: 50%;
		left: 50%;
		margin-top: -12px;
		margin-left: -12px;
		width: 24px;
		height: 24px;
		-webkit-animation: ld 1s ease-in-out infinite;
		-moz-animation: ld 1s ease-in-out infinite;
		-o-animation: ld 1s ease-in-out infinite;
		animation: ld 1s ease-in-out infinite; 
	}
	&.progress:focus:before {
		position: relative;
		opacity: .8;
		margin-top: -16px;
		margin-left: -16px;
		width: 32px;
		height: 32px;
		content: '';
		display: inline-block;
		position: absolute;
		background: transparent;
		border: 1px solid #fff;
		border-top-color: transparent;
		border-bottom-color: transparent;
		border-radius: 50%;
		box-sizing: border-box;
		top: 50%;
		left: 50%;
		margin-top: -12px;
		margin-left: -12px;
		width: 24px;
		height: 24px;
		-webkit-animation: ld 1s ease-in-out infinite;
		-moz-animation: ld 1s ease-in-out infinite;
		-o-animation: ld 1s ease-in-out infinite;
		animation: ld 1s ease-in-out infinite; 
	}
	
	@-webkit-keyframes ld {
	0% { transform: rotate(0deg) scale(1); }
	50% { transform: rotate(180deg) scale(1.1); }
	100% { transform: rotate(360deg) scale(1); } }

	@-moz-keyframes ld {
	0% { transform: rotate(0deg) scale(1); }
	50% { transform: rotate(180deg) scale(1.1); }
	100% { transform: rotate(360deg) scale(1); } }

	@-o-keyframes ld {
	0% { transform: rotate(0deg) scale(1); }
	50% { transform: rotate(180deg) scale(1.1); }
	100% { transform: rotate(360deg) scale(1); } }

	@keyframes ld {
	0% { transform: rotate(0deg) scale(1); }
	50% { transform: rotate(180deg) scale(1.1); }
	100% { transform: rotate(360deg) scale(1); } }

	&.locate {
		background: #22472c;
	}
`
