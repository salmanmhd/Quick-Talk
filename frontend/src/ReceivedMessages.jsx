function ReceivedMessages({ msg }) {
  return (
    <div className='flex justify-start'>
      <div className='bg-blue-700 text-white py-2 px-4 rounded-lg max-w-xs break-words shadow-md'>
        {msg}
      </div>
    </div>
  );
}

export default ReceivedMessages;
