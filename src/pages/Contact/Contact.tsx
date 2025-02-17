import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <section className="container w-full bg-white" id="contact">
      <div className="bg-gray-100 mx-auto max-w-6xl text-gray-800 my-12 px-6 py-12 sm:px-6 lg:px-8 lg:py-20 rounded-lg shadow-2xl">
        <div className="mb-2">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="mb-6 text-2xl text-gray-800 font-semibold font-mono uppercase tracking-wide  ">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-800 ">
              In hac habitasse platea dictumst
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-800 ">
                className aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul className="mb-6 md:mb-0">
                <motion.li
                  animate={{ x: [null, 100, 0] }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className="flex"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg md:text-xl font-semibold leading-6 text-gray-800">
                      Our Address
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      1230 Maecenas Street Donec Road
                    </p>
                    <p className="text-gray-600 text-base md:text-lg">
                      New York, EEUU
                    </p>
                  </div>
                </motion.li>
                <motion.li animate={{ x: [null, 100, 0] }} className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg md:text-xl font-semibold leading-6 text-gray-800 ">
                      Contact
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      Mobile: +1 (123) 456-7890
                    </p>
                    <p className="text-gray-600 text-base md:text-lg">
                      Mail: tailnext@gmail.com
                    </p>
                  </div>
                </motion.li>
                <motion.li animate={{ x: [null, 100, 0] }} className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg md:text-xl font-semibold leading-6 text-gray-800 ">
                      Working hours
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-600 text-base md:text-lg">
                      Saturday &amp; Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <motion.h2
                animate={{ x: [null, 100, 0] }}
                className="mb-4 text-2xl font-bold "
              >
                Ready to Get Started?
              </motion.h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        // autocomplete="given-name"
                        placeholder="Your name..."
                        className="mb-2 w-full rounded-md border border-gray-400 text-lg py-2 pl-2 pr-4 shadow-md sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        // autocomplete="email"
                        placeholder="Your email address..."
                        className="mb-2 w-full rounded-md border border-gray-400  text-lg py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols={30}
                      rows={5}
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 text-lg py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => navigate("/")}
                    type="submit"
                    className="btn btn-primary w-full text-gray-100 text-base bg-blue-500 hover:bg-blue-400 px-6 py-3 font-xl rounded-md sm:mb-0 cursor-pointer"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
