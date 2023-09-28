import Spinner from "../../ui/Spinner";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useSettings } from "../settings/useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  // const { isLoading, settings } = useSettings();
  const {
    isLoading,
    settings: {
      minBookingLenght,
      maxBookingLenght,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, filed) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [filed]: value });
  }

  // This time we are using UNCONTROLLED fields, so we will NOT store state
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLenght}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLenght")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLenght}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLenght")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
