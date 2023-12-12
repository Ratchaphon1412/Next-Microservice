import Image from 'next/image'
// import { loadPosts } from '@/lib/useApi'
import FirstSection from '@/components/Landing/first/first-section'
import SecondSection from '@/components/Landing/second/second-section'
import SecondSection2 from '@/components/Landing/second/second-section2'
import ThirdSection from '@/components/Landing/third/sign-up'
import FourthSection from '@/components/Landing/fourth/fourth-section'

export default async function Home() {

  // const posts = await loadPosts()

  return (
    <main>
      <FirstSection />
      <SecondSection />
      <SecondSection2 />
      <ThirdSection />
      <FourthSection />
    </main>
  )
}

