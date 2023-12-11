interface VideoIntroProps {
    videoPath: string;
    speedVideo: number;
}


export default function VideoIntro(props: VideoIntroProps) {
    return (
        <div>
        <video  autoPlay loop muted playsInline>
          <source src={props.videoPath} type="video/mp4" />
        </video>
      </div>

    );

};