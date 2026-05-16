"use client";

import { authClient } from "@/lib/auth-client";
import { Calendar } from "@gravity-ui/icons";
import {
  Button,
  DateField,
  Description,
  FieldError,
  Form,
  Label,
} from "@heroui/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";

export function BookingDate({ destination }) {
  const { _id, price, destinationName, imageUrl, country } = destination;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [value, setValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const todayDate = today(getLocalTimeZone());
  const isInvalid = value !== null && value.compare(todayDate) < 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value || isInvalid) {
      return;
    } else {
      setIsSubmitting(true);

      const userInputDate = new Date(value);
      const bookingData = {
        userID: user.id,
        userImage: user.image,
        userName: user.name,
        destinationID: _id,
        destinationName,
        price,
        imageUrl,
        country,
        departureDate: userInputDate,
      };
      console.log(bookingData);

      setValue(null);
      setIsSubmitting(false);
    }
  };

  return (
    <Form className="flex w-full mt-6 flex-col gap-4" onSubmit={handleSubmit}>
      <DateField
        isRequired
        className="w-full"
        isInvalid={isInvalid}
        minValue={todayDate}
        name="date"
        value={value}
        onChange={setValue}
      >
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Prefix>
            <Calendar className="size-4 text-muted" />
          </DateField.Prefix>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
        {isInvalid ? (
          <FieldError>Date must be today or in the future</FieldError>
        ) : (
          <Description>Enter a date from today onwards</Description>
        )}
      </DateField>
      <Button
        className="w-full"
        isDisabled={!value || isInvalid}
        isPending={isSubmitting}
        type="submit"
        variant="primary"
      >
        {isSubmitting ? "Booking..." : "Book Now"}
      </Button>
    </Form>
  );
}
