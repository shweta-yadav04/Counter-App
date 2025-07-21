import { useState } from 'react'
import './App.css'

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  return (
    <div className="w-100vh h-screen flex justify-center bg-[#a1a5cf] items-center flex-col gap-4">
      <div className="text-4xl font-bold text-[#000909e1] mb-6">INCREMENT &amp; DECREMENT</div>
      
      <div className="text-6xl font-bold text-white mb-8">{count}</div>
      
      <div className="flex gap-4">
        <button 
          onClick={decrement}
          className="bg-[#f62020] hover:bg-[#f98088] text-white font-bold py-2 px-6 rounded-lg text-2xl">
          -
        </button>
        
        <button 
          onClick={increment}
          className="bg-[#398d09] hover:bg-[#a7f37b] text-white font-bold py-2 px-6 rounded-lg text-2xl">
          +
        </button>
      </div>
      
      <div className="mt-4">
        <button 
          onClick={reset}
          className="bg-[#e7ea3389] hover:bg-[#d6e070] text-white font-bold py-2 px-6 rounded-lg text-xl">
          Reset
        </button>
      </div>
    </div>
  )}
