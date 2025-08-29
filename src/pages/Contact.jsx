import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="flex flex-col gap-5  max-lg:overflow-y-visible text-white"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div>
        <h1 className="text-4xl text-white font-semibold capitalize max-sm:text-3xl">
          About me
        </h1>
        <div className="h-2 w-13 bg-blue rounded-full mt-3"></div>
      </div>
      <div data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10858.143247916006!2d74.06769851696823!3d32.5721039726714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ee7736c7f32e9%3A0x99feca5edc94b2ea!2sGujrat%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1706168356789!5m2!1sen!2sbd"
            width="100%"
            height="300"
            loading="lazy"
            className="invert grayscale-100 rounded-2xl"
          ></iframe>
        </figure>
      </div>

      <div className="flex gap-5 items-start  ">
        <div className="flex gap-2 flex-col">
          <h3 className="text-2xl font-semibold">Contact Details</h3>
          <h4 className="contact-info">
            <span className="text-blue">Email Address:</span>{" "}
            alifarooqipnb@gmail.com
          </h4>
          <h4 className="contact-info">
            {" "}
            <span className="text-blue">Phone Number:</span> 0332-4471592
          </h4>
          <a
            href="https://www.linkedin.com/in/muhammad-ali-farooqi-6479811a1/"
            target="_blank"
            className="contact-info"
          >
            <span className="text-blue">LinkedIn</span>{" "}
            <span className="underline decoration-blue underline-offset-2  ">
              Muhammad Ali Farooqi
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
