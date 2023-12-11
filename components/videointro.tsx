interface VideoIntroProps {
    videoPath: string;
    speedVideo: number;
}


export default function VideoIntro(props: VideoIntroProps) {
    return (
        <div className="absolute h-screen w-full ">
        <video className="h-full w-full object-cover " autoPlay loop muted playsInline>
          <source src={props.videoPath} type="video/mp4" />
        </video>
      </div>

    );

};