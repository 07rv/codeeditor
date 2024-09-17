import {
  UserIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const EditorPage = () => {
  const [showUser, setShowUser] = useState(false);

  return (
    <>
      <div class="relative bg-slate-900 w-screen h-screen pattern">
        <nav class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t p-2.5 shadow-lg backdrop-blur-lg border-slate-600/60 bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
          <button class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 hover:bg-sky-900 text-sky-50">
            <UserIcon class="w-6 h-6 shrink-0" />
            <small class="text-center text-xs font-medium">Rohit</small>
          </button>
          <button
            onMouseEnter={() => {
              setShowUser(true);
            }}
            onMouseLeave={() => {
              setShowUser(false);
            }}
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

      {showUser && <UserList />}
    </>
  );
};

export default EditorPage;

const UserList = () => {
  return (
    <div class="relative bg-slate-900 w-screen h-screen pattern">
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
        <img
          class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          src="https://qph.cf2.quoracdn.net/main-thumb-554097988-200-xietklpojlcioqxaqgcyykzfxblvoqrb.jpeg"
          alt=""
        />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="flex w-0 flex-1">
            <a
              href="howpossible17@example.com"
              class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              Email
            </a>
          </div>
          <div class="-ml-px flex w-0 flex-1">
            <a
              href="tel:+1-202-555-0170"
              class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                  clip-rule="evenodd"
                />
              </svg>
              Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
