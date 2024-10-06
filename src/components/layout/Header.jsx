import SignIn from "@/components/buttons/SignIn";

import Navigation from "@/components/Navigation";
import { sorafiTitle } from "@/style/template";
import Logo from "../buttons/Logo";
const Header = () => {
  return (
    <div className="flex flex-row justify-between gap-28">
      <Logo />
      <Navigation />
      <SignIn />
    </div>
  );
};

export default Header;
