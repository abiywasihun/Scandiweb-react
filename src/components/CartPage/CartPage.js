import React, { PureComponent } from 'react'
import { allProducts } from '../../Model/Product';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {
    addNewEvent,
    getCategories,
    getEvents,
  } from "../../store/actions"
class CartPage extends PureComponent {
    constructor(props){
        super(props)
       // const { events, categories, onGetCategories, onGetEvents } = this.props
       //this.handleValidEventSubmit()
       // console.log(props.events)
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
        //  this.handleValidEventSubmit()
        //  console.log(events)
      }
  render() {
    console.log(this.props.events)
      console.log(this.props.data)
    return (
      <div>Header</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(graphql(allProducts)(CartPage));
