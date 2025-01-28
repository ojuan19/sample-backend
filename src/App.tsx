import React from 'react';

function App() {
  return (
    <div className="flex h-screen p-4">
      {/* List Section */}
      <div className="flex-1 overflow-auto border border-gray-200 rounded p-2">
        <ul>
          {/* Sample list items */}
          <li className="p-2">Item 1</li>
          <li className="p-2">Item 2</li>
          <li className="p-2">Item 3</li>
        </ul>
      </div>
      
      {/* Input and Button Section */}
      <div className="flex flex-col w-1/3 justify-center items-center border border-gray-200 rounded p-2">
        <input 
          type="text" 
          placeholder="Type here..." 
          className="border rounded px-2 py-1 mb-2"
        />
        <button className="bg-blue-500 text-white rounded px-4 py-2">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
