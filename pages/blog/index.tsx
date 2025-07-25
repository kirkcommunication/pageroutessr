import React from "react";
import { GetServerSideProps } from "next";
import { PostTypes } from "../types/wordpress";
import Link from "next/link";

import { GetPaginatedPosts } from "../lib/getData";

import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

type Props = {
  post: PostTypes | null;
  currentPage: number;
  totalPages: number;
};
export default function BlogListing({
  post,
  currentPage,
  totalPages,
}: Props  ) {
  return (
    <div className="flex flex-col container m-auto px-3 py-3 bg-white">


<BentoGrid className="mx-auto">
       {Array.isArray(post) && post.map((item, i) => (
         
        <BentoGridItem
          key={i}
          title={<Link href={`/blog/${item.slug}`}>{item.title.rendered}</Link>}
          description=  { item?.excerpt?.rendered && (<div className="text-sm" dangerouslySetInnerHTML={{__html:item?.excerpt.rendered}}/>)}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>

          {/* {Array.isArray(post) && post.map((item, i) => (
        <div key={i}>
          <Link href={`/blog/${item.slug}`}>{item.title.rendered}</Link>
        </div>
      ))} */}

      {/* Pagination Links */}
      <div className="flex gap-2 mt-4">
       {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
  <Link
    key={page}
    href={`/blog?page=${page}`}
    className={`px-3 py-1 border ${
      currentPage === page ? "bg-blue-600 text-white" : ""
    }`}
  >
    {page}
  </Link>
))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = parseInt((context.query.page as string) || "1", 10);
  const perPage = 10;

  const { posts, totalPages } = await GetPaginatedPosts(page, perPage);

  return {
    props: {
      post: posts,
      currentPage: page,
      totalPages,
    },
  };
};