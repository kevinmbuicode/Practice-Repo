import React from "react";
import '../index.css'
import phone_image from "./images/phone_icon.webp"
import mail_icon from "./images/mail_icon.png"

function Contacts({img, phone, email, name, rating, location, price}) {
    console.log(phone)
    return ( 
        <div className="contacts">
            <div className="contact-card">
                <img src={img} alt="cat_one" height='110px' width='180px'/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src={phone_image} alt="phone_icon" height='20px' width='20px'/>
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                    <img src={mail_icon} alt="mail_icon" height='20px' width='20px'/>
                    <p>{email}</p>
                </div>
                <div className="info-group">
                    <p>{location}</p>
                    <p>{rating}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
     );
}

export default Contacts;