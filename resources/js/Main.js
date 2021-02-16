import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

//importacion de react
import { Container } from 'react-bootstrap';

//import Material Bootstrap
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import { MDBIcon, MDBDataTableV5, MDBBadge, MDBBtn, MDBContainer } from "mdbreact";


//importacion a html

//import Head from './import/Head'
//import Foot from './import/Foot'

import Routes from './components/Routes'


class Main extends Component {

  constructor(props) {
    super(props);

  }



  render() {


      return (
        <BrowserRouter>
          <div>

            <MDBContainer fluid >

              <Routes />

            </MDBContainer>

          </div>
        </BrowserRouter>
      )
    }
  
}

//export default App
render(<Main />, document.getElementById('root'));