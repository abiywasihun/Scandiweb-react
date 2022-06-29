import React, { Component } from 'react'
import {allProducts}  from '../Model/Product';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBagShopping,faShoppingCart,faDollarSign,faAngleDown,faYenSign} from "@fortawesome/free-solid-svg-icons";
import {
    addNewEvent,
    changeCurrency,
    changeBackground,
    getCategories,
    getEvents,
    updateEvent,
  } from "../store/actions"
import { Link } from 'react-router-dom';
import CheckoutProduct from './HomePage/CheckoutProduct';
import { getDuplicate, getTotalPrice } from '../utils/Common';
class Header extends Component {
    state = {
        countDuplicate: [],
        totalPrice: 0,
      }
      changeCurrency = (symbol,label) => {
        const { onChangeCurrency} = this.props
          const newCurrency = {
            label:label,
            symbol:symbol,
          }
          // save new event
          onChangeCurrency(newCurrency)
        }
      ChangeBackground=(response)=>{
        const { onChangeBackground} = this.props
        const {basket} =this.props
            var newBackground='homepage'
            if(response&&basket.length>0){
                 newBackground='change_hompage'
            }else{
                 newBackground='homepage'
                
            }
            onChangeBackground(newBackground)
          }
  render() {
      const {basket,currency} =this.props
      const countDuplicate=basket.length>0?getDuplicate(basket):[]
      const totalPrice=basket.length>0?getTotalPrice(basket,currency):0
      var basket__badge='checkout__badge'
      if(basket.length>0){
         basket__badge='show__badge checkout__badge'
      }else{
         basket__badge='checkout__badge'
      }
    return (
        <div className='header'>
        <div className="left__header">
            <span>Women</span>
            <span>Men</span>
            <span>Kids</span>
        </div>
        <div className="middle__header">
        <FontAwesomeIcon icon={faBagShopping}/>
        </div>
        <div className="right__header">
            <div className="currency__dropdown">
            <span>{currency.symbol}</span>
            <FontAwesomeIcon icon={faAngleDown} />
            <div className='dropdown'>
            <p onClick={()=>this.changeCurrency('$', 'USD')} >$ USD</p>
            <p onClick={()=>this.changeCurrency('£', 'GBP')} >£ GBP</p>
            <p onClick={()=>this.changeCurrency('A$', 'AUD')} >A$ AUD</p>
            <p onClick={()=>this.changeCurrency('¥', 'JPY')} >¥ JPY</p>
            <p onClick={()=>this.changeCurrency('₽' ,'RUB')} >₽ RUB</p>
            </div>
            </div>
            <div onMouseEnter={() =>this.ChangeBackground(true)}
        onMouseLeave={() =>this.ChangeBackground(false)} className='shopping__cart'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className={basket__badge}>{basket.length}</span>
            <div className='cart__list'>
            <p className='cart__title'><strong>{basket.length?"My Bag "+basket.length+" ":""}</strong>{basket.length?'items':''}</p>
            {countDuplicate.length > 0 && countDuplicate.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    attributes={item.attributes}
                    currency={item.currency}
                    prices={item.prices}
                    count={item.count}
                    />
                ))}
                <div className="total__price">
                  {basket.length?( <React.Fragment><p><strong>Total</strong></p><p>{currency.symbol}{totalPrice&&totalPrice.toFixed(2)}</p></React.Fragment>):''}
                </div>
                <div className="cartCheckout__button">
                  {basket.length?( <React.Fragment><button>VIEW BAG</button><Link to='/cart'> <button className='cart__checkout'>CHECK OUT</button></Link> </React.Fragment>):''}
                  </div>
            </div>
            </div>
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
    onGetEvents: () => dispatch(getEvents()),
    onGetCategories: () => dispatch(getCategories()),
    onAddNewEvent: event => dispatch(addNewEvent(event)),
    onChangeCurrency: event => dispatch(changeCurrency(event)),
    onChangeBackground: event => dispatch(changeBackground(event)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(graphql(allProducts)(Header));
