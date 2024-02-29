import React from "react";

const Footer = () => {
  
  return (
    <>
      <>
        {/* component */}
        <footer
          className="bg-[#202020] text-white "
          aria-labelledby="footer-heading"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8">
                <img
                  className="h-20"
                  src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
                  alt="Company name"
                />
                <p className="text-sm leading-6 text-white">
                  Give your loved ones the opportunity to keep their triumphant
                  memories alive with personalized medal hangers
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6  text-white">
                      Quick Links
                    </h3>
                    <ul role="list" className="mt-6 space-y-4 list-none">
                      <li>
                        <a
                          href="#"
                          className="home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Analytics
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-white">
                      Legal Pages
                    </h3>
                    <ul role="list" className="mt-6 space-y-4 list-none">
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Refund Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Shipping Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Terms & Condition
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className=" home text-sm leading-6 text-white hover:text-gray-500"
                        >
                          Refund Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">
                      Connect with us
                    </h3>
                    <ul role="list" className="mt-6 space-y-4 list-none">
                      <li>
                        <a
                          href="#"
                          className="text-sm leading-6 text-white hover:text-gray-500 flex items-center"
                        >
                          Claim
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm leading-6 text-white hover:text-gray-500 whitespace-nowrap "
                        >
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm leading-6 text-white hover:text-gray-500 "
                        >
                          Terms
                        </a>
                      </li>
                    </ul>
                    <div className="flex space-x-6">
                      <a href="#" className="text-white hover:text-yellow-500">
                        <FaFacebook className="size-5 hover:text-yellow-500 duration-100 " />
                      </a>

                      <a
                        href="#"
                        className="text-white hover:text-blue-4      00"
                      >
                        <FaWhatsapp className="size-6 hover:text-yellow-500 duration-100 " />
                      </a>
                      <a href="#" className=" text-white hover:text-gray-500 duration-100 ">
                        <GrInstagram className="size-5 hover:text-yellow-500" />
                      </a>
                      <a href="#" className=" text-white hover:text-gray-500 ">
                        <FaXTwitter className="size-5 hover:text-yellow-500  duration-100" />
                      </a>  
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
              <p className="text-xs leading-5 text-gray-500">
                © 2020 Your Company, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer;
