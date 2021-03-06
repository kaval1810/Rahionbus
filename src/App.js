import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { AboutUs } from './components/aboutUs/aboutUs.component';
import BusPassPage from './pages/buspasspage/BusPassPage.component';
import SigninAndSignupPage from './pages/signIn_and_signUp_page/signIn_and_signUp_page.component';
import {Route} from 'react-router-dom';
import './App.scss';

class  App extends React.Component {

  render() {
  	return (
  	    <div className="App">
        <Header/>
        <Route exact path='/' component={Homepage} />
        <Route path='/signin' component={SigninAndSignupPage} />
        <Route path='/buspass' component={BusPassPage} />
        <Route path='/aboutus' component={AboutUs}/>
        <Footer className='foot'/>
       </div>

  	);
  }

}

export default App;
