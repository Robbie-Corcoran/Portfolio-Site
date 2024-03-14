import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full max-w-screen-xl mx-auto p-4 md:py-8 place-content-center text-theme-primary"
    >
      <div>
        <h2 className="text-xl p-2 mt-8 font-bold tracking-tight">
          What do people say about me?
        </h2>
      </div>
      <TestimonialCard
        authorImg=""
        authorDescription=""
        date=""
        relationship=""
        body=""
      />
    </section>
  );
};

export default Testimonials;
