import BookingCard from "@/components/Bookings/BookingCard";
import MyContainer from "@/components/Common/MyContainer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(`http://localhost:8000/bookings/${user.id}`);
  const data = await res.json();
  return (
    <MyContainer className="pt-35 pb-20">
      <div className="text-center">
        <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
          My Bookings
        </h3>
        <p className="mt-4 text-[#6C696D] ">
          Manage and view your upcoming travel plans
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {data.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </MyContainer>
  );
};

export default BookingsPage;
