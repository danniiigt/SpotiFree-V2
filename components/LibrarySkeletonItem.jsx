export const LibrarySkeletonItem = () => {
  return (
    <div className="bg-neutral-600/10 flex rounded items-center gap-2 cursor-pointer transition-all duration-200 animate__animated animate__fadeIn animate__fadeOut">
      <div className="w-[40px] h-[40px] rounded animate-pulse bg-neutral-800"></div>
      <div className="flex flex-col gap-1 w-2/3">
        <div className="w-full h-[8px] rounded-sm animate-pulse bg-neutral-800"></div>
        <div className="w-2/3 h-[6px] rounded-sm animate-pulse bg-neutral-800"></div>
      </div>
    </div>
  );
};
