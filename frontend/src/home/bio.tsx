import { IdentificationIcon } from '@heroicons/react/24/solid';

function Bio() {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 text-gray-600 dark:text-gray-300">
      <IdentificationIcon className="h-8 w-8 text-yellow-400" />
      <div className="mt-4">I'm a fullstack software engineer with 3 years of experience, specializing in frontend, but eager to continue learning backend.</div>
    </div>
  );
}

export default Bio;