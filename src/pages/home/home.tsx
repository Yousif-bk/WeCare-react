import React, { useContext } from 'react'
import interceptor from "../../helper/interceptor/Interceptor";

function HomePage() {
  const fetchData = async () => {
       const apiUrl = process.env.REACT_APP_API_BASE_URL;
       console.log(apiUrl, "apiiii");
    try {
      const response = await interceptor.get("/todos/1");
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