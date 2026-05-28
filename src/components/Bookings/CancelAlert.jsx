"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { RiDeleteBinLine } from "react-icons/ri";

export function CancelAlert({ booking }) {
  const cancelBooking = async (bookingID) => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingID}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.error(`${booking.destinationName} Booking Cancelled!`);
      window.location.reload();
    }
  };

  return (
    <AlertDialog>
      <Button className="w-full" variant="danger">
        <RiDeleteBinLine size={18} />
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Are you sure want to cancel booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel{" "}
                <strong>{booking.destinationName}</strong> and all of its data.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Close
              </Button>
              <Button
                onClick={() => cancelBooking(booking._id)}
                slot="close"
                variant="danger"
              >
                Yes
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
