interface ServiceGrid {
  title: string;
  children: any;
}

interface PrimicBlogPost {
  id: string,
  uid: string,
  url: string,
  type: string,
  href: string,
  tags: any[]
  first_publication_date: string,
  last_publication_date: string,
  slugs: any[]
  linked_documents: any[]
  lang: string,
  alternate_languages: any[]
  data: PrismicBlogData
}

interface PrismicBlog {
  page: number,
  results_per_page: number,
  results_size: number,
  total_results_size: number,
  total_pages: number,
  next_page: string,
  prev_page: string
  results: PrimicBlogPost[]
}

interface PrismicBlogSinglePost {
  post: PrimicBlogPost
}

interface PrismicBlogData {
  title: string,
  covercontent: string,
  coverimage: any,
  slug: any,
  content: []
}

interface Prismic {
  posts: PrismicBlog
}

interface PostPreviewData {
  coverimage: any
  title: string
  slug: string
  covercontent: string
  date: any
}

export type {
  ServiceGrid,
  Prismic,
  PrismicBlogData,
  PrismicBlog, 
  PrimicBlogPost,
  PostPreviewData,
  PrismicBlogSinglePost
}