import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <main className="flex-1 p-8">
        <div className="bg-stone-200 rounded-lg shadow-md p-6 ">
          <h2 className="text-2xl font-semibold mb-4 text-black">Add Students</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              ADD
            </button>
          </div>
        </div>
        <div className="bg-stone-200 rounded-lg shadow-md p-6 mt-5">
          <h2 className="text-2xl font-semibold mb-4 text-black">Configure Student Info</h2>
          <div className="flex items-center space-x-4">
             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              EDIT
            </button>
          </div>
        </div>
        <div className="bg-stone-200 rounded-lg shadow-md p-6 mt-5">
          <h2 className="text-2xl font-semibold mb-4 text-black">Remove Student </h2>
          <div className="flex items-center space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              DELETE
            </button>
          </div>
        </div>

      </main>
    );
  }
}

export default Content;
