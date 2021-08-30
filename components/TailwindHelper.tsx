export const TailwindHelper = () => {
  if (process.env.NODE_ENV !== 'development') return null;
  return (
    <div className="fixed left-4 bottom-4 bg-blue-300 shadow px-8 py-2 rounded-full">
      <span className="text-blue-600 sm:block md:hidden">sm</span>
      <span className="text-blue-600 hidden md:block lg:hidden">md</span>
      <span className="text-blue-600 hidden md:hidden lg:block xl:hidden">lg</span>
      <span className="text-blue-600 hidden xl:block">xl</span>
    </div>
  );
};
