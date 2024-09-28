import {
  ArrowTopRightOnSquareIcon,
  UserCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

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

export default Profile;
