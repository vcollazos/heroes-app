import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext} from '../../auth/authContext';
import { types } from '../../types/types';


 
export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext( AuthContext );
 
  const handleLogin = () => {
    
      const action = {
          type: types.login,
          payload: {name: 'Vanessa'}
      }
      dispatch(action);

      const lastPath = localStorage.getItem('lastPaths') || '/marvel';

      navigate('/marvel', {
        replace: true
      });
  };
 
  return (
    <div className='container mt-5'>
      <h2>Login</h2>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>
        login
      </button>
    </div>
  );
};
