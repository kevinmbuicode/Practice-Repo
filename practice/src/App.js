import React from "react";
//import Contacts from './components/Contact';
//import Jokes from './components/Jokes';
//import jokesData from  './jokesData'
//import Mocks from './MockData'
import catImage from "./components/images/cat-four.png";
import starEmptyIcon from "./components/images/star-empty.webp"
import starFilledIcon from "./components/images/star-full-icon.png"
import './index.css'

function App() {
  const [count, setCount] = React.useState(0)

  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Cena",
    phone: "+ 1 (819) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    console.log("Toogle Favorite Clicked")
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }))
  }

  let starIcon = (contact.isFavorite ? starFilledIcon : starEmptyIcon)
  
  function countUP() {
    console.log("Up clicked")
    setCount(prevCount => prevCount + 1)
  }

  function countDown() {
    console.log("Down clicked")
    setCount(prevCount => prevCount -1)
  }

  return (
    <main>
      <article className="card">
        <img src={catImage}  
        alt="contact_image" 
        className="card--image" 
        height='150px' width='250px'/>

        <div className="card--info">
          <img src={starIcon} 
          onClick={toggleFavorite}
          alt="star icon" 
          height='18px' width='18px'/>

          <h2 
          className="card--name">

            {contact.firstName} {contact.lastName}
          </h2>

          <p className="card--contact">
          {contact.phone}</p>

          <p className="card--contact">
          {contact.email}</p>
          {/* {passing state as props} */}
        </div>
          
      </article>

      <button onClick={countUP}>
            Add
      </button>
      {count}
      <button onClick={countDown}>
        Subtract
      </button>
    </main>
    
  );
}

export default App;
