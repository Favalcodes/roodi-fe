import Image from "next/image";
import Logo from "../../assets/logo.png";
import PrototypeImage from "../../assets/prototype.png";

const Hero = () => {
  return (
    <>
      <div className="">
        <nav className="flex justify-between items-center w-full py-4 px-12 border-b-2 border-[#351D6B59]">
          <Image src={Logo} className="w-[80px] h-[40px] md:w-[180px] md:h-[70px] fit-cover" alt="logo" />
        </nav>
        <div className="flex flex-col md:flex-row items-start py-24 pb-40 justify-between h-auto px-[8%]">
          <div className="w-full md:w-[49%]">
            <h2 className="font-bold text-4xl md:text-6xl text-[#351D6B] leading-normal">
              Accelerate growth with a happier teaching experience.
            </h2>
            <p className="text-2xl text-[#351D6B] mt-5">
              Roodi enables you to save 500+ hours spent on admin duties,
              empowers your teachers with simplified classroom management, and
              allows you to focus on growing your school population.
            </p>
            <button className="bg-[#351D6B] text-[#FFA100] w-full md:w-auto py-3 px-12 mt-5">Join the waitlist</button>
          </div>
          <div className="mt-20 md:mt-0 mx-auto md:mx-0">
            <Image src={PrototypeImage} alt="prototype" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Hero };
