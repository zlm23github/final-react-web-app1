import React from "react";

import {useSelector} from "react-redux";


const CartList = () => {
    const { products } = useSelector(state => state.carts)
    return(
      <ul className="list-group">
        {
          carts.map(cart =>
            <CartItem
              key={cart.id}
              cart={cart}/>
          )
        }
      </ul>
    );
    };
export default CartList