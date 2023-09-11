'use client';
import NavBar from '@/component/NavBar';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <NavBar />
      <h1>hello {count} </h1>
      <button onClick={() => setCount(prev => prev+1)}>+</button>
    </div>
  );
}
