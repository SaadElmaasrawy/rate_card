import illustration from '../images/illustration-thank-you.svg'

export default function Thanks({rate}){
    return(
    <div className=' text-white bg-gradient-to-t from-[#1F2630] to-[#171E28]  rounded-xl p-10 m-auto items-center flex flex-col gap-6'>
        <div>
            <img src={illustration} alt="illustration" />
        </div>
        <div className=' bg-[#272E38] text-[#AC7148] py-2 px-4 rounded-full font-bold'>
            <p> You selected {rate} out of 5</p>
        </div>
        <div>
            <h1 className='text-3xl'>Thank you!</h1>
        </div>
        <div>
            <p className=' text-center text-[12px] text-[#6C737D]'>
                we appreaciate you taking the time to give a<br/>rating.if you ever need more support, don't<br/>hesitate to get in touch!
            </p>
        </div>
    </div>
    )
}