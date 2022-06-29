import React, { PureComponent } from 'react'
import { allProducts } from '../../Model/Product';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import {
    addNewEvent,
    getCategories,
    getEvents,
    addToBasket,
  } from "../../store/actions"
import { getProductPrice } from '../../utils/Common';
import { Link } from 'react-router-dom';
class ProductList extends PureComponent {
  state = {
    prices_: [],
  }
  addToBasket=()=>{
    console.log("addto basket clicked")
    const {id,gallery,name,inStock,attributes,prices}=this.props
    const {onAddToBasket}=this.props
    const item={
      id:id,
      name:name,
      image:gallery,
      inStock:inStock,
      attributes:attributes,
      prices:prices,
    }
    // save new event
    onAddToBasket(item)
  
  };
     handleValidEventSubmit = (e, values) => {
        const { onAddNewEvent, onUpdateEvent } = this.props
          const newEvent = {
            id: Math.floor(Math.random() * 100),
            title: "This is my first event",
            start:  new Date(),
            className: "Hello Category",
          }
          // save new event
          onAddNewEvent(newEvent)
          const newEvent1 = {
            id: Math.floor(Math.random() * 100),
            title: "This is my first event1",
            start:  new Date(),
            className: "Hello Category",
          }
          // save new event
          onAddNewEvent(newEvent1)
          const newEvent2 = {
            id: Math.floor(Math.random() * 100),
            title: "This is my first event2",
            start:  new Date(),
            className: "Hello Category",
          }
          // save new event
          onAddNewEvent(newEvent2)
      }
      componentDidMount(){
        const {currency} =this.props
        const {prices}=this.props
        const get_price=getProductPrice(prices,currency)
        this.setState({prices_: get_price})
      }
  render() {
    const {id,gallery,name,inStock,attributes,prices}=this.props
    const {prices_}=this.state
    return (
        <div className='card'>
               
        <div className="card__image" style={{background:`url(${gallery[0]})`,
        backgroundSize: 'contain',backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'}}>
          <p>{inStock?"":"OUT OF STOCK"}</p>
        <FontAwesomeIcon onClick={this.addToBasket} icon={faShoppingCart} />
        </div>
        <Link style={{textDecoration: 'none'}} to={'/product/'+id}>
             <div className="card__description">
        <p className='prod__desc'>{name}</p>
  <p className='product_price'>
      <span>{prices_.currency}</span>
      <span>{prices_.price}</span>
  </p>
        </div> </Link>
    </div>
    )
  }
}

const mapStateToProps = ({ Cart }) => ({
    basket: Cart.basket,
    currency: Cart.currency,
  })
const mapDispatchToProps = dispatch => ({
    onGetEvents: () => dispatch(getEvents()),
    onAddToBasket:event=>dispatch(addToBasket(event)),
    onGetCategories: () => dispatch(getCategories()),
    onAddNewEvent: event => dispatch(addNewEvent(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(graphql(allProducts)(ProductList));
