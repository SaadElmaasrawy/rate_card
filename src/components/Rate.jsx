import { useState } from 'react'
import star from '../images/icon-star.svg'


export default function Rate(props){
const rateArr = [1,2,3,4,5]

const [rateValue ,setRateValue] = useState();
const handleSubmit = ()=>{
    props.onSubmit(rateValue)
}

    return(
        <div className=' text-white bg-gradient-to-t from-[#1F2630] to-[#171E28]  rounded-xl p-10  align-center flex flex-col gap-6'>
            <div className=' p-4 bg-[#272E38] w-fit rounded-full'>
                <img src={star} alt="star" />
            </div>
            <div>
                <h1 className='text-3xl'>How did we do?</h1>
            </div>
            <div>
                <p className=' text-[#6C737D] text-[13px]'>Please let us know how we did with your<br/>support request. All feedback is appreciated<br/>to help us improve our offering!</p>
            </div>
            <div className='flex justify-between'>
                {rateArr.map((n)=><button onClick={()=>{
                    setRateValue(n)                
                    }} className=' bg-[#262F38] w-10 h-10 text-[#6C737D] rounded-full hover:bg-[#FC7613] hover:text-white active:bg-white'>{n}</button>)}
            </div>
            <div>
                <button className=' bg-[#FC7613] w-full rounded-full py-2 hover:text-[#FC7613] hover:bg-white' onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>        
    )
}