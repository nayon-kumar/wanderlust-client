import MyContainer from "../Common/MyContainer";
import DestinationCard from "@/ui/DestinationCard";
import DestinationButton from "./DestinationButton";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const destinations = await res.json();
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
          <DestinationButton />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
        {destinations.slice(0, 3).map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </MyContainer>
  );
};

export default Featured;
