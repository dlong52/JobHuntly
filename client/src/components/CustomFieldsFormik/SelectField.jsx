import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const SelectField = ({
  label,
  name,
  value,
  options = [],
  onChange,
  error = false,
  helperText = "",
  fullWidth = true,
  variant = "outlined",
  ...props
}) => {
  return (
    <FormControl  fullWidth={fullWidth} variant={variant} error={error}>
      {label &&<InputLabel>{label}</InputLabel>}
      <Select
        MenuProps={{
          disableScrollLock: true, // Ngăn chặn khoá cuộn khi menu mở
        }}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
