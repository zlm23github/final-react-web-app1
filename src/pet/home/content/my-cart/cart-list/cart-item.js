import { useState } from "react";
import {useDispatch} from "react-redux";
import { deleteItem } from "../cart-reducer/carts-reducer";

const CartItem = (
    {
        cart = {
            id: 1,
            name: 'Halo',
            description: 'cat food',
            image: 'cat.png',
            price: '$22.99',
            addCart: true
            
        }
    }
) => {
    const[add, setAdd] = useState(cart.addCart);

    const dispatch = useDispatch();
    const deleteFromCart = (id) => {
        dispatch(deleteItem(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-xl-2 col-lg-2">
                    <img className="rounded-circle" src={`/images/${cart.image}`}  height={40} weight={40}/>
                </div>
                <div className="col-xl-8 col-lg-8">
                    <div className="fw-bold">{cart.price}</div>
                    <div>{cart.description}</div>
                </div>
                <div className="col-xl-2 col-lg-2"> 
                    <button type="button" className="btn btn-primary rounded-pill float-end">Remove</button>
                </div>
            </div>
        </li>
        // <div>
        //     <li className="list-group-item" >
        //         <div className="row">
        //             <div>
        //                 {/* <img style={{width: "100%"}} className="rounded-3" src={`/images/${cart.image}`}/> */}
        //             </div>
        //         </div>
        //     </li>
        // </div>
    )

}
export default CartItem