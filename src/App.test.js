import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Verifica o render sem quebrar elementos', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

it('Verifica se o serviço MondoDB do App Engine está respondendo', () => {
	fetch(`https://mongo-dot-nexa-digital.appspot.com/userlist`).then(response => {
		if(response.ok) {
			return true
		}
		else {
			return false
		}
	})
});

it('Verifica se a chave do Google Maps está funcionando', () => {
	fetch(`http://maps.google.com/maps?file=api&v=2&hl=en&key=AIzaSyAmFYEUy9Kj2WhpImGyYHMb0t9efz3Vmbk`).then(response => {
		if(response.ok) {
			return true
		}
		else {
			return false
		}
	})
});

it('Verifica se a API do Uber está funcionando', () => {
	fetch(`https://m.uber.com/ul/?client_id=1zs9u7FpfBvi6QWa0E77GV3LP6c8V1iQ&action=setPickup
		&pickup[latitude]=-23.6051785
		&pickup[longitude]=-46.74230449999999
		&dropoff[latitude]=-22.6051785
		&dropoff[longitude]=-45.74230449999999
	`).then(response => {
		if(response.ok) {
			return true
		}
		else {
			return false
		}
	})	
});

