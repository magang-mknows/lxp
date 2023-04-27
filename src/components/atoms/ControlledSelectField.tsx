import { FC, ReactElement } from "react";
import { useController } from "react-hook-form";
import SelectField from "./SelectField";
import { SelectFieldProps } from "./types";

const ControlledSelectField: FC<SelectFieldProps> = (props): ReactElement => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return <SelectField {...props} {...field} error={error?.message} />;
};

export default ControlledSelectField;
