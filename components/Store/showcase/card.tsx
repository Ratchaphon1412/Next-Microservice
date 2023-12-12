import CartButton from '@/components/Store/showcase/cartButton'
import ViewButton from '@/components/Store/showcase/viewButton'
export default function Components(){


    return(
        <div className="overflow-hidden bg-white h-48 w-full place-self-center rounded-md hover:h-[32rem] duration-500">
            <div>
                <img src="https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/628a523bc5f87607ead535c5/ece97cd1dcac0a0aaf78.jpg/original" />
            </div>
            <div className="flex justify-around my-4">
                <ViewButton />
                <CartButton />
            </div>
        </div>
    )
}