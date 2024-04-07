import { Box } from "@mui/material";
const MDBox = ({
  children,
  variant = "contained",
  color = "dark",
  size = "medium",
  disabled = false,
  bgColor = "transparent",
  borderRadius = "none",
  shadow = "none",
  coloredShadow = "none",
  opacity = 1,
  padding = 1,
  ...props
}) => {
  const colors = {
    primary: "primary",
    secondary: "secondary",
    info: "info",
    error: "error",
    warning: "warning",
    inherit: "inherit",
    success: "success",
  };
  const variants = {
    contained: "contained",
    gradient: "gradient",
  };

  const coloredShadows = {
    primary: "primary",
    secondary: "secondary",
    info: "info",
    error: "error",
    warning: "warning",
    success: "success",
  };

  return (
    <Box
      variant={variants[variant]}
      color={colors[color]}
      size={size}
      bgcolor={bgColor}
      padding={padding}
      borderRadius={borderRadius}
      coloredShadow={coloredShadows[coloredShadow]}
      {...props}
    >
      {children}
    </Box>
  );
};

export default MDBox;
