import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 p-8">
        <div className="bg-stone-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-black">Dashboard</h2>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-black">Student List</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Age</th>
                    <th className="px-6 py-3 border-b border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-black">1</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-black">Joshua Amper</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-black">21</td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300 text-black">Enrolled</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>

        <div className="bg-stone-200 rounded-lg shadow-md p-6 my-10 w-96">
            <h3 className="text-xl font-semibold mb-2 text-black">Students Enrolled</h3>
            <p className="text-black">1 Active Student(s)</p>
            <p className="text-black">0 Inactive Student(s)</p>
            <p className="text-black">___________________________</p>
            <p className="text-black">1 Total student(s) Enrolled</p>
          </div>
      </main>
    );
  }
}

export default Dashboard;
