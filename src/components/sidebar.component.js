import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar" className="gradient-custom-2">
      <div id="app-title" className="d-flex align-items-center justify-content-center p-3" style={{color: "aliceblue", fontWeight: "bold"}}>
        <span>Wing App</span>
      </div>
      <div className="menubar pt-4 mt-4">
        <div className="p-2">
          <Link to="dashboard" id="link">
            <span>Dashboard</span>
          </Link>
        </div>
        <div className="p-2">
          <Link to="profile" id="link">
            <span>My Profile</span>
          </Link>
        </div>
        <div className="p-2">
          <Link to="users" id="link">
            <span>All Users</span>
          </Link>
        </div>
        <div className="p-2">
          <Link to="/" id="link">
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
