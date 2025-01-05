function Header({ user }) {
  return (
    <header className='bg-gray-800 rounded-t-md flex justify-between border-b border-gray-700 text-white py-4 px-6 shadow-md'>
      <h1 className='text-lg font-semibold'>Quick Talk</h1>
      <h1 className='text-lg font-semibold'>Welcome, {user}</h1>
    </header>
  );
}

export default Header;
