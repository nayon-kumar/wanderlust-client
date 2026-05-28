import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import MyContainer from "../Common/MyContainer";

const Featured = () => {
  return (
    <MyContainer className="py-20">
      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
            Featured Destinations
          </h3>
          <p className="mt-1 text-[#6C696D] ">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        <div>
          <Button>
            All destinations <FaArrowRight />{" "}
          </Button>
        </div>
      </div>
      <div></div>
    </MyContainer>
  );
};

export default Featured;
