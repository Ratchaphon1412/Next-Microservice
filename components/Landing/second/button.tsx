
export default function Component({
  callBack,
  slideNum,
  direction,
}: {
  callBack: any;
  slideNum: Number;
  direction: string;
}) {
  return (
    <a
      onClick={callBack}
      href={`#slide${slideNum}`}
      className="btn btn-circle text-xl"
    >
      {direction} 
    </a>
  );
}
