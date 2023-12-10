import Image from 'next/image'
import { loadPosts } from '@/lib/useApi'
import FirstSection from '@/components/Landing/first/first-section'
import SecondSection from '@/components/Landing/second/second-section'

export default async function Home() {

  const posts = await loadPosts()

  return (
    // <ul>
    //   {posts.map((post) => (
    //     <li>{post.id}</li>
    //   ))}
    // </ul>
    <main>
      <FirstSection />
      <SecondSection />
    </main>
    
  )
}

