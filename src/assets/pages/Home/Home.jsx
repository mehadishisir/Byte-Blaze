import HeroSection from "../../components/Hero/HeroSection";
import wave from "../../../assets/wave.svg";

const Home = () => {
  return (
    <div>
      <div className="flex relative flex-col justify-center items-center h-[calc(100vh-116px)]">
        <HeroSection></HeroSection>
        <img src={wave} alt="wave" className="w-full absolute bottom-0 -z-10" />
      </div>
    </div>
  );
};

export default Home;
