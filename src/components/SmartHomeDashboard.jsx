import { useState } from "react";
import { Switch } from "./Switch";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Thermometer, Wifi, Tv, Fan, CloudSun, Camera, Music, Speaker } from "lucide-react";

const devices = [
  { id: 1, name: "Nest Wifi", icon: <Wifi />, status: true },
  { id: 2, name: "Benq TV", icon: <Tv />, status: false },
  { id: 3, name: "Thermostat", icon: <Thermometer />, status: true },
  { id: 4, name: "Speaker", icon: <Speaker />, status: true },
];

const energyData = [
  { day: "Mon", usage: 80 },
  { day: "Tue", usage: 120 },
  { day: "Wed", usage: 150 },
  { day: "Thu", usage: 102 },
  { day: "Fri", usage: 170 },
  { day: "Sat", usage: 90 },
  { day: "Sun", usage: 110 },
];

export function SmartHomeDashboard() {
  const [deviceStatus, setDeviceStatus] = useState(devices);

  const toggleDevice = (id) => {
    setDeviceStatus((prev) =>
      prev.map((device) =>
        device.id === id ? { ...device, status: !device.status } : device
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Good Morning, Lemonaru</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Weather Widget */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <CloudSun className="text-yellow-500 text-5xl" />
          <p className="text-xl mt-2">28°C</p>
          <p className="text-gray-500">Outdoor Temperature</p>
        </div>

        {/* Air Conditioner Control */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-bold">Air Conditioner</h2>
          <p className="text-4xl font-semibold mt-2">21.5°</p>
          <Switch checked={true} className="mt-3" />
        </div>

        {/* Camera Widget */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <Camera className="text-red-500 text-5xl" />
          <p className="text-xl mt-2">Bed Room</p>
          <p className="text-sm text-red-500">Live</p>
        </div>
      </div>

      {/* Devices Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">My Devices</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {deviceStatus.map((device) => (
          <div key={device.id} className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
            <div className="text-4xl text-blue-500">{device.icon}</div>
            <p className="text-lg mt-2">{device.name}</p>
            <Switch
              checked={device.status}
              onCheckedChange={() => toggleDevice(device.id)}
              className="mt-3"
            />
          </div>
        ))}
      </div>

      {/* Energy Consumption Chart */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Energy Usage</h2>
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-6xl">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={energyData}>
            <XAxis dataKey="day" stroke="#333" />
            <YAxis stroke="#333" />
            <Tooltip contentStyle={{ backgroundColor: "#fff", color: "#333" }} />
            <Line type="monotone" dataKey="usage" stroke="#4f46e5" strokeWidth={3} dot={{ fill: "#4f46e5" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}