import Image from 'next/image'
import Panel from '@/components/Store/panel/body'
import Showcase from '@/components/Store/showcase/body'

export default function Home() {


    return(
        <div className='flex p-16 mt-12 justify-center'>
            <Panel />
            <Showcase />
        </div>
    )
}