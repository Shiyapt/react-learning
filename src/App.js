import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title='TextUtils' about='AboutUs'/>
     <TextForm heading='Enter Text'/>
    <About/>
    </>
  );
}
export default App;
