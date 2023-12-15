import Intro from '@/components/intro/intro'
import Service from '@/components/services/services'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      <Service/>
    </main>
  )
}
