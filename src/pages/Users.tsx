import { Link, useLoaderData } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  password: never;
  role: string;
}

const Users = () => {
  const users = useLoaderData() as User[];

  return (
    <div>
      <h1>Users</h1>
      <Link to="/users/create">Create User</Link>
      {users.map((user) => (
        <div key={user._id}>
          <Link to={`/users/${user._id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
