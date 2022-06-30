import React, { PureComponent } from 'react'
import {  getProductById } from '../../Model/Product';
import { connect } from 'react-redux';
import { Query } from 'react-apollo'
import ProductDetails from './pdp'
import {
  addToBasket
  } from "../../store/actions"
class Single extends PureComponent {
  render() {
    const {id} = this.props.match.params
    return (
      <Query query={getProductById} variables={{ id }}>
      {({ loading, error, data }) => {
        const product=data.product
        console.log(product)
        if (loading) return null;
        if (error) return `Error! ${error}`;
  
        return (
          <ProductDetails 
          id={product.id}
          gallery={product.gallery}
          name={product.name}
          inStock={product.inStock}
          attributes={product.attributes}
          description={product.description}
          prices={product.prices}/>
        );
      }}
      </Query>
    )
  }
}


const mapStateToProps = ({ Cart }) => ({
    basket: Cart.basket,
  })
const mapDispatchToProps = dispatch => ({
  onAddToBasket:event=>dispatch(addToBasket(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Single);
