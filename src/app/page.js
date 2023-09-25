import Image from 'next/image';
import { draftMode } from 'next/headers'
import Post from '@/app/components/posts/post';

export default async function Home() {
    const { isEnabled } = draftMode();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Post />
    </main>
  );
}
