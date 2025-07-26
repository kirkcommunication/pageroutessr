import React from 'react'
import { GetServerSideProps } from 'next'
import { GetPostDetail } from '../../lib/getData'
import { PostTypes } from '../../types/wordpress'
import Head from 'next/head'

type Props = {
    postdetail : PostTypes | null;
};
export default function PostDetails({postdetail} : Props) {
  return (
<>
<Head>
        <title>{postdetail?.yoast_head_json?.title || "Default Title"}</title>
        <meta name="description" content={postdetail?.yoast_head_json?.og_description	} />
        {/* You can also add og: and twitter: tags */}
      </Head>
    <div className='flex flex-col container m-auto px-3 py-3 bg-white'>
      { postdetail?.title?.rendered && (<h1 dangerouslySetInnerHTML={{__html:postdetail.title.rendered}}/>)}
      { postdetail?.title?.rendered && (<div dangerouslySetInnerHTML={{__html:postdetail.content.rendered}} />)}
    </div>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async(context)=>{
const slug = context.params?.slug as string;
    const postdetail = await GetPostDetail(slug);
    if(!postdetail){
        return{
            notFound:true,
        }
    }
    return{
        props : {postdetail}
    }
}