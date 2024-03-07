

function HeroBanner() {
  return (
    <div className="">

      {/* headline */}
      <div className="flex flex-col lg:flex-row items-start p-6 text-gray-600 dark:text-gray-300">
        <div className="text-left text-4xl font-bold">
          <div>
            Hello,
          </div>
          <div>
            I'm Miki
          </div>
        </div>
        <div className="w-4/5 mt-4 text-left text-sm">
          I love to expand my knowledge of programming and enjoy exploring through building new projects.
        </div>
      </div>

      {/* img */}
      <div className="w-full h-96 bg-gray-200"></div>
    </div>
  );
}

export default HeroBanner;