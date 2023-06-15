export const SongsWrapper = ({ children }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-8">
      {children}
    </div>
  );
};
