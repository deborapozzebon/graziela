
import Link from 'next/link'
import { PrimicBlogPost, Prismic } from '../../interfaces/GeneralInterfaces'
import styles from './styles.module.scss'
import PostPreview from '../PostPreview'
import { useEffect, useState } from 'react'


export default function BlogComponent({ posts }: Prismic) {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window?.innerWidth : 0 
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window?.innerWidth
      })
    }
      
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <div className={styles.blogContent}>
      <h2>Blog</h2>

      {posts &&
        <div className={styles.others_articles}>
          <ul>
            {dimensions.width > 1440 && posts.results.slice(0, 3).map((post: PrimicBlogPost) => {
              return (
                <li key={post.id}>
                  <PostPreview
                    title={post.data.title}
                    slug={post.uid}
                    coverimage={post.data.coverimage}
                    date={post.first_publication_date}
                    covercontent={post.data.covercontent}
                    displayAuthor={false}
                  />
                </li>
              )
            })}
            {dimensions.width > 750 && dimensions.width <= 1440 && posts.results.slice(0, 2).map((post: PrimicBlogPost) => {
              return (
                <li key={post.id}>
                  <PostPreview
                    title={post.data.title}
                    slug={post.uid}
                    coverimage={post.data.coverimage}
                    date={post.first_publication_date}
                    covercontent={post.data.covercontent}
                    displayAuthor={false}
                  />
                </li>
              )
            })}
            {dimensions.width <= 750 && posts.results.slice(0, 1).map((post: PrimicBlogPost) => {
              return (
                <li key={post.id}>
                  <PostPreview
                    title={post.data.title}
                    slug={post.uid}
                    coverimage={post.data.coverimage}
                    date={post.first_publication_date}
                    covercontent={post.data.covercontent}
                    displayAuthor={false}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      }

      <button>
        <Link href={'/blog'}>
          Ver mais
        </Link>
      </button>
    </div>
  )
}

