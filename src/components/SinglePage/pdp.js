import React, { PureComponent } from 'react'
import { allProducts } from '../../Model/Product';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {
    addNewEvent,
    getCategories,
    getEvents,
    addToBasket,
  } from "../../store/actions"
import { getProductPrice } from '../../utils/Common';
class ProductDetails extends PureComponent {
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
        const { events, categories, onGetCategories, onGetEvents } = this.props
        //  this.handleValidEventSubmit()
        //  console.log(events)
      }
  render() {
    const {basket,currency} =this.props
    const {id,gallery,name,inStock,attributes,description,prices}=this.props
    const prices_=getProductPrice(prices,currency)
    return (
        <div className='single__page'>
        <div className='single__left'>
            {gallery.map((item,index)=>{
               if(index>0){return(<img src={item} alt=""/>)}
})}
        </div>
        <div className='single__middle'>
            <img src={gallery[0]} alt=""/>
        </div>
        <div className='single__right'>
            <h4>{name}</h4>
            {attributes.map(item=>(
                <React.Fragment>
                <h4 className='cart__atribute'>{item.name+':'}</h4>
                <div className={item.name==='Color'?'attribute__color':'atribute__list'}>{item.items.map(list=>(
                    <p title={list.displayValue} style={{background:item.name==='Color'?list.value:list.value==="S"?'gray':'', color: list.value==="S"?'#fff':'#000'}}>{item.name==='Color'?'':list.value}</p>
                ))}</div>
                </React.Fragment>
           ))}
           <h4>Price:</h4>
           <h4>{ prices_.currency+ prices_.price}</h4>
           <button onClick={this.addToBasket} className='addto__cart'>ADD TO CART</button>
           <p>{description.replaceAll( /(<([^>]+)>)/ig, '')}</p>
        </div>
    </div>
    )
  }
}

const mapStateToProps = ({ Cart }) => ({
    basket: Cart.basket,
    currency:Cart.currency,
  })
const mapDispatchToProps = dispatch => ({
    onGetEvents: () => dispatch(getEvents()),
    onAddToBasket:event=>dispatch(addToBasket(event)),
    onGetCategories: () => dispatch(getCategories()),
    onAddNewEvent: event => dispatch(addNewEvent(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
