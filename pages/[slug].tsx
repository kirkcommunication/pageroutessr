import React from "react";
import { GetPageData } from "./lib/getData";
import { GetServerSideProps } from "next";
import { PostTypes } from "./types/wordpress";
import Head from "next/head";

type Props = {
  post: PostTypes | null;
};

export default function BlogPage({ post }: Props) {
  return (
    <>
    <Head>
        <title>{post?.yoast_head_json?.title || "Default Title"}</title>
        <meta name="description" content={post?.yoast_head_json?.og_description	} />
        {/* You can also add og: and twitter: tags */}
      </Head>
    <div className="flex flex-col container m-auto px-3 py-3">
      { post?.title?.rendered && (<h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />)}
      { post?.content?.rendered && (<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />)}
    </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = await GetPageData(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post },
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const slug = context.params?.slug as string;
//   const post = await GetPostData(slug);

//   if (!post) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { post },
//   };
// };
