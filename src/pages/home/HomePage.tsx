import React, { useContext, useEffect } from 'react'
import interceptor from "../../helper/interceptor/Interceptor";
import { useDispatch } from 'react-redux';
import { setProducts } from '../../actions/productActions';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const fetchData = async () => {
    try {
      const response = await interceptor.get("/todos/1");
      dispatch(setProducts(response.data));
      navigate("/dashboread");
    } catch (error) {
    }
  };
  return <div>
    <button className='btn btn-primary' onClick={fetchData}>
      Fetch
    </button>
  </div>;
}

export default HomePage;