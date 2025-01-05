function SentMessage({ msg }) {
  return (
    <div className='flex  justify-end'>
      <div className='bg-gray-700  text-gray-200  py-2 px-4 rounded-lg max-w-xs break-words shadow-md'>
        {msg}
      </div>
    </div>
  );
}

export default SentMessage;
