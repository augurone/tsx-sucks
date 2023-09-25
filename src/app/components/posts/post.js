import Link from 'next/link'
import { draftMode } from 'next/headers'

// import MoreStories from '../../more-stories'
// import Avatar from '../../avatar'
// import Date from '../../date'
// import CoverImage from '../../cover-image'

// import { Markdown } from '@/lib/markdown'
import { getAllPosts } from '@/app/utils/'

// export async function generateStaticParams() {
//   const allPosts = await getAllPosts(false)

//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export default async function Post({
  params,
}) {
  const { isEnabled } = draftMode();
  const [ post, ...otherPosts ] = await getAllPosts();
  const Post = ({ title } = {}) => (
    <article className="container mx-auto px-5">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {title}
        </h1>
    </article>
  );

  return (
    <>
     <Post {...post}  />
     {otherPosts.map((newPost, i) => <Post key={i} { ...newPost } />)}
    </>
  );
}
