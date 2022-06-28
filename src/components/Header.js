import React, { Component } from 'react'
import { allProducts } from '../Model/Product';
import { graphql } from 'react-apollo';

class Header extends Component {
    
  render() {
      console.log(this.props.data)
    return (
      <div>Header</div>
    )
  }
}
export default graphql(allProducts)(Header);
