import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import React, { PureComponent }  from 'react';

import Header from './components/Header';

class App extends PureComponent {
  client = new ApolloClient({
    uri: 'http://localhost:4000/'
  });
      
  render(){
  return (
    <ApolloProvider client={this.client}>
      <Header/>
    </ApolloProvider>
  );
}
}
export default App;
