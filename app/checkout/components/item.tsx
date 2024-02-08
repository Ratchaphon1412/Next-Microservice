export default function Item({
  name,
  color,
  size,
  quantity,
  price,
  image,
}: {
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}) {
  return (
    <div className="flex flex-col  rounded-lg  sm:flex-row">
      <img
        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        src={image}
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{name}</span>
        <span className="float-right text-gray-400">
          color: {color} , size: {size} , quantity: {quantity}
        </span>
        <p className="text-lg font-bold">฿{price}</p>
      </div>
    </div>
  );
}
