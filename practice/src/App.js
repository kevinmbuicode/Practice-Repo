import Contacts from './components/Contact';
//import Jokes from './components/Jokes';
//import jokesData from  './jokesData'
import Mocks from './MockData'

function App() {
  const data = Mocks.map(mock => {
    return(
      <Contacts
        id = {mock.id}
        mock = {mock}
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
