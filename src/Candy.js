import React from "react";
import { Link } from "react-router-dom";
import "./SnackStyles.css";

const Candy = () => {
    return (
        <div className="Snack">
            <h2>Candy</h2>
            <img
                src="https://www.2foodtrippers.com/wp-content/uploads/2021/05/American-Candy-Social-IMG.jpg"
                alt="Candy"
                className="snack-image" />
            <p>Yum!</p>
            <Link to="/">Back to Vending Machine!</Link>
        </div>
    )
}

export default Candy;