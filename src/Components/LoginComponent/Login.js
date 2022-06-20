import React, { useState, useRef, useContext, createContext, useEffect ,useReducer, useDebugValue} from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import InputAdornment from "@material-ui/core/InputAdornment";
import ellipse from "../../assets/images/Ellipse.png";
import ndfc from "../../assets/images/nbfc-logo.png";
import monexologo from "../../assets/images/monexo-logo.png";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import env from "../../enviorment.json";
import setAuthToken from "../../utilities/setAuthToken";
import { authAction } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { History } from "react-router-dom";
import Data from "./User.json";
import { ConstructionOutlined } from "@mui/icons-material";
import Info from '../../App'
import {UserRoleContext} from '../../App'

console.log(Data);
// export const AuthContext= createContext({userrole:'1',userrole:'3',userrole:'4'})
// const userLogin = [
//   { email: "sam@gmail.com", password: "123456789", userrole: "1" },
//   {
//     email: "admin@gmail.com",
//     password: "123456789",
//     userrole: "3",
//   },
//   {
//     email: "user@gmail.com",
//     password: "123456789",        
//     userrole: "4",
//   },
// ];

// const ur=createContext();

const Login = (props) => {
 
  const {state, dispatch} = useContext(UserRoleContext);

  // const dispatch = useDispatch();
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [userRole, setUserRole] = useState();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const MainStyle = {};

  const div1Style = {
    backgroundColor: "white",
    height: "100vh",
    width: "786px",
  };
  const div2Style = {
    backgroundColor: "green",
    height: "100vh",
    width: "654px",
  };
  const image = {
    width: 109.65,
    height: 26.62,
    position: "absolute",
    left: 16,
    top: 14.23,
  };
  const Line = { position: "absolute", left: 136.93, top: 14 };
  const pnglogo = {
    width: 29.78,
    height: 26.62,
    position: "absolute",
    left: 145.94,
    top: 14.23,
  };
  const paperStyle = {
    width: 320,
    position: "fixed",
    left: 120,
    top: 150,
  };
  const btnstyle = {
    margin: "20px 0px",
    backgroundColor: "darkgreen",
    height: "60px",
    width: "379px",
  };
  const txt = {
    color: "primary",
    variant: "outlined",
    color: "secondory",
    width: "379px",
    height: "60px",
    marginTop: 20,
  };
  // const re = Data.user.filter((val) => {
  //   console.log(val.email )
  //   console.log(val.password)
  //   return (
  //     val.email === val.email &&
  //     val.password === val.password  &&
  //     val.userrole === "1"
  //   );
  // });
  //  console.log(re);
  function emailHandler(e) {
    // console.warn(re.target.value);

    let item = e.target.value;
    if (item === email) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(item);
    // console.log(item);
  }

  function PasswordHandler(e) {
    // console.log(e.target.value);
    let item = e.target.value;
    if (item === password) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  function loginHandle(e) {

    e.preventDefault();
    // {Data.filter(val=>val.username).map(filterName=>(

    // ))}
    // const userDetails = useContext(UserContext);
    if (email === "sam@gmail.com" && password === "123456789" )
     { 
       //userrole=1
       dispatch({ type:'UPDATE_ROLE', data: 1});

      navigate("/dashboard");
    
      // alert("Welcome to Monexo");
    }   
 
    else if ( email === "admin@gmail.com" && password === "admin123" )
     {
      dispatch({ type: 'UPDATE_ROLE', data: 3}); //tab done, 
      navigate("/dashboard");
    } 
    else if (email === "user@gmail.com" && password === "user123" ) 
    {
      dispatch({ type:'UPDATE_ROLE', data: 4 });
      navigate("/dashboard");
    } 
    else {
      alert("Provide Valid Input");
    }
 

    // setUserRole(1)

    // }else if (email==="admin@gmail.com" && password==="123456789")
    // {
    //   navigate('/dashboard')
    //   setUserRole(3)

    // } else {

    const enteredValue = usernameRef.current.value;
    //  console.log(enteredValue)
  
  
    //  const user = {
    //    email: email,
    //    password: password,
    //  };
    //  axios.get('http://localhost:8000/user',
    //  {
    //    headers:{
    //      "Content-Type": "application/json",
    //   }
    //  }).then(res =>{
    //    console.log(res)
   
      // if(res.data.code === 1){
        //  const access_token = res.data.Token
        //  const userNameIs = res.data.firstName
        // const userRoleis = Data.user.userrole
        //  localStorage.setItem("token",access_token)
        //  setAuthToken(access_token)
        //  props.onChange(userNameIs);
        //  dispatch(authAction.setUserNameApp(userNameIs))
        //  dispatch(authAction.setUserRoken(access_token))
      //    dispatch(authAction.setUserRole(userRoleis))
      //    setEmail("");
      //    setPassword("");
      //    navigate('/dashboard')
      //  }else{
      //    setEmail("");
      //    setPassword("");
      //    alert("wrong username or password")
      //  }
    //  })
  }


  return (
    <>

    <Grid container>
      <Grid style={div1Style} item lg={6}>
        <div className={classes.logo}>
          <img src={monexologo} style={image} />
          <div className={classes.line}></div>
          <img src={ndfc} style={pnglogo} />
        </div>
      
        <div>
          <div style={paperStyle}>
            <Grid align="left">
              <h2>Login</h2>
            </Grid>
          
            <form onSubmit={loginHandle}>
          
              <Grid item md={4}>
        
                <TextField
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon style={{ width: 20, height: 16 }} />
                      </InputAdornment>
                    ),
                  }}
                  ref={usernameRef}
                  variant="filled"
                  placeholder="Email Address"
                  fullWidth
                  required
                  style={txt}
                  value={email}
                  onChange={emailHandler}
                />

                {emailErr ? (
                  <pre style={{ color: "red" }}>Please provide Valid Email</pre>
                ) : (
                  ""
                )}
        
              </Grid>

            
              <Grid item md={4}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon style={{ width: 18, height: 21 }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
                  placeholder="Password"
                  type="password"
                  fullWidth
                  required
                  style={txt}
                  ref={passwordRef}
                  value={password}
                  onChange={PasswordHandler}
                />
                {passErr ? (
                  <pre style={{ color: "red" }}>
                    Please provide Valid Password
                  </pre>
                ) : (
                  ""
                )}
              </Grid>
              <Grid>
                <Typography
                  style={{ textAlign: "right", marginTop: 15, marginRight: 20 }}
                >
                  <Link
                    href="#"
                    style={{ color: "green", position: "relative", left: 80 }}
                  >
                    <span> Forgot password ?</span>
                  </Link>
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                >
                  Login
                </Button>
            
              </Grid>
           
            </form>
          
          </div>
        </div>
      </Grid>
      <Grid style={div2Style} item lg={6}>
        <div style={{ backgroundColor: "green", height: "100vh" }}></div>
      </Grid>
    </Grid>
    
    </>
  );
};
export default Login;
