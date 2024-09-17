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
        <button class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5  text-sky-50">
          <UserIcon class="w-6 h-6 shrink-0" />
          <small class="text-center text-xs font-medium">Rohit</small>
        </button>
        <button class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-sky-50">
          <UserIcon class="w-6 h-6 shrink-0" />
          <small class="text-center text-xs font-medium">Rohit</small>
        </button>
        <button class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-sky-50">
          <UserIcon class="w-6 h-6 shrink-0" />
          <small class="text-center text-xs font-medium">Rohit</small>
        </button>
        <button class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-sky-50">
          <UserIcon class="w-6 h-6 shrink-0" />
          <small class="text-center text-xs font-medium">Rohit</small>
        </button>
      </nav>
    </div>
  );
};
