import React, { useState, useEffect, useRef} from "react";

//import Contacts from './components/Contact';
//import Jokes from './components/Jokes';
//import jokesData from  './jokesData'
//import Mocks from './MockData'
// import catImage from "./components/images/cat-four.png";
// import starEmptyIcon from "./components/images/star-empty.webp"
// import starFilledIcon from "./components/images/star-full-icon.png"
// import StarIcon from "./components/StarIcon";
// import './index.css'
// import WelcomeUser from "./components/Welcome";


// code splitting usif dynamic import for performance
const Contact = React.lazy (()=> import("./components/Contact"))




function App() {
  const [ name, setName] = useState("")
  const inputRef = useRef()
  // use Ref looks like this { current: 0 because we set our useRef to 0}
  
  function focus() {
    inputRef.current.focus()
  }


  //--------------------------------------------------------------------------------------
  //  Put this code below to return to how it was
  // -------------------------------------------------------------------------------------

  // const [count, setCount] = React.useState(0)

  // const [contact, setContact] = React.useState({
  //   firstName: "John",
  //   lastName: "Cena",
  //   phone: "+ 1 (819) 555-1212",
  //   email: "itsmyrealname@example.com",
  //   isFavorite: false
  // })

  // function toggleFavorite() {
  //   console.log("Toogle Favorite Clicked")
  //   setContact(prevContact => ({
  //     ...prevContact,
  //     isFavorite: !prevContact.isFavorite
  //   }))
  // }

  // let starIcon = (contact.isFavorite ? starFilledIcon : starEmptyIcon)
  
  // function countUP() {
  //   console.log("Up clicked")
  //   setCount(prevCount => prevCount + 1)
  // }

  // function countDown() {
  //   console.log("Down clicked")
  //   setCount(prevCount => prevCount - 1)
  // }

  //--------------------------------------------------------------------------------------
  // // Put this code below to return to how it was
  // -------------------------------------------------------------------------------------
  // <main>
  //   <WelcomeUser user={contact.firstName}/>
  //     <article className="card">
  //       <img src={catImage}  
  //       alt="contact_image" 
  //       className="card--image" 
  //       height='150px' width='250px'/>

  //       <div className="card--info">
  //         <StarIcon
  //           src = {starIcon}
  //           isFilled = {contact.isFavorite}
  //           toggle = {toggleFavorite}
  //         />

  //         <h2 
  //         className="card--name">

  //           {contact.firstName} {contact.lastName}
  //         </h2>

  //         <p className="card--contact">
  //         {contact.phone}</p>

  //         <p className="card--contact">
  //         {contact.email}</p>
  //         {/* {passing state as props} */}
  //       </div>
          
  //     </article>

  //     <button onClick={countUP}>
  //           Add
  //     </button>
  //     {count}
  //     <button onClick={countDown}>
  //       Subtract
  //     </button>
  //   </main>


  return (
    <>
      <input ref={inputRef} value={name}type="text" onChange={(e) => setName(e.target.value)} />
      <p>My name is {name}</p>
      <button onClick={focus}>Focus</button>
    </>
    
  );
}

export default App;
