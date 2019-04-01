import React, { Component } from 'react';
import Root from "./components/Root"
import Head from "./components/Head"
import AppProvider from "./contexts/AppProvider"
import { BrowserRouter } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppProvider>
          <Head />
          <Root />
        </AppProvider>
      </BrowserRouter>
    );
  }
}

export default App;