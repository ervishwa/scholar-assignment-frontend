import { FidgetSpinner } from "react-loader-spinner";

export default function Loader() {
  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={["#005B41", "#008170", "#219C90"]}
      backgroundColor="#005B41"
    />
  );
}
