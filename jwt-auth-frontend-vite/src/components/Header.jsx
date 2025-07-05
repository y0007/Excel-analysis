const Header = ({ username, onLogout }) => (
  <div className="flex justify-end items-center p-4 bg-white shadow-md">
    <select className="border rounded px-2 py-1 mr-4">
      <option>English</option>
    </select>
    <span className="mr-4 font-medium">{username}</span>
    <button onClick={onLogout} className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700">
      Logout
    </button>
  </div>
);

export default Header;
