const CustomLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-blue-500 animate-bounce"></div>
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-800 mt-4">
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default CustomLoader;
