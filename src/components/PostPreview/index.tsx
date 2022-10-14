import { PostPreviewData } from '../../interfaces/GeneralInterfaces'
import CoverImage from '../ConverImage'
import styles from './styles.module.scss'
import Link from 'next/link'
import * as prismicH from '@prismicio/helpers'

export default function PostPreview({ title, slug, coverimage, date, covercontent, displayAuthor = true }: PostPreviewData) {
  return (
    <div className={styles.postPreview}>
      <div className={styles.top_content}>
        <CoverImage
          title={title}
          slug={slug}
          field={coverimage}
          maxHeight={displayAuthor}
        />
        <h3 className={displayAuthor ? '': styles.displayAuthor}>
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className={displayAuthor ? '': styles.displayAuthor}>{covercontent}</p>
      </div>
      {displayAuthor && <div className={styles.bottom_content}>
        <p className={styles.date}>{prismicH.asDate(date).toLocaleDateString()}</p>
        <p className={styles.author}>Por Graziela Matana</p>
      </div>}
    </div>
  )
}