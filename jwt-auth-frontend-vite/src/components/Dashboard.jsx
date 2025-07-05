const Dashboard = ({ username }) => (
  <div className="p-10">
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">Welcome {username}!</h2>
      <p className="text-gray-600">You have successfully logged in.</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded shadow text-center">
          <h3 className="font-semibold mb-2">Uploaded Files</h3>
          <p className="text-gray-700">You haven't uploaded any Excel files yet.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow text-center">
          <h3 className="font-semibold mb-2">AI Insights</h3>
          <p className="text-gray-700">No insights generated yet.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
