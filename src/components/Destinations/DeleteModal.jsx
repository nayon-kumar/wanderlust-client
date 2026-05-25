"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button, toast } from "@heroui/react";
import { redirect } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteModal = ({ destination }) => {
  const { _id, destinationName } = destination;
  const handleClick = async (id) => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch(`http://localhost:8000/destination/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.danger(`${destinationName} Destination Deleted!`);
      redirect("/destinations");
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button
          variant="danger"
          className="rounded-none bg-white text-[#EF4444] border border-[#EF4444] "
        >
          <RiDeleteBinLine size={20} />
          <span>Delete</span>
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete destination permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong className="capitalize">
                    {destinationName} Destination
                  </strong>{" "}
                  and all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={() => handleClick(_id)}
                  slot="close"
                  variant="danger"
                >
                  Confirm Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteModal;
