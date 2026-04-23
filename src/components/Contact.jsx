import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        className='flex-[0.5] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-secondary transition'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        className='flex-[0.5] bg-black-100 p-8 rounded-2xl flex flex-col justify-center'
      >
        <p className={styles.sectionSubText}>Direct Contact</p>
        <h3 className={styles.sectionHeadText}>Reach Out.</h3>
        
        <div className="mt-8 flex flex-col gap-10">
          <div className="flex bg-tertiary p-6 rounded-2xl items-center gap-6 shadow-md shadow-primary">
            <div className="w-16 h-16 rounded-full bg-[#915eff] flex items-center justify-center">
              <span className="text-white text-3xl">📞</span>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-[20px]">Phone</p>
              <a href="tel:+1234567890" className="mt-1 text-secondary text-[16px] xl:text-[18px] hover:text-white transition">+91 8949217986 ,7976891704,9571252408</a>
            </div>
          </div>
          
          <div className="flex bg-tertiary p-6 rounded-2xl items-center gap-6 shadow-md shadow-primary">
            <div 
              className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center cursor-pointer hover:scale-105 transition"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#ffffff" fill="none">
                <path d="M12.0125 21.037L9.20829 20.3704C8.61864 20.2302 8.00501 20.285 7.44759 20.5283L4.99222 21.6006C4.269 21.9163 3.48398 21.2386 3.65342 20.45L4.17937 18.002C4.30141 17.4339 4.19504 16.8406 3.88242 16.3458C2.52047 14.1896 2.05436 11.5178 2.65651 8.94827C3.39803 5.7844 5.92205 3.19702 9.07346 2.39209C13.8884 1.16194 18.4908 4.67389 18.8475 9.6109C19.1683 14.0505 15.9392 18.026 11.5548 18.5721" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M8.5 10.5C9.60541 10.5 10.1581 10.5 10.5262 10.8465C10.8943 11.1931 10.963 11.7226 11.1004 12.7818C11.1218 12.9463 11.1325 13.0285 11.0854 13.0858C11.0384 13.143 10.9599 13.1601 10.803 13.1942C10.4571 13.2694 10.1602 13.3995 9.94084 13.5606C9.64169 13.7803 9.4715 14.1205 9.6186 14.512C10.027 15.5991 10.8524 16.4243 11.9394 16.8324C12.3308 16.9793 12.6708 16.8091 12.8904 16.51M12.8904 16.51C13.0514 16.2907 13.1814 15.9939 13.2565 15.648C13.2906 15.4912 13.3076 15.4128 13.3648 15.3657C13.4221 15.3186 13.5042 15.3294 13.6686 15.3508C14.7274 15.4886 15.2569 15.5574 15.6033 15.9255C15.9498 16.2936 15.9498 16.8459 15.9498 17.9502C15.9498 18.528 15.4883 18.9961 14.922 18.9998L14.4988 19.0028C11.7583 19.0224 8.76101 17.2798 6.94052 14.5218C5.55018 12.4155 5.09703 9.62021 6.00206 7.42767C6.22019 6.89901 6.75822 6.54145 7.33703 6.52733L7.74786 6.51731C8.16335 6.50718 8.5 6.84439 8.5 7.26027V10.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-[20px]">WhatsApp</p>
              <a href="https://wa.me/8949217986" target="_blank" rel="noreferrer" className="mt-1 text-secondary text-[16px] xl:text-[18px] hover:text-[#25D366] transition block">Click to message</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
