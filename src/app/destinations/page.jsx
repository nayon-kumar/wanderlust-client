import MyContainer from "@/components/Common/MyContainer";
import DestinationCard from "@/ui/DestinationCard";

const destinationsPage = async () => {
  const res = await fetch("http://localhost:8000/destination");
  const destinations = await res.json();
  console.log(destinations);
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
      <div>
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </MyContainer>
  );
};

export default destinationsPage;
