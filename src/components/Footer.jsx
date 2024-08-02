const FooterEnd = () => {
  return (
    <div className="pt-28 pb-10 px-40">
      <div>
        <div className="flex items-center gap-[240px]">
          <div>
            <div>
              <p className="text-[#9F9F9F] text-[16px]">400 University Drive Suite 200 Coral<br /> Gables,<br />
                FL 33134 USA</p>
            </div>
          </div>
          <div className="flex gap-40">
            <div className="grid gap-10 text-black font-medium">
              <h3 className="text-[#9F9F9F]">Links</h3>
              <h4>Home</h4>
              <h4>Shop</h4>
              <h4>About</h4>
              <h4>Contact</h4>
            </div>
            <div className="grid text-black font-medium">
              <h3 className="text-[#9F9F9F]">Help</h3>
              <h4>Payment Options</h4>
              <h4>Returns</h4>
              <h4>Privasy Policies</h4>
            </div>
          </div>
          <div className="grid gap-[223px]">
            <h3 className="text-[#9F9F9F] -mt-5">NewSlatter</h3>
            <div className="gap-4 flex items-center relative mt-[-345px]">
              <input type="text" placeholder="Enter Your Email Address" className="w-[173px] border-b-2 border-t-0 border-r-0 pb-4 border-l-0 border-black h-[21px]" />
              <button className="font-medium  border-b-2 border-t-0 border-r-0 pb-1 -mt-0.5 border-l-0 border-black ">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="border-t-2 h-[59px] border-[#D9D9D9] mt-10 flex">
          <p className="text-[16px] mt-[40px] font-medium">2022 Meubel House. All rights reverved</p>
        </div>
      </div>

    </div>
  )
}

export default FooterEnd