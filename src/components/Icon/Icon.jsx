import Icons from "../../images/icons/icons-sprite.svg";

const Icon = ({ id, svgWidth, svgHeight, svgFill, svgStroke }) => {
  return (
    <svg width={svgWidth} height={svgHeight} fill={svgFill} stroke={svgStroke}>
      <use href={Icons + "#" + id}></use>
    </svg>
  );
};

export default Icon;
