import type { NextPage } from "next";
import { Tooltip } from "react-tiny-tooltip";

const Home: NextPage = () => {
  return (
    <div>
      <Tooltip content="Hello" showArrow />
    </div>
  );
};

export default Home;
