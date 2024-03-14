import ContactIcon from "./SVGIcon";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-theme-primary"
      >
        <div>
          <h1 className="text-xl font-bold tracking-tight">Contact Me</h1>
          <h2 className="text-center mt-2">
            I'm always interested in positions, projects and collab
            opportunities, as well as any feedback that you might have.
            <br />
            Feel free to reach out to me on any of the below channels and we can
            take it from there!
          </h2>
          <div className="flex mt-4 justify-center gap-2">
            <a
              href="tel:31630816331"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <ContactIcon fileName="phone" filePath="contact" />
            </a>

            <a
              href="https://wa.me/353831172314"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <ContactIcon fileName="whatsapp" filePath="contact" />
            </a>

            <a
              href="mailto:hello@robbiecorcoran.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <ContactIcon fileName="email" filePath="contact" />
            </a>

            <a
              href="https://github.com/Robbie-Corcoran"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <ContactIcon fileName="github" filePath="contact" />
            </a>

            <a
              href="https://www.linkedin.com/in/robbie-corcoran/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 ms-5"
            >
              <ContactIcon fileName="linkedin" filePath="contact" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
