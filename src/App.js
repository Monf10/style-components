import './App.scss'; // აუცილებლად შეცვალეთ გაფართოება cssდა scssზე
import { Section } from './components/Section/Section';
import { Header } from './Header';

function App() {
  return (
    <div className='App'>
       <Header></Header>
       <Section></Section>
    </div>
    );
   
}

export default App;