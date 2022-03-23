import React from 'react';
import { useNavigate } from 'react-router-dom';
const ErrorPage = ()=>{
  
  const navigate = useNavigate();

  return(
    <div>
      <h3>404! Page not found!</h3>
      <a onClick={()=>navigate(-1)}>Go Back</a>
    </div>
  )
}

export default ErrorPage;