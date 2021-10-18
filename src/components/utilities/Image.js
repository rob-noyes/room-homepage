const Image = ({ src, text }) => {
  return <img className="mt-16 lg:hidden" src={src} alt={text} />;
};

export default Image;
