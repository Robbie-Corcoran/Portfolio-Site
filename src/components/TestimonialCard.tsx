type TestimonialCardType = {
  authorImg: string;
  authorDescription: string;
  date: string;
  relationship: string;
  body: string;
};

const TestimonialCard = ({
  authorImg,
  authorDescription,
  date,
  relationship,
  body,
}: TestimonialCardType) => {
  return (
    <div>
      {authorImg}
      {authorDescription}
      {date}
      {relationship}
      {body}
    </div>
  );
};

export default TestimonialCard;
