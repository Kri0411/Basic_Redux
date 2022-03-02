import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './component/home';
// import About from './component/about';
// import Contact from './component/contact';
import './App.css';
import Demo from './component/Demo';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <div>
    <Provider store= {store}>

    <Demo ></Demo>

    </Provider>
    </div>






    // <BrowserRouter>
    // <div className="App">
    //         <ol className="App-header">
    //           <li><Link to="/">Home</Link></li>
    //           <li><Link to="/about">About Us</Link></li>
    //           <li><Link to="/contact">Contact Us</Link></li>
    //         </ol>
    //        <Routes>
    //              <Route path='/' element={< Home />}></Route>
    //              <Route path='/about' element={< About />}></Route>
    //              <Route path='/contact' element={< Contact />}></Route>
                 
    //       </Routes>
    //       </div>
    // </BrowserRouter>
  );
}

export default App;
