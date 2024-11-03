import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ServerList from './components/ServerList';
import ChatArea from './components/ChatArea';

function App() {
  const [selectedChannel, setSelectedChannel] = useState('general');

  return (
    <div className="flex h-screen bg-[#1a1b1e] text-gray-100">
      <ServerList />
      <Sidebar selectedChannel={selectedChannel} onChannelSelect={setSelectedChannel} />
      <ChatArea channel={selectedChannel} />
    </div>
  );
}

export default App;