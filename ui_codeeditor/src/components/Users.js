import Profile from "./Profile";

import { useSelector } from "react-redux";

const Users = ({ handleMouseEnter, handleMouseLeave }) => {
  const users = useSelector((state) => state.users.value);
  return (
    users.length > 0 && (
      <div
        onMouseEnter={handleMouseEnter} // Show UserList on hover
        onMouseLeave={handleMouseLeave} // Hide UserList with a delay when not hovering
        className="relative bg-slate-900 w-screen h-screen pattern"
      >
        <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t p-2.5 shadow-lg backdrop-blur-lg border-slate-600/60 bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-32 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {users.map((user, key) => (
              <li
                key={key}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <Profile user={user} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  );
};

export default Users;
