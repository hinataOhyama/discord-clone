import React from 'react';
import { Hash, Volume2, Settings, ChevronDown } from 'lucide-react';

interface SidebarProps {
  selectedChannel: string;
  onChannelSelect: (channel: string) => void;
}

const channels = [
  { id: 'general', name: 'general', type: 'text' },
  { id: 'help', name: 'help', type: 'text' },
  { id: 'gaming', name: 'gaming', type: 'text' },
  { id: 'music', name: 'Music Room', type: 'voice' },
  { id: 'general-voice', name: 'General Voice', type: 'voice' },
];

function Sidebar({ selectedChannel, onChannelSelect }: SidebarProps) {
  return (
    <div className="w-60 bg-[#2b2d31] flex flex-col">
      <div className="h-12 px-4 flex items-center justify-between border-b border-[#1f2023] shadow-sm">
        <h1 className="font-bold">Discord Clone</h1>
        <ChevronDown className="w-5 h-5" />
      </div>
      
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-4">
          <div className="text-xs font-semibold text-gray-400 flex items-center justify-between mb-2">
            <span>TEXT CHANNELS</span>
            <button className="hover:text-gray-200">+</button>
          </div>
          
          {channels.filter(c => c.type === 'text').map(channel => (
            <button
              key={channel.id}
              onClick={() => onChannelSelect(channel.id)}
              className={`w-full flex items-center px-2 py-1 rounded hover:bg-[#35373c] ${
                selectedChannel === channel.id ? 'bg-[#35373c] text-white' : 'text-gray-400'
              }`}
            >
              <Hash className="w-5 h-5 mr-2" />
              <span>{channel.name}</span>
            </button>
          ))}

          <div className="text-xs font-semibold text-gray-400 flex items-center justify-between mt-4 mb-2">
            <span>VOICE CHANNELS</span>
            <button className="hover:text-gray-200">+</button>
          </div>
          
          {channels.filter(c => c.type === 'voice').map(channel => (
            <button
              key={channel.id}
              className="w-full flex items-center px-2 py-1 rounded hover:bg-[#35373c] text-gray-400"
            >
              <Volume2 className="w-5 h-5 mr-2" />
              <span>{channel.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-14 px-2 bg-[#232428] flex items-center">
        <div className="flex-1 flex items-center">
          <div className="w-8 h-8 rounded-full bg-indigo-500 mr-2" />
          <div className="text-sm">
            <div className="font-semibold">User</div>
            <div className="text-xs text-gray-400">#0000</div>
          </div>
        </div>
        <button className="p-1 hover:bg-[#35373c] rounded">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;