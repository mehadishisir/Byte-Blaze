import { Bars } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      className={` min-h-[calc(100vh-116px)]
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <Bars
        height="80"
        width="80"
        color="pink"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      ></Bars>
    </div>
  );
};

export default Loader;
