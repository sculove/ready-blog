import { allPosts } from 'contentlayer/generated'
import BlogLayout from '../../layouts/blog'

const PostPage = ({ post }) => {
  return <BlogLayout post={post} />
}

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find(p => p.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

export default PostPage
