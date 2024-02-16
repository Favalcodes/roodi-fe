import Image from "next/image";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const FooterSection = () => {
  return (
    <>
      <div className="w-full py-8 px-12 border-t-2 border-[#351D6B59]">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="md:w-[30%]">
            <Image src={Logo} width={180} height={70} alt="logo" />
            <p>
              The best solution for schools of all sizes to ensure that no child
              is left behind.
            </p>
          </div>
          <div className="leading-loose mt-8 md:mt-0">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p className="underline ml-1">+234 (0) 903 164 1365</p>
            </div>
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="underline ml-1">support@roodi.co</p>
            </div>
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={faMapPin} />
              <p className="ml-1">
                20 Olusegun Ajayi St., Lekki, (Lagos) Nigeria.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p>All rights reserved by Roodi Technologies Limited</p>
          <div className="flex justify-center items-center mt-5">
            <p className="underline mr-8">Privacy Policy</p>
            <p className="underline">Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { FooterSection };
