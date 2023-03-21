import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleMessageSubmit = (event) => {
    event.preventDefault();

    // Add the user's message to the messages array
    setMessages([...messages, { text: userInput, user: true }]);

    // Clear the input field
    setUserInput('');

    // Call the chatbot API with the user's message and add the response to the messages array
    fetch(`https://api.chatbot.com/message?q=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        setMessages([...messages, { text: data.message, user: false }]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className = 'chatbot-container'>
      <div className='chatbot-body'>
        {messages.map((message, index) => (
          <div className = 'field' key={index}>
            {message.user ? 'You: ' : 'Chatbot: '}
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
