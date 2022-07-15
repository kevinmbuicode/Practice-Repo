import Contacts from './components/Contact';
//import Jokes from './components/Jokes';
//import jokesData from  './jokesData'
import Mocks from './MockData'

function App() {
  const data = Mocks.map(mock => {
    return(
      <Contacts
        name = {mock.name}
        img = {mock.img}
        phone = {mock.phone}
        rating = {mock.rating}
        location = {mock.location}
        price = {mock.price}
        email = {mock.email}
       />
    )
  })

  return (
    <div className="App">
      {data}
    </div>
    
  );
}

export default App;
