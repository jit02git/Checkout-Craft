import { useEffect, useState } from 'react';
import api from '../api/axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {products.map((p) => (
        <div key={p._id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{p.title}</h2>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
