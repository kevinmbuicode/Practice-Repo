import React from "react";
import '../index.css'
import phone_image from "./images/phone_icon.webp"
import mail_icon from "./images/mail_icon.png"

function Contacts(props) {
    console.log(props.mock)
    return ( 
        <div className="contacts">
            <div className="contact-card">
                <img src={props.mock.img} alt="cat_one" height='110px' width='180px'/>
                <h3>{props.mock.name}</h3>
                <div className="info-group">
                    <img src={phone_image} alt="phone_icon" height='20px' width='20px'/>
                    <p>{props.mock.phone}</p>
                </div>
                <div className="info-group">
                    <img src={mail_icon} alt="mail_icon" height='20px' width='20px'/>
                    <p>{props.mock.email}</p>
                </div>
                <div className="info-group">
                    <p>{props.mock.location}</p>
                    <p>{props.mock.rating}</p>
                    <p>{props.mock.price}</p>
                </div>
            </div>
            {/* {name = {mock.name}
        img = {mock.img}
        phone = {mock.phone}
        rating = {mock.rating}
        location = {mock.location}
        price = {mock.price}
        email = {mock.email}} */}
        </div>
     );
}

export default Contacts;