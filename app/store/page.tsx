import Image from 'next/image'
import Panel from '@/app/store/components/side'
import Showcase from '@/app/store/components/body'

export default function Home() {


    return(
        <div className='flex p-16  justify-center bg-white'>
            {/* <Panel /> */}
            <Showcase />
        </div>
    )
}