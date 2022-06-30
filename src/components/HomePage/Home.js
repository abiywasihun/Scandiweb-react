import React, { PureComponent } from 'react'
import { allProducts } from '../../Model/Product';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {
  addToBasket
  } from "../../store/actions"
import ProductList from './ProductList';
class Home extends PureComponent {
  render() {
     const {data,background} =this.props
     const Category=data.categories
     const products =Category&&Category[0].products
    return (
        <div className={background}>
        <div className='home'>
            <h2 className='category__title'>Category name</h2>
            <div className='product__list'>
            {products&&products.map((product)=>(
              <ProductList 
              id={product.id}
              gallery={product.gallery}
              name={product.name}
              inStock={product.inStock}
              attributes={product.attributes}
              prices={product.prices}/>
            ))}
            </div>
            </div>
            </div>
    )
  }
}

const mapStateToProps = ({ Cart }) => ({
    basket: Cart.basket,
    background:Cart.background,
  })
const mapDispatchToProps = dispatch => ({
  onAddToBasket:event=>dispatch(addToBasket(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(graphql(allProducts)(Home));
