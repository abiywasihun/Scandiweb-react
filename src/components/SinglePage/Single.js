import React, { PureComponent } from 'react'
import { allProducts, getProductById } from '../../Model/Product';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Query, Mutation } from 'react-apollo'
import ProductDetails from './pdp'
import {
    addNewEvent,
    getCategories,
    getEvents,
  } from "../../store/actions"
class Single extends PureComponent {
  
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
        const {id} = this.props.match.params
        console.log(id)
     //   const { id } = useParams()
        const { events, categories, onGetCategories, onGetEvents } = this.props
        //  this.handleValidEventSubmit()
        //  console.log(events)
      }
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
    onGetEvents: () => dispatch(getEvents()),
    onGetCategories: () => dispatch(getCategories()),
    onAddNewEvent: event => dispatch(addNewEvent(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Single);
