import SoundCard from "./SoundCard";
import soundData from "../data/soundData.json";
const SoundboardApp = () => {
  return (
    <>
      <SoundCard soundData={soundData} />
    </>
  );
};
export default SoundboardApp;
