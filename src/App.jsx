import { useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center'>
        Password Generator
      </h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3'>
          copy
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className=' cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor='length'>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='number'>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
