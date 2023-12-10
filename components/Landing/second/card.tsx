'use client'
export default function Component({
  imageSrc,
}: {
  imageSrc: string;
}) {
  return (
    <div
        className="w-full h-[400px]  card card-compact bg-base-100 "
        >
      <figure>
        <img
          className="object-cover h-[250px] w-full"
          src={imageSrc}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
