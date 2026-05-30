import MyContainer from "@/components/Common/MyContainer";
import SearchBox from "@/components/Destinations/SearchBox";
import DestinationCard from "@/ui/DestinationCard";
import { CiFileOn } from "react-icons/ci";

const destinationsPage = async ({ searchParams }) => {
  const resolved = await searchParams;
  const search = resolved.search || "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination?search=${search}`,
    {
      cache: "no-store",
    },
  );
  const destinations = await res.json();
  return (
    <MyContainer className="pt-35 pb-20">
      <div className="text-center">
        <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
          Explore All Destinations
        </h3>
        <p className="mt-4 text-[#6C696D] ">
          Find your perfect travel experience from our curated collection
        </p>
      </div>
      <SearchBox defaultValue={search} />
      {destinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
          {destinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      ) : (
        <div className="mt-10 text-gray-500 flex flex-col items-center justify-center">
          <CiFileOn size={120} />
          <p className="mt-4">No destination found!</p>
        </div>
      )}
    </MyContainer>
  );
};

export default destinationsPage;
