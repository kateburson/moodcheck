import api from 'utils/api';
import jwtDecode from 'jwt-decode';

const login = credentials => {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST })
    
    api.post('/knock', credentials).then(res => {
      localStorage.authToken = res.data.token
      
      dispatch({
        type: LOGIN_SUCCESS,
        user: jwtDecode(res.data.token)
      })
    }).catch(res => {
      dispatch({
        type: LOGIN_FAILURE,
        errorMessage: res.data.error
      })
    })
  }
}