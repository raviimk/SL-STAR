import React, { useState } from 'react';
import './App.css';

function App() {
  const [packets, setPackets] = useState([]);
  const [kapanNo, setKapanNo] = useState('');
  const [shape, setShape] = useState('');

  const handleAdd = () => {
    if (!kapanNo || !shape) return alert("Please enter Kapan No and Shape");

    const newPacket = {
      kapanNo,
      shape,
      date: new Date().toLocaleString()
    };
    setPackets([newPacket, ...packets]);
    setKapanNo('');
    setShape('');
  };

  const handleDelete = (index) => {
    const newList = [...packets];
    newList.splice(index, 1);
    setPackets(newList);
  };

  return (
    <div className="app-bg min-h-screen p-6 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">💎 Diamond Packet Tally</h1>

      <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl mb-6 w-full max-w-md animate__animated animate__fadeInUp">
        <input
          type="text"
          value={kapanNo}
          onChange={(e) => setKapanNo(e.target.value)}
          placeholder="Kapan Number"
          className="mb-3 w-full p-2 rounded bg-white text-black"
        />
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          className="mb-3 w-full p-2 rounded bg-white text-black"
        >
          <option value="">Select Shape</option>
          <option value="ROUND">ROUND</option>
          <option value="PEAR">PEAR</option>
          <option value="EMERALD">EMERALD</option>
          <option value="MARQUISE">MARQUISE</option>
        </select>
        <button onClick={handleAdd} className="pixel-btn w-full py-2 rounded bg-green-500 hover:bg-green-600 transition">
          ➕ Add Packet
        </button>
      </div>

      <div className="w-full max-w-3xl">
        <h2 className="text-xl mb-2">📦 Total Packets: {packets.length}</h2>
        <table className="w-full text-left table-fixed bg-white bg-opacity-10 rounded overflow-hidden">
          <thead>
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">Kapan No</th>
              <th className="p-2">Shape</th>
              <th className="p-2">Date</th>
              <th className="p-2">❌</th>
            </tr>
          </thead>
          <tbody>
            {packets.map((p, i) => (
              <tr key={i} className="border-t border-white/20 hover:bg-white/5 transition">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{p.kapanNo}</td>
                <td className="p-2">{p.shape}</td>
                <td className="p-2">{p.date}</td>
                <td className="p-2">
                  <button onClick={() => handleDelete(i)} className="text-red-400 hover:text-red-600">Delete</button>
                </td>
              </tr>
            ))}
            {packets.length === 0 && (
              <tr><td colSpan="5" className="text-center p-4 text-gray-300">No Packets Added Yet</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
