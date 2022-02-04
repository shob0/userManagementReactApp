import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../privateRoute";
import Dashboard from "./dashboard.component";
import Header from "./header.component";
import UserManagement from "./user.component";

function MainView() {
  return (
    <div id="sideview">
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </div>
  );
}

export default MainView;
