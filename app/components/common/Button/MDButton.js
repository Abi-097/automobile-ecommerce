import { Button } from "@mui/material";

const colors = {
  primary: "primary",
  secondary: "secondary",
  info: "info",
  error: "error",
  warning: "warning",
  inherit: "inherit",
  success: "success",
  gray1: "#4E4B4B",
};
const sizes = { small: "small", medium: "medium", large: "large" };
const variants = {
  contained: "contained",
  outlined: "outlined",
  text: "text",
};

const MDButton = ({
  children,
  variant = "contained",
  color = "warning",
  size = "medium",
  borderRadius = "none",
  disabled = false,
  ...props
}) => {
  const validColor = colors[color] || colors.info;
  return (
    <Button
      variant={variants[variant]}
      color={validColor}
      size={sizes[size]}
      borderRadius={borderRadius}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MDButton;
