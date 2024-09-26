import {
  UserIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
  UserCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useState, useRef, useCallback } from "react";

const EditorPage = () => {
  const [showUser, setShowUser] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowUser(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setShowUser(false);
    }, 500);
  }, []);

  return (
    <div className="relative bg-slate-900 w-screen h-screen pattern">
      <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t p-2.5 shadow-lg backdrop-blur-lg border-slate-600/60 bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        <NavButton label="Rohit" icon={<UserIcon className="w-6 h-6" />} />
        <NavButton
          label="Users"
          icon={<UserGroupIcon className="w-6 h-6" />}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          isActive={showUser}
        />
        <hr className="border-gray-700/60" />
        <NavButton
          label="Invite"
          icon={<ClipboardDocumentIcon className="w-6 h-6" />}
        />
        <NavButton
          label="Leave"
          icon={<ArrowTopRightOnSquareIcon className="w-6 h-6" />}
        />
      </nav>

      {showUser && (
        <UserList
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
};

const NavButton = ({ label, icon, onMouseEnter, onMouseLeave, isActive }) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 ${
        isActive ? "bg-sky-900" : "hover:bg-sky-900"
      } text-sky-50`}
    >
      {icon}
      <small className="text-center text-xs font-medium">{label}</small>
    </button>
  );
};

const UserList = ({ handleMouseEnter, handleMouseLeave }) => {
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-slate-900 w-screen h-screen pattern"
    >
      <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t p-2.5 shadow-lg backdrop-blur-lg border-slate-600/60 bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-32 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2"
        >
          <Profile />
          <Profile />
        </ul>
      </nav>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">Name</h3>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">Account owner</p>
        </div>
        <UserCircleIcon className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" />
      </div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="flex w-0 flex-1">
          <a
            href="mailto:howpossible17@example.com"
            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <EnvelopeIcon className="h-5 w-5 text-gray-400" />
            Email
          </a>
        </div>
        <div className="-ml-px flex w-0 flex-1">
          <a
            href="tel:+1-202-555-0170"
            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5 shrink-0" />
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
