import logo from './logo.svg';

import './App.css';
import React from 'react';

import Login from './Components/LoginComponent/Login';

import CustomerDetails from './Components/CustomerDetailMain/CustomerDetails';

import MainDashboard  from './Components/DashboardUi/MainDashboard';

import Questionnaire  from './Components/QuesDashboard/Questionnaire';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {  useState,useReducer } from "react";
import Ref from './Components/DashboardUi/Ref';
import {createContext} from 'react'
import update from 'immutability-helper';



export const UserRoleContext = React.createContext();

const initialState = {

  inputRole: [],

};
export const reducer=(state, action)=> {
  switch (action.type) {
      case 'UPDATE_ROLE': 
      console.log(action.data)
            return {
            inputRole:action.data }
          

     default:
          return initialState;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [usersName, setUsersName] = useState("Sam");


  const usersNamehandler = (value)=>{

    setUsersName(value)

    // setUsersName((prevExpense) => {

    //   return [expen , ...prevExpense]

    // });

  }
// const[userRole,SetUserRole]=useState('1')
  return (

    <div className="App">

      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>

          Edit <code>src/App.js</code> and save to reload.

        </p>

        <a

          className="App-link"

          href="https://reactjs.org"

          target="_blank"

          rel="noopener noreferrer"

        >

          Learn React

        </a>

      </header> */}


      {/* <Login /> */}

    

    {/* <Login /> */}

    {/* <Prac/> */}
    
    <Router >
    
      <div>
      <UserRoleContext.Provider value={{state, dispatch}}>
      <Routes>
     
      
              <Route exact path="/" element={ <Login onChange={usersNamehandler} />} />
        
              <Route exact path="/dashboard" element={ <MainDashboard usersName={usersName} /> } />
             
              {/* <Route exact path="/ref" element={ <Ref/>}  /> */}

              <Route exact path="/questionnaire" element={ <Questionnaire usersName={usersName} />} />

              {/* <Route exact path="/admin" render={(props) => <ProductAdmin {...props} auth={authProps} />} /> */}
             
              </Routes>
              </UserRoleContext.Provider>
           
      
          </div>
         

      </Router>
    

    {/* <MainDashboard /> */}


      {/* <CustomerDetails /> */}

    </div>

  );

}


export default App;