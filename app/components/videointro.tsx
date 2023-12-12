interface VideoIntroProps {
    videoPath: string;
    speedVideo: number;
}


export default function VideoIntro(props: VideoIntroProps) {
    return (
        
        <video className="h-full w-full object-cover absolute" autoPlay loop muted playsInline>
          <source src={props.videoPath} type="video/mp4" />
        </video>
      

    );

};