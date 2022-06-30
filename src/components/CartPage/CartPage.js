import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import {
    addToBasket,
    removeFromBasket,
  } from "../../store/actions"
import { calculateTax, getDuplicate, getProductPrice, getTotalPrice } from '../../utils/Common';
import ImageSlider from './ImageSlider';
class CartPage extends PureComponent {
      addToBasket=(id,name,image,attributes,prices)=>{
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
      
      }
      removeFromBasket=(id,name,image,attributes,prices)=>{
        //remove the item from the basket
        const { onRemoveFromBasket } = this.props
        const item={
          id:id,
          name:name,
          image:image,
          attributes:attributes,
          prices:prices,
        }
        onRemoveFromBasket(item)
      }
  render() {
    const {basket,currency} =this.props
    const countDuplicate=basket.length>0?getDuplicate(basket):[]
    const totalPrice=basket.length>0?getTotalPrice(basket,currency):0
    const totalTax=basket.length>0?calculateTax(getTotalPrice(basket,currency)):0
    return (
      <React.Fragment>
      <div className='CartPage'>
      {countDuplicate.map(item=>{
        const prices_=getProductPrice(item.prices,currency)
        return(
      <div className="cart__card">
          <div className="left__cartpage">
              <h4>{item.name}</h4>
              <h4>{prices_.currency+prices_.price}</h4>
              {item.attributes.map(item=>(
                  <React.Fragment>
                  <h4 className='cart__atribute'>{item.name}</h4>
                  <div className={item.name==='Color'?'attribute__color':'atribute__list'}>{item.items.map(list=>(
                      <p title={list.displayValue} style={{background:item.name==='Color'?list.value:list.value==="S"?'gray':'', color: list.value==="S"?'#fff':'#000'}}>{item.name==='Color'?'':list.value}</p>
                  ))}</div>
                  </React.Fragment>
             ))}
           
          </div>
          <div className="right__cartpage">
              <div className="cart__manage">
              <p onClick={()=>this.addToBasket(item.id,item.name,item.image,item.attributes,item.prices)}>+</p>
              <p>{item.count}</p>
              <p onClick={()=>this.removeFromBasket(item.id,item.name,item.image,item.attributes,item.prices)}>-</p>
              </div>
              <ImageSlider image={item.image}/>
          </div>
          </div>
        )
  })}
    </div>
    {basket.length?(<div className='total__payment'>
          <p><span>Tax 21%:</span><strong>{currency.symbol+totalTax.toFixed(2)}</strong></p>
             <p><span>Quantity:</span><strong>{basket.length}</strong></p>
             <p><span>Total:</span><strong>{currency.symbol+totalPrice.toFixed(2)}</strong></p>
             <button className='cart__checkout'>Order</button>
    </div>):''}
    
    </React.Fragment>
    )
  }
}

const mapStateToProps = ({ Cart }) => ({
    basket: Cart.basket,
    currency:Cart.currency,
  })
const mapDispatchToProps = dispatch => ({
    onAddToBasket:event=>dispatch(addToBasket(event)),
    onRemoveFromBasket:event=>dispatch(removeFromBasket(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
