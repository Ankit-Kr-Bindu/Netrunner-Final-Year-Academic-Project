import React from "react";

interface HostFormProps {
  newHostName: string;
  setNewHostName: (name: string) => void;
  newHostIp: string;
  setNewHostIp: (ip: string) => void;
  newHostUsername: string;
  setNewHostUsername: (username: string) => void;
  newHostPassword: string;
  setNewHostPassword: (password: string) => void;
  addHost: () => void;
}

const HostForm: React.FC<HostFormProps> = ({
  newHostName,
  setNewHostName,
  newHostIp,
  setNewHostIp,
  newHostUsername,
  setNewHostUsername,
  newHostPassword,
  setNewHostPassword,
  addHost,
}) => {
  return (
    <div className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Host Name"
          value={newHostName}
          onChange={(e) => setNewHostName(e.target.value)}
          className="p-2 border rounded bg-white dark:bg-transparent dark:text-white"
        />
        <input
          type="text"
          placeholder="IP Address"
          value={newHostIp}
          onChange={(e) => setNewHostIp(e.target.value)}
          className="p-2 border rounded bg-white dark:bg-transparent dark:text-white"
        />
        <input
          type="text"
          placeholder="Username"
          value={newHostUsername}
          onChange={(e) => setNewHostUsername(e.target.value)}
          className="p-2 border rounded bg-white dark:bg-transparent dark:text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={newHostPassword}
          onChange={(e) => setNewHostPassword(e.target.value)}
          className="p-2 border rounded bg-white dark:bg-transparent dark:text-white"
        />
        <button
          onClick={addHost}
          className="w-10 h-10 bg-transparent text-green-500 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-200"
          title="Add a new host"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default HostForm;