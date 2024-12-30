import Button from "../button";
import DiscordLogo from "../../assets/images/icondiscord.svg";
import MabarLogo from "../../assets/images/mabar-dev-logo.svg";

const LoginLayouts = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#111111]">
      <img src={MabarLogo} alt="" />
      <h3 className="text-[#E3E3E3] mb-2 font-montserrat font-[400]">
        Welcome to Mabar
      </h3>
      <div className="flex text-[#E3E3E3] mb-6 font-montserrat">
        <h3 className="mr-2 font-[400]">
          But first,
        </h3>
        <h3 className="font-bold">
          You need to Login
        </h3>
      </div>
      <Button img={DiscordLogo} clsImg="w-6 mr-2" text="Login with Discord" />
    </div>
  );
};

export default LoginLayouts;
