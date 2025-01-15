import PropTypes from "prop-types";

const Button = (props) => {
  const { text, img, className, 
    onClick = () => {},
    type
  } = props;
  return (
    <button className="flex items-center bg-[#424242] hover:bg-[#343333]
     text-[#E3E3E3] hover:text-white py-2 px-8 rounded-full font-montserrat duration-300" onClick={onClick} type={type}>
      <img src={img} alt="" className={className} />
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
