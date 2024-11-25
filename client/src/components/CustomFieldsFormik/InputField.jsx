import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

const InputField = ({
  field,
  form,
  label,
  labelTop,
  disabled,
  classNameContainer = "",
  classNameLabel = "",
  readOnly = false,
  required = false,
  size = "medium",
  placeholder = "",
  type = "text",
  ...props
}) => {
  const { name } = field;
  const { touched, errors } = form;
  const showError = Boolean(touched[name] && errors[name]);

  return (
    <FormControl
      className={`flex flex-col gap-1 ${classNameContainer}`}
      fullWidth
      error={showError}
    >
      {labelTop && (
        <label className={`${classNameLabel}`} htmlFor="">
          {labelTop}
        </label>
      )}
      <TextField
        disabled={disabled}
        label={label}
        size={size}
        {...field}
        {...props}
        type={type}
        placeholder={placeholder}
        InputProps={{
          readOnly: readOnly,
        }}
        required={required}
        error={showError}
      />
      {showError && <FormHelperText>{errors[name]}</FormHelperText>}
    </FormControl>
  );
};

export default InputField;
