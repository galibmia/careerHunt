import { FaFacebookF, FaTwitter } from "react-icons/fa";
import instagram from "../assets/Group.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1919] pt-32">
      <div className="footer justify-items-center justify-between w-[70%] mx-auto text-base-content">
        <aside>
          <h1 className="text-3xl font-extrabold text-white">Career Hunt</h1>
          <p className="w-[250px] text-md leading-7 my-3 text-base-300">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/" target="_blank">
              <div className="bg-white w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-blue-600 text-3xl" />
              </div>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <div className="bg-white w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <FaTwitter className="text-sky-500 text-3xl" />
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <div className="bg-white w-12 h-12 p-2 rounded-full flex items-center justify-center">
                <img className="h-[25px]" src={instagram} alt="" />
              </div>
            </a>
          </div>
        </aside>
        <nav className="py-1 text-base-300">
          <h6 className=" font-bold uppercase text-white">Company</h6>
          <Link className="link link-hover">About Us</Link>
          <Link className="link link-hover">Work</Link>
          <Link className="link link-hover">Latest News</Link>
          <Link className="link link-hover">Careers</Link>
        </nav>
        <nav className="py-1 text-base-300">
          <h6 className=" font-bold uppercase text-white">Product</h6>
          <Link className="link link-hover">Prototype</Link>
          <Link className="link link-hover">Plans & Pricing</Link>
          <Link className="link link-hover">Customers</Link>
          <Link className="link link-hover">Integrations</Link>
        </nav>
        <nav className="py-1 text-base-300">
          <h6 className=" font-bold uppercase text-white">Support</h6>
          <Link className="link link-hover">Help Desk</Link>
          <Link className="link link-hover">Sales</Link>
          <Link className="link link-hover">Become a Partner</Link>
          <Link className="link link-hover">Developers</Link>
        </nav>
        <nav className="py-1 text-base-300">
          <h6 className=" font-bold uppercase text-white">Contacts</h6>
          <p>
            524 Broadway , NYC{" "}
            <span className="block my-2">+1 777 - 978 - 5570</span>
          </p>
        </nav>
      </div>
      <div className="footer justify-items-center justify-between w-[70%] mx-auto pb-32 pt-8 text-base-content mt-14 border-t-2 border-gray-600">
        <aside>
          <p className="text-base-300">
            © {new Date().getFullYear()} - CareerHunt. All Rights Reserved
          </p>
        </aside>
        <p className="flex text-base-300">Powered by <span className="font-semibold">CareerHunt</span></p>
      </div>
    </footer>
  );
};

export default Footer;
