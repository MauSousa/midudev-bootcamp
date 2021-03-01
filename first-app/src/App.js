import './App.css';
import Mensaje from './Message.js'


const Description = () => <p>Este es la app del curso fullstack bootcamp</p>

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso' />
      <Mensaje color='purple' message='De React' />
      <Description />
    </div>
  );
}
 
export default App;
