import { useEffect, useState } from "react";
import userService from "../service/user.service";

function UserManagement() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    userService
      .getUserList()
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "left" }} className="ms-3">
        Users
      </h1>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {userList ? (
            userList.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default UserManagement;
