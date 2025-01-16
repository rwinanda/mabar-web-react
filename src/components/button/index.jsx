import PropTypes from "prop-types";
import { LoadingButton } from "./LoadingButton";

const Button = (props) => {
  const {
    text,
    img,
    classButton="px-8" ,
    classImages,
    onClick = () => {},
    // eslint-disable-next-line react/prop-types
    type,
    // eslint-disable-next-line react/prop-types
    isBtnLoading,
  } = props;
  return (
    <button
      className={`flex items-center bg-[#424242] hover:bg-[#343333] text-[#E3E3E3] hover:text-white py-2 justify-center rounded-full font-montserrat duration-300 ${classButton}`}
      onClick={onClick}
      type={type}
      disabled={isBtnLoading}
    >
      <div className="flex my-2">
        {isBtnLoading ? (
          // Show Loading when true
          <LoadingButton />
        ) : (
          <>
            <img src={img} alt="" className={classImages} />
            {text}
          </>
        )}
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  classImages: PropTypes.string,
  onClick: PropTypes.func,
  classButton: PropTypes.string
};

export default Button;
