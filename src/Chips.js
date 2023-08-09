import React from "react";
import { Link } from "react-router-dom";
import "./SnackStyles.css";

const Chips = () => {
    return (
        <div className="Snack">
            <h2>Chips</h2>
            <img
                src="https://www.tasteofhome.com/wp-content/uploads/2018/03/000_0395-1.jpg?fit=680,454"
                alt="Chips"
                className="snack-image" />
            <p>Yum!</p>
            <Link to="/">Back to Vending Machine!</Link>
        </div>
    )
}

export default Chips;