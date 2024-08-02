import { MdCalendarToday } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import React from 'react'
import { bannerbg, herobtm2, herobtm, card, card1, card2, card3, asgaard, cards1, cards2, cards3, backbg,} from "../assets/import"

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${ backbg })`,
    height: '500px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <>

      {/* Hero qismi */}
      <div className='flex items-center pl-40 -mt-5 bg-[#fbebb5]'>
        <div>
          <h2 className='text-[64px] mb-4 font-medium'>Rocket single <br />seater</h2>
          <p className='border-b-2 pb-2 w-max border-black'>Shop Now</p>
        </div>
        <img src={bannerbg} alt="" />
      </div>


      <div className='mb-20 pb-24 flex bg-[#faf4f4] justify-center'>
        <div>
          <img src={herobtm2} alt="" />
          <div className='-mt-40 ml-20'>
            <h2 className='text-[36px] font-medium'>Side table</h2>
            <p className='border-b-2 pb-2 w-max border-black'>View More</p>
          </div>
        </div>
        <div>
          <img src={herobtm} alt="" />
          <div className='-mt-32 ml-20'>
            <h2 className='text-[36px] font-medium'>Side table</h2>
            <p className='border-b-2 pb-2 w-max border-black'>View More</p>
          </div>
        </div>
      </div>


      <div>
        {/* title */}
        <div className='text-center'>
          <h2 className='text-[36px] font-medium'>Top Picks For You</h2>
          <p className='text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>


        <div>
          <div className='flex justify-center gap-20'>
            <div>
              <img src={card} alt="" />
              <p className='text-[16px]'>Trenton modular sofa_3</p>
              <h3 className='text-[24px] font-medium'>Rs. 25,000.00</h3>
            </div>
            <div>
              <img src={card1} alt="" />
              <p className='text-[16px]'>Trenton modular sofa_3</p>
              <h3 className='text-[24px] font-medium'>Rs. 25,000.00</h3>
            </div>
            <div>
              <img src={card2} alt="" />
              <p className='text-[16px]'>Trenton modular sofa_3</p>
              <h3 className='text-[24px] font-medium'>Rs. 25,000.00</h3>
            </div>
            <div>
              <img src={card3} alt="" />
              <p className='text-[16px]'>Trenton modular sofa_3</p>
              <h3 className='text-[24px] font-medium'>Rs. 25,000.00</h3>
            </div>
          </div>
          <p className='border-b-2 pb-2 w-max border-black mx-auto mt-20 mb-20 text-[20px] font-medium'>View More</p>
        </div>
      </div>


      <div className='flex items-center mx-auto bg-[#fff9e5] pl-28 gap-8'>
        <img src={asgaard} alt="" />
        <div className='text-center -mt-5'>
          <h3 className='text-[24px] font-medium'>New Arrivals</h3>
          <h1 className='text-[48px] font-bold'>Asgaard Sofa</h1>
          <button className='text-[20px] w-[255px] h-[64px] border border-black'>Order Now</button>
        </div>
      </div>


      <div>
        <div className='text-center mt-16 mb-14'>
          <h2 className='text-[36px] font-medium'>Our Blogs</h2>
          <p className='text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>

        <div>
          <div className="flex justify-center gap-10">
            <div>
              <img src={cards1} alt="" />
              {/* content qismi */}
              <div className="w-[393px] text-center grid gap-3 mt-3">
                <p className='text-[20px] text-center'>Going all-in with millennial design</p>
                <p className='border-b-2 pb-2 mx-auto w-max font-medium border-black text-[24px]'>Read More</p>
                <div className="grid grid-cols-2 w-max ml-[70px]">
                  <h4 className="text-[16px] mx-auto font-light flex items-center"><MdOutlineAccessTime />5 min</h4>
                  <h4 className="text-[16px] mx-auto font-light flex items-center"><MdCalendarToday />12th Oct 2022</h4>
                </div>
              </div>
            </div>
            <div>
              <img src={cards2} alt="" />
              {/* content qismi */}
              <div className="w-[393px] text-center grid gap-3 mt-3">
                <p className='text-[20px] text-center'>Going all-in with millennial design</p>
                <p className='border-b-2 pb-2 mx-auto w-max font-medium border-black text-[24px]'>Read More</p>
                <div className="grid grid-cols-2 w-max ml-[70px]">
                  <h4 className="text-[16px] mx-auto font-light flex items-center"><MdOutlineAccessTime />5 min</h4>
                  <h4 className="text-[16px] mx-auto font-light flex items-center"><MdCalendarToday />12th Oct 2022</h4>
                </div>
              </div>
            </div>
            <div>
              <img src={cards3} alt="" />
              {/* content qismi */}
              <div className="w-[393px] text-center grid gap-3 mt-3">
                <p className='text-[20px] text-center'>Going all-in with millennial design</p>
                <p className='border-b-2 pb-2 mx-auto w-max font-medium border-black text-[24px]'>Read More</p>
                <div className="grid grid-cols-2 w-max ml-[70px]">
                  <h4 className="text-[16px] mx-auto font-light flex items-center"><MdOutlineAccessTime />5 min</h4>
                  <h4 className="text-[16px] mx-auto font-light flex items-center"><MdCalendarToday />12th Oct 2022</h4>
                </div>
              </div>
            </div>
          </div>

          <p className='border-b-2 pb-2 mt-10 mb-12 mx-auto w-max font-medium border-black text-[24px]'>Read More</p>
        </div>
      </div>

      <div className="h-[450px] pt-24"style={divStyle}>
        <div className="text-center grid w-[454px] mx-auto gap-5">
          <h1 className="text-[60px] font-bold">Our Instagram</h1>
          <p className="text-[20px]">Follow our store on instagram</p>
          <button className="rounded-[50px] w-[255px] mx-auto shadow-2xl h-[64px] bg-[#FAF4F4] text-[20px]">Folllow us</button>
        </div>
      </div>

    </>
  )
}

export default Home