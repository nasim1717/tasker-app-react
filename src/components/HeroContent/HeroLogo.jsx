import Frame from "../../assets/frame.png";

export default function HeroLogo() {
  return (
    <div className="flex justify-center md:order-2">
      <img className="max-md:w-full" src={Frame} width="326" height="290" alt="frame" />
    </div>
  );
}
