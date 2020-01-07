import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import PostsIndex from './posts_index';
import ReduxForm from './new_posts';
import Home from './home';

import TableExampleStructured from './table';
import ResponsiveContainer from './HomePageHeading';
export default class App extends Component {
  render() {
    return (

        <Router>
        <ResponsiveContainer/>





        </Router>
    );
  }
}
var children=[{'name':"mitesh"},{'name':"alex"}];
