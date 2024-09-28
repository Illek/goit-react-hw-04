import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
      }}
    >
      <Triangle
        visible={true}
        height="80"
        width="80"
        // color="#678471"
        color="#2bff95"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default Loader;
