"use client";
import MyContainer from "@/components/Common/MyContainer";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();
  const onsubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.target);
    const destination = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();
    const res = await fetch("http://localhost:8000/destination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(destination),
    });

    const data = await res.json();
    if (data.insertedId) {
      toast.success(`${destination.destinationName} Added!`);
      form.reset();
      router.push("/destinations");
    }
    return data;
  };

  return (
    <MyContainer className="pt-35 pb-20">
      <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl text-center">
        Add New Travel Package
      </h3>
      <div className="max-w-4xl mx-auto mt-5">
        <form onSubmit={onsubmit} className="sm:p-10 pt-10 md:pt-0 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>
                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="country" isRequired>
              <Label>Country</Label>
              <Input placeholder="Indonesia" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Beach" textValue="Beach">
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Mountain" textValue="Mountain">
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="City" textValue="City">
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Adventure" textValue="Adventure">
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Cultural" textValue="Cultural">
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Luxury" textValue="Luxury">
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="price" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="duration" isRequired>
              <Label>Duration</Label>
              <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>
                <Input type="date" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button
            type="submit"
            variant="outline"
            // isLoading={isPending}
            className=" rounded-none w-full bg-cyan-500 text-white"
          >
            {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
            Add Travel Package
          </Button>
        </form>
      </div>
    </MyContainer>
  );
};

export default AdminPage;
