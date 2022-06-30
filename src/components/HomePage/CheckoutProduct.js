import React, { PureComponent } from 'react'
import { allProducts } from '../../Model/Product';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {
    addToBasket,
    removeFromBasket,
  } from "../../store/actions"
import { getProductPrice } from '../../utils/Common';
class CheckoutProduct extends PureComponent {
  removeFromBasket=()=>{
    //remove the item from the basket
    const { onRemoveFromBasket } = this.props
    const {id,image,name,attributes,prices}=this.props
    const item={
      id:id,
      name:name,
      image:image,
      attributes:attributes,
      prices:prices,
    }
    onRemoveFromBasket(item)
  }
      addToBasket=()=>{
        const {id,image,name,attributes,prices,count}=this.props
        const {onAddToBasket}=this.props
        const item={
          id:id,
          name:name,
          image:image,
          attributes:attributes,
          prices:prices,
        }
        // save new event
        onAddToBasket(item)
      
      };
  render() {
    const {currency} =this.props
    const {id,image,name,attributes,prices,count}=this.props
    const prices_=getProductPrice(prices,currency)
    return (
      <div className='cart__overlay'>
      <div className="left__cart">
          <p>{name}</p>
          <h4>{prices_.currency+prices_.price}</h4>
          {attributes.map(item=>(
               <React.Fragment>
               <h4 className='cart__atribute'>{item.name}</h4>
               <div className={item.name==='Color'?'attribute__color':'atribute__list'}>{item.items.map(list=>(
                   <p title={list.displayValue} style={{background:item.name==='Color'?list.value:list.value==="S"?'gray':'', color: list.value==="S"?'#fff':'#000'}}>{item.name==='Color'?'':list.value}</p>
               ))}</div>
               </React.Fragment>
          ))}
      </div>
      <div className="middle__cart">
        <p onClick={this.addToBasket}>+</p>
        <p>{count}</p>
        <p onClick={this.removeFromBasket}>-</p>
      </div>
      <div className="right__cart">
      <img className='cartProduct_image' src={image[0]}
       alt=''/>
      </div>
   </div>
    )
  }
}

const mapStateToProps = ({ Cart }) => ({
  basket: Cart.basket,
  currency: Cart.currency,
  })
const mapDispatchToProps = dispatch => ({
    onAddToBasket:event=>dispatch(addToBasket(event)),
    onRemoveFromBasket:event=>dispatch(removeFromBasket(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(graphql(allProducts)(CheckoutProduct));
