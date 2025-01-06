import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Login from './Login';
import Header from './Header';
import SentMessage from './SentMessage';
import ReceivedMessages from './ReceivedMessages';

function App() {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('https://quick-talk-smtd.onrender.com');

    socketRef.current.on('mg', (data) => {
      console.log(data);
      if (data.sender !== username) {
        setMessages((prevMsgs) => [...prevMsgs, data]);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [username]);

  async function handleSendMessage() {
    if (!message) {
      return;
    }
    const data = { message, sender: username };
    await socketRef.current.emit('msg', data);
    setMessages((prevMsgs) => [...prevMsgs, data]);
    setMessage('');
  }

  if (!username) {
    return <Login setUsername={setUsername} />;
  }

  return (
    <div className=' flex justify-center w-full py-4 h-screen'>
      <div className='flex flex-col shadow-xl shadow-black rounded-md w-96  h-full bg-gray-900 text-gray-200'>
        <Header user={username} />

        <div className='flex-1 overflow-y-auto  p-4 space-y-4 bg-gray-800'>
          {messages.map((data, i) =>
            data.sender === username ? (
              <SentMessage msg={data.message} key={i} />
            ) : (
              <ReceivedMessages msg={data.message} key={i} />
            )
          )}
        </div>

        {/* Input Area */}
        <footer className='bg-gray-800 border-t rounded-b-md border-gray-700 p-4'>
          <div className='flex items-center space-x-2'>
            <input
              type='text'
              value={message}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              onChange={(e) => setMessage(e.target.value)}
              className='flex-1 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Type your message...'
            />
            <button
              onClick={handleSendMessage}
              className='bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700'
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
