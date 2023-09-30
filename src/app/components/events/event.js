import Link from 'next/link'
import { draftMode } from 'next/headers'

// import MoreStories from '../../more-stories'
// import Avatar from '../../avatar'
// import Date from '../../date'
// import CoverImage from '../../cover-image'

// import { Markdown } from '@/lib/markdown'
import { getAllEvents } from '@/app/components/events/eventUtils'

// export async function generateStaticParams() {
//   const allPosts = await getAllPosts(false)

//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }))
// }

export default async function Event({
  params,
}) {
  const { isEnabled } = draftMode();
  const [ event, ...otherEvents ] = await getAllEvents();
  const Event = ({ name } = {}) => (
    <article className="container mx-auto px-5">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {name}
        </h1>
    </article>
  );

  return (
    <>
     <Event {...event}  />
     {otherEvents.map((newEvent, i) => <Event key={i} { ...newEvent } />)}
    </>
  );
}
