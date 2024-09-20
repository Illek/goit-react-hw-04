import { DNA } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DNA visible={true} height="150" width="150" ariaLabel="dna-loading" />
    </div>
  );
}
