import React, { useEffect, useState } from 'react';

const ApiData = () => {
  const [Carts, setCarts] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/carts?limit=15&skip=20")
      .then(res => res.json())
      .then(data => setCarts(data.carts));
  }, []);

const allProducts = Carts.flatMap(cart => cart.products);

  return { allProducts };
};

export default ApiData;
