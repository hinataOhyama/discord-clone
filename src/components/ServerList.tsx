import React from 'react';
import { Home, Plus, Compass } from 'lucide-react';

const servers = [
  { id: '1', name: 'Home', icon: <Home className="w-7 h-7" /> },
  { id: '2', name: 'Gaming', icon: '🎮' },
  { id: '3', name: 'Music', icon: '🎵' },
  { id: '4', name: 'Art', icon: '🎨' },
];

function ServerList() {
  return (
    <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-3 space-y-2">
      {servers.map((server) => (
        <div
          key={server.id}
          className="w-12 h-12 bg-[#313338] rounded-[24px] flex items-center justify-center hover:rounded-2xl transition-all duration-200 cursor-pointer group relative"
        >
          <div className="absolute left-0 w-1 h-0 bg-white rounded-r group-hover:h-5 transition-all duration-200" />
          {typeof server.icon === 'string' ? (
            <span className="text-2xl">{server.icon}</span>
          ) : (
            server.icon
          )}
        </div>
      ))}
      <div className="w-12 h-[2px] bg-[#35363c] rounded-lg mx-auto my-2" />
      <button className="w-12 h-12 bg-[#313338] rounded-[24px] flex items-center justify-center hover:rounded-2xl transition-all duration-200 hover:bg-green-600 group">
        <Plus className="w-7 h-7 text-green-500 group-hover:text-white" />
      </button>
      <button className="w-12 h-12 bg-[#313338] rounded-[24px] flex items-center justify-center hover:rounded-2xl transition-all duration-200 hover:bg-green-600 group">
        <Compass className="w-7 h-7 text-green-500 group-hover:text-white" />
      </button>
    </div>
  );
}

export default ServerList;