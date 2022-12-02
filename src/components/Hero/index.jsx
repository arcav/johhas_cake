import Logo from '../../assets/logo.jpg'

export const Hero = () => {
  return (
    <div
      className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover "
      style={{
        height:"30vh",
        background: `url(${Logo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="flex justify-center items-center h-full">
          <div className="text-white"></div>
        </div>
      </div>
    </div>
  );
};
