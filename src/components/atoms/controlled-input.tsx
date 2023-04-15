import { useController } from "react-hook-form";
import TextField from "./TextField";
import { TextFieldProps } from "./types";
import { FC, ReactElement } from "react";

const ControlledTextField: FC<TextFieldProps> = (props): ReactElement => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return <TextField {...field} {...props} error={error?.message || props.error} />;
};

export default ControlledTextField;
