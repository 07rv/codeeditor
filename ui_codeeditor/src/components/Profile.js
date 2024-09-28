import {
  ArrowTopRightOnSquareIcon,
  UserCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const Profile = ({ user }) => {
  return (
    <>
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="truncate text-sm font-medium text-gray-900">
              {user?.name}
            </h3>
          </div>
          <p className="mt-1 truncate text-sm text-gray-500">Acount owner</p>
        </div>
        <UserCircleIcon className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" />
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href="howpossible17@example.com"
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
    </>
  );
};

export default Profile;
