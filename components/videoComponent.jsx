const VideoComponent = (props) => {
  return (
    <div className="h-full w-full bg-green-500 absolute top-0 left-0">
      <video
        loop
        autoPlay
        muted
        className="h-screen w-screen object-fill"
        src="/assets/test.mp4"
      ></video>
      <div className="absolute z-50 bottom-0 h-1/2">{props.data}</div>
    </div>
  );
};

export default VideoComponent;
