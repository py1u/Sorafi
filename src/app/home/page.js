import Home from "@/components/home/Root";
import Header from "@/components/layout/Header";
import Navigation from "@/components/Navigation";
import { sorafiDefaultDark } from "@/style/template";
const Root = () => {
  return (
    <div className={sorafiDefaultDark}>
      <Header />
      <Home />
    </div>
  );
};

export default Root;
