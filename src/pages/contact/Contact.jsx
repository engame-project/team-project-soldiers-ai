import ContactUsImg from "../../assets/contact-us.png";

const Contact = () => {
  return (
    <>
      <section className="bg-base-200 py-12 md:py-20 lg:py-32 px-5">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto rounded-lg md:grid-cols-2  text-base-content">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ">
                Contact Us
              </h2>
              <div className="text-sm md:text-base lg:text-base text-base-content-secondary">
                Have questions or need assistance? Get in touch with us—we’re
                here to help!
              </div>
            </div>
            <img
              src={ContactUsImg}
              alt=""
              className="max-w-xs md:max-w-md mx-auto md:mx-0"
            />
          </div>
          <form noValidate="" className="space-y-6">
            <div className="text-base-content">
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded-lg bg-base-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded-lg bg-base-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded-lg bg-base-100"
                spellcheck="false"
                data-ms-editor="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-primary text-primary-content hover:bg-primary/80"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
