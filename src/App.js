import './assets/css/style.css'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import React, { PureComponent }  from 'react';

import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
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
       
       <Router>
       <Header/> 
        <Switch>
        
        <Route path='/cart' component={CartPage} exact/>
        <Route path='/product/:id' component={Single} exact/>
        <Route path='/' component={Home} />
        </Switch>
    </Router>
    
    </ApolloProvider>
  );
}
}
export default App;
