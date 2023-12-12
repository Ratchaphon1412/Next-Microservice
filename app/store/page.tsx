import Image from 'next/image'
import Panel from '@/components/Store/panel/body'
import Showcase from '@/components/Store/showcase/body'

export default function Home() {


    return(
        <div className='flex p-16  justify-center bg-white'>
            {/* <Panel /> */}
            <Showcase />
        </div>
    )
}