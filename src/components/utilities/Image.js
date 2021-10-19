const Image = ({ src, text }) => {
  return (
    <img className="mt-16 max-w-full h-auto lg:hidden" src={src} alt={text} />
  );
};

export default Image;
