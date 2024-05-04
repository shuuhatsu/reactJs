import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <main className="flex-1 p-8">
        <div className="bg-stone-200 rounded-lg shadow-md p-6 h-3/5">
          <h2 className="text-2xl font-semibold mb-4 text-black">Student Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="absolute top-50">
              <img src="shocked.jpg" className="h-40 rounded-full border-black border-2"></img>
              <h3 className="text-xl font-semibold mb-2 text-black">Joshua Amper</h3>
              <p className="text-gray-700">Year Level: 2nd Year</p>
              <p className="text-gray-700">Course: BSIT</p>
              <p className="text-gray-700">Student Type: Scholar</p>
            </div>

          </div>
        </div>
      </main>
    );
  }
}

export default Students;
