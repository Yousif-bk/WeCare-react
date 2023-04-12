import React, { useEffect } from 'react'
import { ProductsState } from '../../models/ProductsState';
import { useSelector } from 'react-redux';

function Dashboread() {
   const products = useSelector((state: ProductsState) => state.products);
   console.log(products, "products");
  return <div>Dashboread</div>;
}

export default Dashboread