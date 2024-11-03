import React from 'react';
import { Hash, Bell, Pin, Users, AtSign, Search, PlusCircle, Gift, Smile, Plus } from 'lucide-react';

interface ChatAreaProps {
  channel: string;
}

const messages = [
  {
    id: 1,
    user: 'System',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop',
    timestamp: new Date().toISOString(),
    content: 'Welcome to the Discord clone! 👋',
  },
  {
    id: 2,
    user: 'User123',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    timestamp: new Date().toISOString(),
    content: 'Hey everyone! How are you all doing?',
  },
];

function ChatArea({ channel }: ChatAreaProps) {
  return (
    <div className="flex-1 flex flex-col bg-[#313338]">
      <div className="h-12 px-4 flex items-center justify-between border-b border-[#1f2023] shadow-sm">
        <div className="flex items-center">
          <Hash className="w-5 h-5 text-gray-400 mr-2" />
          <span className="font-bold">{channel}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300">
            <Bell className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-300">
            <Pin className="w-5 h-5" />
          </button>
          <button className="hover:text-gray-300">
            <Users className="w-5 h-5" />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1e1f22] px-2 py-1 rounded text-sm w-36 focus:outline-none"
            />
            <Search className="w-4 h-4 absolute right-2 top-1.5 text-gray-400" />
          </div>
          <button className="hover:text-gray-300">
            <AtSign className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-4">
            <img
              src={message.avatar}
              alt={message.user}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{message.user}</span>
                <span className="text-xs text-gray-400">
                  {new Date(message.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-100">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <div className="bg-[#383a40] rounded-lg p-2">
          <div className="flex items-center space-x-2 mb-2">
            <button className="p-2 hover:bg-[#404249] rounded">
              <Plus className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#404249] rounded">
              <PlusCircle className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#404249] rounded">
              <Gift className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder={`Message #${channel}`}
              className="flex-1 bg-transparent focus:outline-none"
            />
            <button className="p-2 hover:bg-[#404249] rounded">
              <Smile className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;