import MyContainer from "@/components/Common/MyContainer";
import DestinationCard from "@/ui/DestinationCard";

const destinationsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
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
      <div>Filter area</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </MyContainer>
  );
};

export default destinationsPage;
