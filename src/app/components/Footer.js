//next image
import Image from 'next/image';

//Next Link
import Link from 'next/link';

//Icons
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-y-6">
          {/* Logo */}
          <Link href="#">
            <Image src={'logo.svg'} width={180} height={180} alt="Logo Image" />
          </Link>
          {/* Social Icons */}
          <div className="flex gap-x-6 text-xl text-[#fff]">
            <Link href="#">
              <FaYoutube />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-[#fff] font-medium  ">
            Copyright &copy; Pizzaland 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
