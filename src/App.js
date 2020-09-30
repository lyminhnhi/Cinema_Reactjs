import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout';
import Header from './ComponentHomeLayout/Header/index';
import Footer from './ComponentHomeLayout/Footer/index'
import SignInLayout from './LoginLayout/SignInLayout';
import SignUp from './LoginLayout/SignUpLayout';
import Booking from './BookingLayout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/dangnhap" component={SignInLayout}/>
        <Route path="/dangky" component={SignUp}/>
        <Route path="/booking/:Id" component={Booking} />
        <Route path="/" component={HomeLayout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
