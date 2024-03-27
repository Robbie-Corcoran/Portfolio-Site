import { useState } from "react";

type AccordionTabType = {
  tabId: number;
  tabName: string;
  activeTab: boolean;
};

const AboutPage = () => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const accordionTabs: AccordionTabType[] = [
    {
      tabId: 0,
      tabName: "My Developer Journey",
      activeTab: false,
    },
    {
      tabId: 1,
      tabName: "My Hobbies",
      activeTab: false,
    },
  ];

  return (
    <section
      id="about"
      className="w-full mx-auto pt-16 font-sofia my-auto bg-theme-black text-theme-text"
    >
      <div className="h-auto w-full lg:w-fit">
        <img src="../about-header.png" alt="About Header" />
      </div>

      <div className="max-w-screen-xl mx-auto bg-white p-4">
        <h1 className="py-2 text-4xl text-theme-primary font-bold tracking-tight">
          About Me
        </h1>

        <div className="m-auto">
          <div>
            <h2>
              <button
                type="button"
                onClick={toggleAccordion}
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              >
                <span>{accordionTabs[0].tabName}</span>
                <svg
                  className={`w-3 h-3 ${
                    accordionOpen ? `rotate-180` : `rotate-360`
                  } transition duration-100 shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className="block"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p>
                  Using passion to bring together design, development, and
                  functionality, I'm dedicated to crafting beautiful user
                  experiences while maintaining all the power under the hood.
                </p>

                <p>
                  I began my journey as a developer during the Covid-19
                  lockdown, where like many others, I wanted to up-skill and
                  change my direction, this led me to completing a Diploma in
                  Wed Design vie Shaw Academy, and then a Full Stack Web
                  Developer Bootcamp with Angela Zu.
                  <br />
                  Once I had gained these skills and the confidence to pursue a
                  new career, I quit my sales job and began self teaching and
                  working towards a brighter future.
                </p>
                <br />
                <p>
                  After nearly a year of studying, I was accepted ahead of 1100
                  other applicants to SALT's career acceleration program, where
                  I undertook a 13 week intensive 13 Full Stack Java Bootcamp
                  which consisted of 40 hours per week and 10-30 hours per
                  weekend on assignments and projects.
                  <br />
                  After 3 amazing months I graduated and was hired as a Full
                  Stack Java Developer with Salt, where I am currently working.
                </p>
              </div>
            </div>
            <h2>
              <button
                type="button"
                onClick={toggleAccordion}
                className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              >
                <span>{accordionTabs[1].tabName}</span>
                <svg
                  className={`w-3 h-3 ${
                    accordionOpen ? `rotate-180` : `rotate-360`
                  } transition duration-100 shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              className="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p></p>
              </div>
            </div>
          </div>

          <br />
          <br />

          <br />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
