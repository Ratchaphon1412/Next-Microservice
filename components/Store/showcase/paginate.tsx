import LeftButton from '@/components/Store/showcase/leftButton'
import RightButton from '@/components/Store/showcase/rightButton'

export default function Components(){


    return(
        <div className="flex bg-white h-8 justify-between divide-x-4 divide-black">
            <LeftButton />
            <div className='text-black py-1 w-full flex justify-center'>
                Page: current
            </div>
            <RightButton />
        </div>
    )
}