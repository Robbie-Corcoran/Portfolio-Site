import ContactIcon from "./SVGIcon";

const Contact = () => {
  return (
    <div className="m-2">
      <h1 className="text-2xl">Contact Me</h1>
      <h2 className="text-center">
        I'm always interested in positions, projects and collab opportunities,
        as well as any feedback that you might have.
        <br />
        Feel free to reach out to me on any of the below channels and we can
        take it from there!
      </h2>
      <div className="flex mt-4 justify-center">
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
  );
};

export default Contact;
