import {
  UserIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import Users from "./Users";

const SideBar = ({ children }) => {
  const [showUser, setShowUser] = useState(false);
  const timeoutRef = useRef(null); // To store the timeout

  const [users, setUsers] = useState([
    { id: 1, name: "Rohit" },
    { id: 2, name: "Rohit1" },
  ]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout
    }
    setShowUser(true); // Show UserList immediately on hover
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowUser(false); // Hide UserList after a delay
    }, 500); // Adjust the delay time as needed (500ms in this case)
  };

  return (
    <>
      <div class="relative bg-slate-900 w-screen h-screen pattern">
        <div className="translate-x-60">{children}</div>
        <nav class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t p-2.5 shadow-lg backdrop-blur-lg border-slate-600/60 bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
          <button class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-sky-900 text-sky-50">
            <UserIcon class="w-6 h-6 shrink-0" />
            <small class="text-center text-xs font-medium">Rohit</small>
          </button>
          <button
            onMouseEnter={handleMouseEnter} // Show UserList on hover
            onMouseLeave={handleMouseLeave} // Hide UserList with a delay when not hovering
            class={`flex h-16 w-16 flex-col items-center justify-center gap-1 hover:bg-sky-900 text-gray-400 ${
              showUser ? "bg-sky-900" : ""
            }`}
          >
            <UserGroupIcon class="w-6 h-6 shrink-0" />
            <small className="text-xs font-medium">Users</small>
          </button>
          <hr class="border-gray-700/60" />

          <button
            class={`flex h-16 w-16 flex-col items-center justify-center gap-1 hover:bg-sky-900 text-gray-400`}
          >
            <ClipboardDocumentIcon class="w-6 h-6 shrink-0" />
            <small className="text-xs font-medium">Invite</small>
          </button>

          <button class="flex h-16 w-16 flex-col items-center justify-center gap-1 hover:bg-sky-900 text-gray-400">
            <ArrowTopRightOnSquareIcon class="w-6 h-6 shrink-0" />
            <small className="text-xs font-medium">Leave</small>
          </button>
        </nav>
      </div>

      {showUser && (
        <Users
          users={users}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      )}
    </>
  );
};

export default SideBar;
