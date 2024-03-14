type TestimonialCardType = {
  authorImg: string;
  authorName: string;
  authorDescription: string;
  date: string;
  relationship: string;
  body: string[];
};

const TestimonialCard = ({
  authorImg,
  authorName,
  authorDescription,
  date,
  relationship,
  body,
}: TestimonialCardType) => {
  return (
    <div className="max-w-sm bg-white border border-theme-primary hover:scale-[101%] duration-200 rounded-lg shadow m-auto mb-4 md:max-w-none">
      <div className="flex pl-2">
        <img
          className="border rounded-full size-12 m-2 mt-4 left-0"
          src={authorImg}
          alt={authorName}
        />
        <div className="p-2">
          <h3 className="text-lg font-bold">{authorName}</h3>
          <h5 className="text-xs font-thin">{authorDescription}</h5>
          <h5 className="text-xs text-theme-secondary">{date}</h5>
          <h5 className="text-xs text-theme-secondary">{relationship}</h5>
        </div>
      </div>
      <div>
        {body.map((text, index) => (
          <p className="m-2 p-2 text-sm" key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
