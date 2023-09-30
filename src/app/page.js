import Image from 'next/image';
import { draftMode } from 'next/headers'
import Event from '@/app/components/events/event';

export default async function Home() {
    const { isEnabled } = draftMode();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Event />
    </main>
  );
}
