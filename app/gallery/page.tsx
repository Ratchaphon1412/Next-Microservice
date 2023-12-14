import SignUp from "@/app/components/sign-up"
import FifthSection from "@/app/components/clip-path";
import Slider from "@/app/gallery/components/slider"
import UpImages from "@/app/gallery/components/up-images"
import Gallery from "@/app/gallery/components/gallery"
export default function GalleryPage() {
  return (
    <main className="overflow-hidden">
      <FifthSection videoPath="/assets/video/presentration-pixel-man.mp4" text="PIXEL MAN" />
      {/* <UpImages /> */}
      <Gallery direction={-1500}/>
      <Gallery direction={1500}/>
      <Gallery direction={-1500}/>
      <Gallery direction={1500}/>
      
      <Slider />
      <SignUp />
    </main>
  );
}
