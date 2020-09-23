import {GET_ERRORS, SET_CURRENT_USER} from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

//Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => 
      dispatch(
        {
          type: GET_ERRORS,
          payload: err.response.data
        }
      ));
};

<<<<<<< HEAD
// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
     // Save to localStorage
     const { token } = res.data;
    // Set token to ls
    localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
=======
export const loginUser = userdata => dispatch => {
    axios
    .post('/api/users/login', newUser)
    .then(res => {
        //Save to localstorage
        const {token} = res.data;
        //Set token to ls
        localStorage.setItem('jwtToken', token);
        //Set token to auth header
        setAuthToken(token);
        //Decode token to get user data
        const decoded = jwt_decode(token);
        //Set current user
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        })
>>>>>>> parent of fbf52ec... added redux for login
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

<<<<<<< HEAD
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
=======
}
>>>>>>> parent of fbf52ec... added redux for login
