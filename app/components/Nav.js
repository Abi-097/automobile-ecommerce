"use client";
import { useState } from "react";
import Image from "next/image";
import MDBox from "./common/MDBox/MDBox";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav>
      <MDBox>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Image
              src="/Rectangle-72.png"
              alt="Rectangle-72.png"
              width={317}
              height={75}
            />
          </Grid>
          <Grid xs={5}>
            <MDBox
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  display: showMobileNav ? "none" : "block",
                }}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  display: showMobileNav ? "none" : "block",
                }}
              >
                Shop
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  display: showMobileNav ? "none" : "block",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  display: showMobileNav ? "none" : "block",
                }}
              >
                Contact
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  display: showMobileNav ? "none" : "block",
                }}
              >
                Tools
              </Typography>
            </MDBox>
          </Grid>
          <Grid xs={4}>
            <MDBox
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              {!showMobileNav && (
                <>
                  <Image
                    src="/mdi_account-alert-outline.png"
                    alt="mdi_account-alert-outline.png"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/akar-icons_search.png"
                    alt="akar-icons_search.png"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/akar-icons_heart.png"
                    alt="akar-icons_heart.png"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/ant-design_shopping-cart-outlined.png"
                    alt="ant-design_shopping-cart-outlined.png"
                    width={28}
                    height={28}
                  />
                </>
              )}
              <CiMenuBurger onClick={toggleMobileNav} />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </nav>
  );
};

export default Nav;
