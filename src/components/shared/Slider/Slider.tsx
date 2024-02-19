import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import SVGIcon from '../SVGIcon/SVGIcon';
import { ISlider } from './Interface';
import './Slider.css';

const Slider = ({
  minWidthClass = 'min-w-[635px]',
  minHeightClass = 'h-[311px]'
}: ISlider) => {
  const images = [
    {
      id: '102',
      url: '/images/starbucks-promo.svg',
      alt: 'Starbucks Promo'
    },
    {
      id: '103',
      url: '/images/starbucks-promo.svg',
      alt: 'Starbucks Promo'
    },
    {
      id: '104',
      url: '/images/starbucks-promo.svg',
      alt: 'Starbucks Promo'
    },
    {
      id: '104',
      url: '/images/starbucks-promo.svg',
      alt: 'Starbucks Promo'
    },
    {
      id: '104',
      url: '/images/starbucks-promo.svg',
      alt: 'Starbucks Promo'
    },
    {
      id: '104',
      url: '/images/starbucks-promo.svg',
      alt: 'Starbucks Promo'
    },
    {
      id: '104',
      url: '/images/starbucks-promo.svg',
      alt: 'Starbucks Promo'
    }
  ];

  const CustomArrow = ({ onClick, direction }: any) => {
    return (
      <button
        onClick={onClick}
        style={
          direction === 'left'
            ? {
                position: 'absolute',
                zIndex: 1,
                bottom: -57,
                left: 363
              }
            : {
                position: 'absolute',
                zIndex: 1,
                bottom: -57,
                right: 363
              }
        }
      >
        <SVGIcon
          name={direction === 'left' ? 'icon-arrow-left' : 'icon-arrow-right-2'}
          width={24}
          height={24}
        />
      </button>
    );
  };

  return (
    <Carousel
      className="slider-crsl"
      infiniteLoop
      centerMode
      interval={5000}
      showThumbs={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && <CustomArrow direction="left" onClick={onClickHandler} />
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && <CustomArrow direction="right" onClick={onClickHandler} />
      }
    >
      {images.map((image) => (
        <div
          className={`${minWidthClass} ${minHeightClass} overflow-hidden rounded-[12px]`}
        >
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
