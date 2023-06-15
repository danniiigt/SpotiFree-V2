import React from "react";
import { LibrarySkeletonItem } from "./LibrarySkeletonItem";

export const LibrarySkeleton = () => {
  return (
    <div className="space-y-2">
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
      <LibrarySkeletonItem />
    </div>
  );
};
