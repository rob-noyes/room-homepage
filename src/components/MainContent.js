import Tile from './utilities/Tile';
import Image from './utilities/Image';
const MainContent = () => {
  return (
    <div>
      <Image src="/images/imagedark.jpg" />
      <Tile
        header={'About our furniture'}
        text={
          'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.'
        }
      />
      <Image src="/images/imagelight.jpg" />
    </div>
  );
};

export default MainContent;
