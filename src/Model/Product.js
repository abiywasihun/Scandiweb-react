import React, { Component } from 'react'
import { gql } from 'apollo-boost';


const allProducts = gql `
  query{
    categories{
      name
      products{
        id
        name
        inStock
        gallery
        prices{
          currency{
            label
            symbol
          }
          amount
        }
        attributes{
          name
          items{
            displayValue
            value
          }
        }
        brand
      }
    }
   }
  `;
const getProductById = gql `
query Product($id: String!){
  product(id: $id) {
     id
       name
       gallery
       prices{
         currency{
           label
           symbol
         }
         amount
       }
       attributes{
         name
         items{
           displayValue
           value
         }
       }
       brand
       description
   }
  }
`
export { allProducts, getProductById }