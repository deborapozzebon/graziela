import { createClient } from '@prismicio/client'
import { useEffect } from 'react';
import Footer from '../components/Footer';
import PostPreview from '../components/PostPreview';
import { PrimicBlogPost, Prismic } from '../interfaces/GeneralInterfaces'
import styles from './blog.module.scss';

export default function Blog({ posts }: Prismic) {
  return (
    <>
      <div className="container">
        <div className={styles.blog}>
          <h1>Blog</h1>
          {posts && posts.results && (
            <ul>
              {posts.results.map((post: PrimicBlogPost) => {
                return (
                  <li key={post.id}>
                    <PostPreview
                      title={post.data.title}
                      slug={post.uid}
                      coverimage={post.data.coverimage}
                      date={post.first_publication_date}
                      covercontent={post.data.covercontent}
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const client = createClient("https://grazi.prismic.io/api/v2")
  const posts = await client.getByType('post', {
    orderings: [
      {
        field: 'document.first_publication_date',
        direction: 'desc',
      }
    ],
    pageSize: 100
  })

  return {
    props: {
      posts: posts,
    },
    revalidate: 60
  }
}
