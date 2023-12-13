import Image from "next/image";
// import { loadPosts } from '@/lib/useApi'
import FirstSection from "@/app/components/first-section";
import SecondSection from "@/app/components/second-section";
import SecondSection2 from "@/app/components/second-section2";
import Category from "@/app/components/category";
import ThirdSection from "@/app/components/sign-up";
import FourthSection from "@/app/components/fourth-section";
import FifthSection from "@/app/components/clip-path";
import SixthSection from '@/app/components/horizontal'

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <FirstSection />
      <Category />
      <SecondSection />
      <SecondSection2 />
      <SecondSection />

      {/* <ThirdSection /> */}
      {/* <FourthSection /> */}
      <FifthSection />
      <SixthSection />
    </main>
  );
}
