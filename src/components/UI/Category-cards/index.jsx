import React from 'react';
import logo from "../../../assets/icons/logo.svg";
import './style.scss';

const CategoryCard = () => {
    return (
        <div className='category_card'>
            <div className='icon_container'>
                <img src={logo} alt="Marketing icon" />
            </div>

            <h4>Digtal Marketing</h4>

            <p>25 Courses</p>
        </div>
    )
}

export default CategoryCard