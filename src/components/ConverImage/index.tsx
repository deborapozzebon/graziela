import styles from './styles.module.scss'
import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link'

export default function CoverImage({ title, field, slug, withLink = true }) {
  const image = (
    <PrismicNextImage
      field={field}
    />
  )
  const link = (
    <div className={styles.coverImage}>
      <Link href={`/blog/${slug}`}>
        <a aria-label={title}>{image}</a>
      </Link>
    </div>
  )

  return withLink ? link : image
}