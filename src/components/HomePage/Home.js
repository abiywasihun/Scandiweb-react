import React, { PureComponent } from 'react'
import { allProducts } from '../../Model/Product';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {
    addNewEvent,
    getCategories,
    getEvents,
  } from "../../store/actions"
import ProductList from './ProductList';
class Home extends PureComponent {
    constructor(props){
        super(props)
       // const { events, categories, onGetCategories, onGetEvents } = this.props
     //  this.handleValidEventSubmit()
      //  console.log(props.events)
    }
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
        const { events, categories, onGetCategories, onGetEvents } = this.props
         // this.handleValidEventSubmit()
         // console.log(events)
      }
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
    onGetEvents: () => dispatch(getEvents()),
    onGetCategories: () => dispatch(getCategories()),
    onAddNewEvent: event => dispatch(addNewEvent(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(graphql(allProducts)(Home));
