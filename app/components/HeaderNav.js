"use client";
import { CardHeader, Typography, useMediaQuery } from "@mui/material";
import MDButton from "./common/Button/MDButton";
import MDBox from "./common/MDBox/MDBox";
import { IoCall } from "react-icons/io5";
import { LuInbox } from "react-icons/lu";

const cardHead = [
  {
    id: 1,
    avatar: <IoCall size={25} />,
    title: " Call us",
    subheader: "+92 314 61 46 470",
  },
  {
    id: 2,
    avatar: <LuInbox size={25} />,
    title: "Send us mail",
    subheader: "autoessentials@gmail.com",
  },
];

const HeaderNav = () => {
  const isMediumScreen = useMediaQuery("(max-width:1201px)");

  if (isMediumScreen) {
    return null;
  }
  return (
    <MDBox
      width="100%"
      height="100px"
      bgcolor="#868686"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      sx={{ color: "white" }}
    >
      {cardHead.map((item) => (
        <CardHeader
          key={item.id}
          avatar={item.avatar}
          title={
            <Typography sx={{ fontSize: "16px" }}>{item.title}</Typography>
          }
          subheader={
            <Typography sx={{ fontSize: "16px", color: "white" }}>
              {item.subheader}
            </Typography>
          }
        />
      ))}

      <MDButton sx={{ color: "#4E4B4B", borderRadius: "10px" }}>
        Become A Seller
      </MDButton>
    </MDBox>
  );
};

export default HeaderNav;
