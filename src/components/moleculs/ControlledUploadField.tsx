import { useController } from "react-hook-form";
import { ChangeEvent, FC, ReactElement, useState } from "react";
import { UploadFieldProps } from "../atoms/types";
import UploadField from "../atoms/UploadField";

const ControlledUploadField: FC<UploadFieldProps> = (props): ReactElement => {
  const [get, set] = useState("");
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return (
    <UploadField
      {...props}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        field.onChange(event.target.files);
        set(event.target?.files?.[0]?.name as string);
      }}
      files={get}
      error={error?.message}
    />
  );
};

export default ControlledUploadField;
