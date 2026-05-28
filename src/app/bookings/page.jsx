import BookingCard from "@/components/Bookings/BookingCard";
import MyContainer from "@/components/Common/MyContainer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { FaBookReader } from "react-icons/fa";

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const user = session?.user;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
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
      {data.length > 0 ? (
        <div className="flex flex-col gap-4 mt-10">
          {data.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 text-center text-gray-500 items-center justify-center mt-15">
          <FaBookReader size={100} />
          <p>No booking found!</p>
        </div>
      )}
    </MyContainer>
  );
};

export default BookingsPage;
