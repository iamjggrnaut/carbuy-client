import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './containers/About';
import Advantages from './containers/Advantages';
import Contact from './containers/Contact';
import FAQ from './containers/FAQ';
import Flow from './containers/Flow';
import Hero from './containers/Hero';
import Map from './containers/Map';
import ResultsAndRequirements from './containers/ResultsAndRequirements';
import Types from './containers/Types';
import WhyUsAndPrice from './containers/WhyUsAndPrice';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ServiceFunctions } from './service';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [number, setNumber] = useState()

  const handlePost = (number) => {
    if (number) {
      ServiceFunctions.postNumber(number);
      handleClose()
    } else {
      alert('Введите номер телефона, чтобы заказать звонок')
    }
  }

  return (
    <div className="App">
      <Navbar open={handleShow} close={handleClose} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex justify-content-center text-center">
              <h4 className='fw-bold text-center'>Заказать звонок</h4>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control" onChange={e => setNumber(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <div className='text-center w-100'>
            <button className='prime-btn' style={{ width: '100%' }} onClick={() => handlePost(number)}>
              Отправить
            </button>
          </div>
        </Modal.Footer>
      </Modal>

      <Hero />
      <Flow />
      <Advantages />
      <Types />
      <About />
      <ResultsAndRequirements />
      <WhyUsAndPrice />
      <FAQ />
      <Map />
      <Contact open={handleShow} close={handleClose} />
      <Footer />

    </div>
  );
}

export default App;
