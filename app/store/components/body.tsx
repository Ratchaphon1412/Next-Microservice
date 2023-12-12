import Card from '@/app/store/components/card'
import Paginate from '@/app/store/components/paginate'

export default function Components(){


    return(
        <div className=" rounded-2xl mx-8  ">
            {/* <div className='mb-6'>
                <Paginate />
            </div> */}
            <div className='relative grid grid-cols-3 gap-6 '>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
            </div>
            <div className='mt-6'>
                <Paginate />
            </div>
        </div>
    )
}