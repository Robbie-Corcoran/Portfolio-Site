import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full max-w-screen-xl mx-auto p-4 md:py-8 place-content-center font-sofia"
    >
      <div>
        <h2 className="text-4xl p-2 mt-8 font-bold tracking-tight text-theme-primary ">
          What do people say?
        </h2>
      </div>
      <TestimonialCard
        authorImg="testimonials/laylaSilbernberg/layla-portrait.jpeg"
        authorName="Layla Silbernberg"
        authorDescription="Master of Arts | Java Certified Professional | Full-stack Java Developer | Spring Framework | React | Next.js | Typescript | MongoDB | PostgreSQL"
        date="1st Feb, 2024"
        relationship="Java Developer & Instructor, Salt, NL"
        body={[
          `"Robbie is a funny and tenacious individual with a great eye for creative solutions, great design sense and an unmatched enthusiasm for tech.`,
          `Furthermore, the gift of gab is strong with this one. He can both understand and communicatbe complex programming concepts and explain them well. And explain them funny.`,
          `Truly a joy to work with, I believe Robbie will be asset to any team."`,
        ]}
      />
    </section>
  );
};

export default Testimonials;
