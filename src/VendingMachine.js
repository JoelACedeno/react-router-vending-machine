import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

const VendingMachine = () => {

    return (
        <div className="VendingMachine">
            <h1>Choose a snack!</h1>
            <img
                src="https://cdn11.bigcommerce.com/s-xun5w23utl/images/stencil/original/products/7309/12556/ams-39-outdoor-snack-drink-vending-machine__28519.1658495606.jpg?c=1"
                alt="Vending Machine"
                className="vending-machine-image"
            />
            <ul>
                <li>
                    <Link to="/chips">Chips</Link>
                </li>
                <li>
                    <Link to="/candy">Candy</Link>
                </li>
                <li>
                    <Link to="/soda">Soda</Link>
                </li>
            </ul>
        </div>
    )
}

export default VendingMachine;