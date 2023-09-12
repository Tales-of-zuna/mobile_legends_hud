import PictureComponent from "@/components/pictureComponent";
import VideoComponent from "@/components/videoComponent";

const Home = () => {
  const displayComponents = (name) => {
    if (name === "video") {
      return <VideoComponent />;
    } else if (name === "picture") {
      return <PictureComponent />;
    }
  };
  return (
    <div className="h-screen bg-green-500">{displayComponents("video")}</div>
  );
};

export default Home;
