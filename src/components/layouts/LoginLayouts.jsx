import Button from "../button";
import DiscordLogo from "../../assets/images/icondiscord.svg";
import MabarLogo from "../../assets/images/mabar-dev-logo.svg";
import { loginFetch } from "../../services/auth.service";
import { useState } from "react";

const LoginLayouts = () => {

  const [isBtnLoading, setIsBtnLoading ] = useState(false);
  // Login Handler
  const handleLogin = async () => {
    setIsBtnLoading(true);
    try {
      await loginFetch();
    } catch (error) {
      console.log("Login Failed", error);
      setIsBtnLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen w-full bg-[#111111]">
      <div className="flex flex-col items-center justify-center mb-4">
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
        <Button onClick={handleLogin} img={DiscordLogo} classButton='w-60' classImages='w-6 mr-2' text="Login with Discord" isBtnLoading={isBtnLoading} />
      </div>
    </div>
  );
};

export default LoginLayouts;
