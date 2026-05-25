"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import { TbEdit } from "react-icons/tb";

const EditModal = ({ destination }) => {
  const {
    _id,
    destinationName,
    imageUrl,
    country,
    description,
    duration,
    price,
    category,
    departureDate,
  } = destination;
  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const editDestination = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    const res = await fetch(`http://localhost:8000/destination/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editDestination),
    });
    const data = await res.json();
    if (data.modifiedCount > 0) {
      toast.success("Destination Edited Successfully!");
      window.location.reload();
    }
  };

  return (
    <div>
      <Modal>
        <Button className="flex items-center text-[#0C0B0B] px-6 py-2 border border-[#B6B6B6] gap-2 cursor-pointer rounded-none bg-white">
          <TbEdit size={20} />
          <span>Edit</span>
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <TbEdit className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Destination</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    onSubmit={onsubmit}
                    className="sm:py-10 pt-4 md:pt-0 space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={destinationName}
                          name="destinationName"
                          isRequired
                        >
                          <Label>Destination Name</Label>
                          <Input
                            placeholder="Bali Paradise"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField
                        defaultValue={country}
                        name="country"
                        isRequired
                      >
                        <Label>Country</Label>
                        <Input
                          placeholder="Indonesia"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Category - Updated Select Component */}
                      <div>
                        <Select
                          defaultValue={category}
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
                              <ListBox.Item
                                id="Adventure"
                                textValue="Adventure"
                              >
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
                      <TextField
                        defaultValue={price}
                        name="price"
                        type="number"
                        isRequired
                      >
                        <Label>Price (USD)</Label>
                        <Input
                          type="number"
                          placeholder="1299"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField
                        defaultValue={duration}
                        name="duration"
                        isRequired
                      >
                        <Label>Duration</Label>
                        <Input
                          placeholder="7 Days / 6 Nights"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={departureDate}
                          name="departureDate"
                          type="date"
                          isRequired
                        >
                          <Label>Departure Date</Label>
                          <Input type="date" className="rounded-2xl" />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL - Removed preview */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={imageUrl}
                          name="imageUrl"
                          isRequired
                        >
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
                        <TextField
                          defaultValue={description}
                          name="description"
                          isRequired
                        >
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

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        Save
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;
