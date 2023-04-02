// src/components/Chat.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Fetch conversation history or initialize with a greeting message
  }, []);

  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { type: 'user', content: inputMessage }]);
    setInputMessage('');

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `User: ${inputMessage}\nAI: `,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.8,
      });

      const aiMessage = response.data.choices[0].text.trim();
      setMessages([...messages, { type: 'user', content: inputMessage }, { type: 'ai', content: aiMessage }]);
    } catch (error) {
      console.error(error);
      setMessages([...messages, { type: 'user', content: inputMessage }, { type: 'ai', content: 'Error: Unable to fetch response from the AI.' }]);
    }
  };

 

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-500 text-white text-center py-4 text-xl font-semibold">
        Chat with OpenAI
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`rounded-lg p-2 mb-2 ${message.type === 'user' ? 'bg-blue-300 self-end' : 'bg-gray-200 self-start'}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-2">
        <input
          className="w-full px-3 py-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-700"
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
         
        />
      </div>
    </div>
  );
};

export default Chat;
