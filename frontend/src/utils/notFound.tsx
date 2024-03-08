import { JSX, useState, useEffect } from 'react';
// import { ExclamationTriangleIcon, WrenchScrewdriverIcon, BeakerIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function NotFound(): JSX.Element {

  const [notFoundQuote, setNotFoundQuote] = useState<string>('');
  useEffect(() => {
    fetch("http://127.0.0.1:5000/not-found")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network res no good");
        }
        return res.json();
      })
      .then(({data}) => {
        console.log(data)
        setNotFoundQuote(data)
      })
      .catch((err) => console.error("There was an issue: ", err));
  }, []);

  return (
    <div className="max-w-2xl lg:max-w-6xl mx-auto p-6 lg:px-12 mt-24 mb-40">
      <div className="relative flex flex-col justify-center items-center space-y-4 lg:space-y-6 p-6 h-full rounded-md animate-pulse bg-indigo-50 text-indigo-500 text-2xl font-bold">

        <div className="flex items-center">
          <div className="py-1 px-2 rounded-md bg-red-100">404 - page not found</div>
          {/* <ExclamationTriangleIcon className="ml-4 lg:ml-8 py-1 px-2 w-10 h-10 rounded-full bg-red-100" /> */}
        </div>
        {notFoundQuote &&
          <div className="flex items-center">
            {/* <WrenchScrewdriverIcon className="mr-4 lg:mr-4 py-1 px-2 w-10 h-10 rounded-full bg-yellow-100" /> */}
            <div className="py-1 px-2 rounded-md bg-yellow-100">{`"${notFoundQuote}"`}</div>
          </div>
        }

        {/* use an API here to get inspirational messages */}
        {/* ideas: ChatGPT? */}
      </div>

    </div>
  );
}