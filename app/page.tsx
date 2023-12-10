import Image from 'next/image'
import { loadPosts } from '@/lib/useApi'
import FirstLanding from '@/components/Landing/first-section'

export default async function Home() {

  const posts = await loadPosts()

  return (
    // <ul>
    //   {posts.map((post) => (
    //     <li>{post.id}</li>
    //   ))}
    // </ul>

    <FirstLanding />
    
  )
}

