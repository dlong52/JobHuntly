import { Button as MUIButton, CircularProgress } from "@mui/material";

const Button = (props) => {
  const {
    variant = "contained",
    type,
    color,
    children,
    size,
    isLoading,
    disabled,
    loadingText,
    disableRipple,
    startIcon,
    endIcon,
    ...rest
  } = props;

  return (
    <MUIButton
    disabled={disabled}
      type={type}
      variant={variant}
      color={color}
      disableRipple={disableRipple}
      size={size}
      startIcon={!isLoading ? startIcon : undefined}
      endIcon={!isLoading ? endIcon : undefined}
      // disabled={isLoading} // Disable button when loading
      {...rest}
    >
      {isLoading ? (
        <>
          {loadingText || <CircularProgress size={25} color="inherit" />}
        </>
      ) : (
        children
      )}
    </MUIButton>
  );
};

export default Button;
