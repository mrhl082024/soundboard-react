const SoundCard = (soundData) => {
  return (
    <div id="sound-card">
      <p>{soundData.sound} </p>
      <iframe
        src={soundData.link}
        frameborder="0"
        style="border: none; height:50px; width:50px;"
      ></iframe>
    </div>
  );
};

export default SoundCard;
