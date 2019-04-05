import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Renderiza sem quebrar elementos', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

it('Verifica se o serviço que liga no banco do App Engine está respondendo', () => {
	fetch(`https://mongo-dot-nexa-digital.appspot.com/userlist`).then(response => {
		if(response.ok) {
			return true
		}
		else {
			return false
		}
	})
});
