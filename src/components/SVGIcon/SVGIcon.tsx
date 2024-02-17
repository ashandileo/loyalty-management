import { ISVGIcon } from './Interface';

const SVGIcon = ({ name, className, width, height }: ISVGIcon) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <use href={`sprites.svg#${name}`} />
    </svg>
  );
};

export default SVGIcon;
