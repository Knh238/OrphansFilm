import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
// import { withRouter, Route } from "react-router-dom";
import PropTypes from "prop-types";

import {
  // SearchBar,
  Home,
  // Main,
  Stock,
  Conference,
  OrphanDef,
  AllConferences,
  RandomPhoto
} from "./components";
// import // Login,
// // Signup,
// // UserHome,
// Home from "./client/home";
// Tags,
// MyNotes,
// import {me} from './store'

export default class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  //   // this.props.gotUserList()
  // }
  render() {
    // const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/stock" component={Stock} /> */}
        <Route exact path="/def" component={OrphanDef} />
        <Route exact path="/conference" component={Conference} />
        <Route exact path="/allConferences" component={AllConferences} />
        <Route exact path="/randomPhoto" component={RandomPhoto} />
      </Switch>
    );
  }
}
