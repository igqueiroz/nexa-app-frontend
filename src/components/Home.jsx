import React, {useState, useContext, useEffect} from 'react'
import styled from "styled-components"
import IncludeMap from "./IncludeMap"
import { ValidationContext } from "../contexts/ValidationProvider"
import { LeadDataContext } from "../contexts/LeadDataProvider"
import { Modal } from 'react-bootstrap'

export default function Home (props) {
	const nearByParamInitial = {
		zoom: 0,
		km: 0,
		submit: false
	}
	const modalBoxInitial = {
		show: false,
		titulo: '',
		mensagem: ''
	}
	const [loadButton, setLoadButton] = useState(false)
	const [showMap, setShowMap] = useState(false)
	const [fakeLoad, setFakeLoad] = useState(false)
	const [nearByParam, setNearByParam] = useState(nearByParamInitial)
	const [modalBox, setModalShow] = useState(modalBoxInitial)
	const [mylocation, setMyLocation] = useState({})
	const [geolocationEnable, setGeolocationEnable] = useState(false)
	const {leadData, updateLeadData} = useContext(LeadDataContext)
	const {validateField, fields} = useContext(ValidationContext)
	
	const changeFakeLoad = (value) => {
		setFakeLoad(value)
		setTimeout(() => {
            setFakeLoad(false) 
        }, 250);
	}
	const changeLoadButton = (value) => setLoadButton(value)
	const changeShowMap = (value) => setShowMap(value)
	const changeMyLocation = (value) => setMyLocation(value)

	function handleChange(event)  {
	    const {name, value} = event.target
	    validateField({ name, value })	
	}

	function handleSubmit(event) {
		changeLoadButton(true)
		// Valida todos os campos
		if (Object.values(fields).filter(e => e.hasError === false).length === Object.values(fields).length) {
			setTimeout(() => { changeLoadButton(false); }, 650);
			enableGeoLocation()
		} else {
			let mensagem = [];
			Object.values(fields).filter(e => mensagem.push(e.errorMessage))
			setModalShow({
				show: true,
				titulo: 'Oooopppsss... ',
				mensagem: mensagem
			})
			setTimeout(() => { changeLoadButton(false); }, 650);
		}
	}

	const changeNearByParam = (params) => {
		let newParams = {}
		newParams.zoom = params.zoom
		newParams.km = params.km
		newParams.submit = true
		setNearByParam(newParams)
	}

	function ErrorsList(props) {
		const listItems = props.mensagem.map(( mensagem, index ) => {
			if (mensagem) {
				return <li key={index.toString()}> {mensagem} </li>	
			}
		})
		return (<ul>{listItems}</ul>)
	}
	
	function enableGeoLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition( position => {
				sendMyLocation(position)
			})
        }
        else {
            setModalShow({
				show: true,
				titulo: 'Hummmmm... ',
				mensagem: ['Desculpe, você deve ativar o serviço de Geolocation do seu navegador para continuar.']
			})
        }
	}

	function sendMyLocation(position){
		changeMyLocation({
			mylocation: [position.coords.latitude, position.coords.longitude]
		})
		verifyGeoLocation()
	}

	function verifyGeoLocation() {
		console.log(mylocation)
		if (mylocation.mylocation) {
			changeShowMap(true)
			setGeolocationEnable(true)
			// updateLeadData({ name, value })
		} else {
			setModalShow({
				show: true,
				titulo: 'Hummmmm... ',
				mensagem: ['Para usar o serviço você deve aceitar o serviço de Geolocation do seu navegador.']
			})
		}
	}

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
						        <form 
						        	id="form-contato"
						        	className="form-group"
						        	onSubmit={event => {
								    	event.preventDefault();
								    	handleSubmit();
								    }}
						        >
					            	<div className="row">
						                <div className="col-md-6 mt-4">
						                    <Input 
							                    required 
							                    name="Nome"
							                    id="Nome"
							                    type="text" 
												value={leadData['name']}
							                    className="input" 
							                    placeholder="Nome Completo" 
							                    forwardRef="Nome" 
							                    autoComplete="off"
	                        					onChange={ event => handleChange(event) } 
	                        				/>
						                    <Label htmlFor="txtFullname">Nome</Label>
						                </div>
						                <div className="col-md-6 mt-4">
						                    <Input 
						                    	required 
						                    	name="Email"
						                    	id="Email"
						                    	type="text" 
						                    	value={leadData['name']}
						                    	className="input" 
						                    	placeholder="nome@seuprovedor" 
						                    	forwardRef="Email" 
						                    	autoComplete="off" 
						                    	onChange={ event => handleChange(event) } 
						                    />
											<Label htmlFor="txtEmail">E-mail</Label>
						                </div>
					            	</div>
						            <div className="row mt-5">
						            	<div className="col-md-12">
						            		<h5 className="title text-center">
						            			Ache clínicas diagnósticas próximas num raio de:
						            		</h5>
						            	</div>
						        	</div>

						        	<div className="row">
							            <div className="col-md-4 extras text-center">
							                <Button 
							                	className={`nearbymeters ${(fakeLoad) ? "progress" : ""}`}
							                	onClick={ event => {
							                		event.preventDefault()
							                		changeFakeLoad(true)
							                		changeNearByParam(
							                			{
							                				zoom: 14,
							                				km: 1000
							                			}
							                		)
							                		}
							                	}
							                >
							                	1km
							                </Button>
							            </div>
							            <div className="col-md-4 extras text-center">
							                <Button
							                	className={`nearbymeters ${(fakeLoad) ? "progress" : ""}`}
							                	onClick={ event => {
							                		event.preventDefault()
							                		changeFakeLoad(true)
							                		changeNearByParam(
							                			{
							                				zoom: 13.5,
							                				km: 2000
							                			}
							                		)
							                		}
							                	}
							                >
							                	2km
							                </Button>
							            </div>
							            <div className="col-md-4 extras text-center">
							                <Button 
							                	className={`nearbymeters ${(fakeLoad) ? "progress" : ""}`}
							                	onClick={ event => {
							                		event.preventDefault()
							                		changeFakeLoad(true)
							                		changeNearByParam(
							                			{
							                				zoom: 13,
							                				km: 3000
							                			}
							                		)
							                		}
							                	}
							                >
							                	3km
							                </Button>
							            </div>
							        </div>
							        <div className="row">
						           		{ nearByParam.submit && <Button
						           			className={`locate ${(loadButton) ? "progress" : ""}`}
						           			type="Submit"
						           		>
						           			Quero achar clínicas próximas a mim
						           		</Button> 
						           		}
						           	</div>
						        </form>
					        </div>
				             {
				             	showMap && geolocationEnable && <Map showMap={showMap} >
					           	<IncludeMap
	                                // myLocation={this.state.myLocation}
	                                // zoom={this.state.zoom}
	                                // nearByDistance={this.state.nearByDistance}
	                                // name={this.state.name}
	                                // email={this.state.email}
	                                // userDevice={this.state.userDevice}
	                             />
				            </Map> 
				            }
				        </div>
				    </section>
                </div>
            </div>
			<Modal
				show={modalBox.show}
				size="lg"
	        	aria-labelledby="contained-modal-title-vcenter"
	        	centered
	        	onHide={event => { setModalShow(false) }} 
        	>
				<Modal.Header closeButton>
					<Modal.Title>{modalBox.titulo}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{ modalBox.show && <ErrorsList mensagem={modalBox.mensagem}/> }
				</Modal.Body>

				<Modal.Footer>
					<Button 
						variant="secondary"
						onClick={event => { setModalShow(false) }} >Fechar
					</Button>
				</Modal.Footer>
			</Modal>
        </div>
    );
}

const Map = styled.div`
	position: relative;
    width: 100%;
    height: ${props => (props.showMap) ? "550" : "0" }px; 
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
		outline: none;
	}
	&:focus {
		opacity: 0.55;
		outline: none;
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
