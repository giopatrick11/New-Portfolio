import react from "./../assets/image-3.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <nav className="pt-[57px] px-[40px] flex font-dm justify-between items-center bg-[#F2F2F2] ">
        <div className="font-medium overflow-x-hidden xl:text-[40px] md:text-[36px] sm:text-[32px] text-[28px]">
          <a href="">Gio.</a>
        </div>
        <ul className="flex justify-between end gap-[50px] font-medium xl:text-[24px] md:text-[20px] sm:text-[18px] text-[12px]">
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

      <section className="bg-[#F2F2F2] xl:pt-[85px] md:pt-[60px] sm:pt-[30px] pt-[10px] font-dm xl:pb-[40px] md:pb-[30px] sm:pb-[20px] pb-[10px]">
        <div className=" leading-[0.95] tracking-[-0.02px]">
          <p className="font-extrabold xl:text-[128px] md:text-[80px] sm:text-[60px] text-[40px] flex justify-center">
            BUILD RESPONSIVE
          </p>
          <p className="font-extrabold xl:text-[128px] md:text-[80px] sm:text-[60px] text-[40px] flex justify-center">
            & FUNCTIONAL
          </p>
          <p className="font-extrabold xl:text-[128px] md:text-[80px] sm:text-[60px] text-[40px] flex justify-center">
            WEB INTERFACES
          </p>
        </div>
        <a className="font-dm text-regular xl:pt-[30px] md:pt-[20px] flex justify-center xl:text-[32px] md:text-[24px] sm:text-[20px] text-[16px] ">
          Through clean, functional web development
        </a>
        <Link
          to="/"
          className="bg-[#1B1B1B] text-white xl:px-[82px] md:px-[60px] sm:px-[30px] px-[20px] py-[12px] rounded-[100px] xl:text-[32px] md:text-[24px] sm:text-[20px] xl:mt-[50px] md:mt-[25px] sm:mt-[15px] mt-[10px] flex mx-auto"
        >
          Work with me!
        </Link>
      </section>

      <div className="bg-[#1B1B1B] pb-[40px]">
        <section className="pt-[100px] font-dm text-[#F2F2F2] mb-[40px] ">
          <p className="text-[40px] font-extrabold text-center">Recent Works</p>
        </section>

        <div className="grid grid-cols-2 px-[45px] gap-[81px] overflow-hidden ">
          <div className="bg-[#F2F2F2] pt-[18px] rounded-[40px]">
            <img
              src={react}
              alt="project image"
              className="w-[596px] flex mx-auto content-center justify-center"
            />
            <a className="font-dm font-bold block text-[32px] tracking-[-0.05px] pl-[43px] mt-[15px]">
              Pet Track
            </a>
            <a className="font-dem font-regular text-[20px] tracking-[-0.05px] px-[42px] block text-[#747474]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </a>
          </div>
          <div className="bg-white h-[632px] w-auto ">2</div>
        </div>
      </div>
    </div>
  );
}
