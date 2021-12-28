import { useEffect, useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if(userToken){
        return userToken;
    }else return {"success":false,"error":{"code":"401","error":"Invalid credentials"},"data":null}
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };
  const removeToken = userToken => {
      console.log('logout');
    localStorage.removeItem('token');
    setToken(getToken());
  }; 
  useEffect(()=>{},[token]) 
  return {
    setToken: saveToken,
    removeToken,
    token
  }  
}