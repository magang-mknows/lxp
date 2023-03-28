import { FC, ReactElement } from "react";
import { useController } from "react-hook-form";
import CheckboxField from "./CheckboxField";
import { CheckboxFieldProps } from "./types";

const ControlledCheckboxField: FC<CheckboxFieldProps> = (props): ReactElement => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return <CheckboxField {...props} {...field} error={error?.message} />;
};

export default ControlledCheckboxField;
