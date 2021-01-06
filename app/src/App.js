import React, {useState} from 'react';
import './App.css';
import GhibiMovie from "./components/GhibiMovie";
import {connect} from "react-redux";
import {getGhibiApi} from "./actions/action";
import axios from "axios";

function App({loading, ghibiList, errors, getGhibiApi}) {
  //testing our api link 
  // axios
  // .get("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")
  // .then(res => {
  //   console.log("testing api : ", res.data);
  // })
  // .catch(err => {
  //   console.log("we've failed :", err);
  // })
  return (
    <div className="App">
      <p> Ghibi Movies List </p>
      <GhibiMovie />
    </div>
  );
}
// const mapStateToProps = state => { 
//   return {
//       loading : state.false, 
//       ghibiList : state.ghibiList,
//       errors : state.errors
//   }
// }
// export default connect(mapStateToProps,{getGhibiApi})(App);
export default App;
