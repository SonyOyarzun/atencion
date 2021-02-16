import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'

import { Route } from 'react-router-dom';


//Importar componentes y rutas
import Caja from './Caja';
import Vista from './Vista';


class Router extends Component {

    //para parametros de url
    //<Route exact path="/Trace/:asset" component={Trace} /> 

    render() {
        return (

            <div>

                <Route exact path="/" component={Caja} />
                <Route exact path="/vista" component={Vista} />

            </div>

        )
    }
}

export default Router;