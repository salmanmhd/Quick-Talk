import { useState } from 'react';

function Login({ setUsername }) {
  const [id, setId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!id) {
      return;
    }
    setUsername(id);
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <div className='w-96 bg-gray-800  items-center rounded-lg shadow-lg p-8 space-y-6'>
        <h1 className='text-xl font-semibold text-gray-100 mb-16 text-center'>
          Enter your username to start chatting
        </h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type='text'
            placeholder='Enter your username'
            className='w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type='submit'
            className='w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-200 ease-in-out'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
