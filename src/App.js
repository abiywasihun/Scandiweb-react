import './assets/css/style.css'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import React, { PureComponent }  from 'react';

import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Single from './components/SinglePage/Single';
import CartPage from './components/CartPage/CartPage';

class App extends PureComponent {
  client = new ApolloClient({
    uri: 'http://localhost:4000/'
  });
      
  render(){
  return (
    <ApolloProvider client={this.client}>
      <BrowserRouter>

       <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<Single/>}/>
      <Route path="/cart" element={<CartPage/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </ApolloProvider>
  );
}
}
export default App;
