import { createClient } from '@prismicio/client'
import { PrismicBlogSinglePost, PrimicBlogPost } from '../../interfaces/GeneralInterfaces'
import { PrismicRichText } from '@prismicio/react'
import styles from './post.module.scss';
import CoverImage from '../../components/ConverImage';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function Post({ post }: PrismicBlogSinglePost) {
  return (
    <>
      <Head>
        <title>{post?.data?.title}</title>
        <meta name="description" content={post?.data?.title} />
        <meta name="og:locale" property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={post?.data?.title} />
        <meta name="og:url" property="og:url" content="Graziela Matana" />
        <meta name="og:site_name" property="og:site_name" content="Graziela Matana" />
        <meta name="og:image" property="og:image" content={post?.data?.coverimage?.url} />
      </Head>
      <div className='container'>
        {post && post.data && (
          <div className={styles.post}>
            <h1>{post?.data?.title}</h1>
            <CoverImage
              title={post?.data?.title}
              slug={post?.data?.slug}
              field={post?.data.coverimage}
              withLink={false}
            />
            <PrismicRichText field={post.data.content} />
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const client = createClient("https://grazi.prismic.io/api/v2")
  const post = await client.getByUID('post', params.slug)

  return {
    props: {
      post,
    },
    revalidate: 60
  }
}


export async function getStaticPaths() {
  const client = createClient("https://grazi.prismic.io/api/v2")
  const allPosts = await client.getByType('post', {
    orderings: [
      {
        field: 'document.first_publication_date',
        direction: 'desc',
      }
    ],
    pageSize: 100
  })


  return {
    paths: allPosts.results?.map((post: PrimicBlogPost) => `/blog/${post.uid}`) || [],
    fallback: true,
  }
}