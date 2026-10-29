import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const logoutHandler =() =>
  {
    localStorage.setItem("isloggedIn","false");
    navigate("/login",{replace:true});
  }

  return (
    <div className='w-full'>
      <button onClick={()=>logoutHandler()}
       className='fixed top-5 left-5 mt-3 py-2 px-4
       rounded active:scale-95 bg-gray-400
       outline-none hover:scale-102 transition-all'>
        Logout
      </button>
      <h2 className='text-center mt-5'> Welcome to the Dashboard </h2>

    </div>
  )
}

export default Dashboard