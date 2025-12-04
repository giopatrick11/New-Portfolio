export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <nav className="pt-[57px] px-[40px] flex font-dm justify-between items-center bg-[#F2F2F2] ">
        <div className="text-[40px] font-medium overflow-x-hidden">
          <a href="">Gio.</a>
        </div>
        <ul className="flex justify-between end gap-[50px] text-[24px] font-medium ">
          <li>
            <a href="" className="">
              Services
            </a>
          </li>
          <li>
            <a href="">Work</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>

      <section className="bg-[#F2F2F2] pt-[85px] font-dm pb-[40px]">
        <div className=" leading-[0.95] tracking-[-0.02px]">
          <p className="flex font-extrabold text-[128px] justify-center">
            BUILD RESPONSIVE
          </p>
          <p className="font-extrabold text-[128px] flex justify-center">
            & FUNCTIONAL
          </p>
          <p className="font-extrabold text-[128px] flex justify-center">
            WEB INTERFACES
          </p>
        </div>
        <a className="font-dm text-[32px] text-regular pt-[30px] flex justify-center">
          Through clean, functional web development
        </a>
        <button className="bg-[#1B1B1B] text-white px-[82px] py-[12px] rounded-[100px] text-[32px] mt-[50px] flex mx-auto">
          Work with me!
        </button>
      </section>
      <div className="bg-[#1B1B1B]">
        <section className="pt-[100px] pb-[100px] px-[40px] font-dm text-white">
          <p className="text-[40px] font-extrabold text-center">
            Services I offer
          </p>
        </section>
      </div>
    </div>
  );
}
