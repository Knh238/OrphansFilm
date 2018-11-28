// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import SearchBar from "./componentsSearchBar";
import NavDrawer from "./components/NavDrawer";
import Routes from "./Routes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      login: false
      //key: null
    };
    // this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    //this.setProject = this.setProject.bind(this);
  }

  // handleLogin(user) {
  //   this.setState({
  //     user: user,
  //     login: true
  //   });
  // }

  // handleLogout() {
  //   this.setState({
  //     user: {},
  //     login: false
  //   });
  // }

  // setProject(key) {
  //   this.setState({ key });
  // }
  //  const App = () => {
  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            left: 0,
            width: "10%",
            height: "100%"
          }}
        >
          {/* <Main /> */}
          {/* <SearchBar /> */}
          <NavDrawer
          // handleLogout={this.handleLogout}
          // handleLogin={this.handleLogin}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "10%",
            width: "90%",
            top: "5%",
            height: "95%",
            padding: 10
          }}
        >
          {/* setProject={this.setProject}/> */}
          {/* <Routes andleLogin={this.handleLogin} /> */}
          <Routes />
          {/* projectKey={this.state.key} */}
        </div>
      </div>
    );
  }
}
// }

export default App;
