import React from 'react';
import "./App.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import Home from "../src/pages/index";
import About from "../src/pages/about";
import Contact from "../src/pages/contact"
import Navbar from './navbar/index';
import store from './store/index';
import SearchVid from '../src/pages/searchVid';
import Clock from './components/clock/ClockDisplay';
import Redux from '../src/components/reduxCounter/Redux';
import Comment from '../src/components/comment/ListComment';
import Form from '../src/components/formInput/FormView';
import SearchImage from "../src/pages/imagesSearch";
import ReactFinalForm from "../src/components/reactFinalForm/formContainer";
import AnotherReactFinalForm from "../src/components/reactFinalForm/formDisplay"
import ContactContainer from './components/contactCrud/ContactContainer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer toastClassName="z-[50]" /> 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/searchVid' exact element={<SearchVid />} />
          <Route path='/clock' exact element={<Clock />} />
          <Route path='/redux' exact element={<Redux />} />
          <Route path='/comment' exact element={<Comment />} />
          <Route path='/form' exact element={<Form />} />
          <Route path='/searchImg' exact element={<SearchImage />} />
          <Route path='/reactFinalForm' exact element={<ReactFinalForm />} />
          <Route path='/anotherReactFinarForm' exact element={<AnotherReactFinalForm />} />
          <Route path='/contactcrud' exact element={<ContactContainer />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
