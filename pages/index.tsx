import React from 'react'
import { GetServerSideProps } from 'next'
import { GetPageData } from '../lib/getData'
import { PostTypes } from '../types/wordpress'
import Head from 'next/head'

type Props = {
  page : PostTypes | null
}
export default function Home({page }: Props) {
  return (

    <>
        <Head>
        <title>{page?.yoast_head_json?.title || "Default Title"}</title>
        <meta name="description" content={page?.yoast_head_json?.og_description	} />
        {/* You can also add og: and twitter: tags */}
      </Head>
    <div className='flex flex-col container m-auto'>
  
      { page?.title?.rendered && (<h1 dangerouslySetInnerHTML={{__html:page?.title.rendered}} />)}
      { page?.content?.rendered && (<div dangerouslySetInnerHTML={{__html:page?.content.rendered}}/>)}
    
    </div>
    </>
  )
}

export const getServerSideProps : GetServerSideProps = async()=>{
  const page = await GetPageData("home");
  return{
    props : { page}
  }
}
