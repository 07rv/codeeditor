import {
  UserIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
  UserCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useState, useRef } from "react";

const EditorPage = () => {
  const [showUser, setShowUser] = useState(false);
  const timeoutRef = useRef(null); // To store the timeout

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout
    }
    setShowUser(true); // Show UserList immediately on hover
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowUser(false); // Hide UserList after a delay
    }, 5000); // Adjust the delay time as needed (500ms in this case)
  };

  return (
    <>
      <div class="relative bg-slate-900 w-screen h-screen pattern">
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
        <UserList
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      )}
    </>
  );
};

export default EditorPage;

const UserList = ({ handleMouseEnter, handleMouseLeave }) => {
  return (
    <div
      onMouseEnter={handleMouseEnter} // Show UserList on hover
      onMouseLeave={handleMouseLeave} // Hide UserList with a delay when not hovering
      class="relative bg-slate-900 w-screen h-screen pattern"
    >
      <nav class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t p-2.5 shadow-lg backdrop-blur-lg border-slate-600/60 bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-32 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2"
        >
          <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <Profile />
          </li>
          <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <Profile />
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Profile = () => {
  return (
    <>
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">Name</h3>
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">Acount owner</p>
        </div>
        <UserCircleIcon class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="flex w-0 flex-1">
            <a
              href="howpossible17@example.com"
              class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <EnvelopeIcon class="h-5 w-5 text-gray-400" />
              Email
            </a>
          </div>
          <div class="-ml-px flex w-0 flex-1">
            <a
              href="tel:+1-202-555-0170"
              class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <ArrowTopRightOnSquareIcon class="w-5 h-5 shrink-0" />
              Remove
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
