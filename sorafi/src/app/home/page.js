import { sakuraGradient, sorafiDefaultDark } from "@/style/template";
export default function Home() {
  return (
    <div className={sorafiDefaultDark}>
      <div className={`text-4xl ${sakuraGradient}`}>Welcome to Sorafi</div>
      <p>Your Financial Universe, All in One Wallet</p>
    </div>
  );
}
