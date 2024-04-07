"use client";
import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import Image from "next/image";
import Link from "next/link";
import MDBox from "../common/MDBox/MDBox";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "#D4D4D4",
          position: "sticky",
        }}
      >
        <Toolbar>
          <Link href="/">
            <Image
              src="/Rectangle-72.png"
              alt="Rectangle-72.png"
              width={317}
              height={75}
            />
          </Link>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link href="/">
                  <Tab
                    label="Home"
                    sx={{ color: "#000000", fontWeight: 600 }}
                  />
                </Link>
                <Link href="/shop">
                  <Tab
                    label="Shop"
                    sx={{ color: "#000000", fontWeight: 600 }}
                  />
                </Link>
                <Link href="/about">
                  <Tab
                    label="About"
                    sx={{ color: "#000000", fontWeight: 600 }}
                  />
                </Link>
                <Link href="/contact">
                  <Tab
                    label="Contact"
                    sx={{ color: "#000000", fontWeight: 600 }}
                  />
                </Link>
                <Link href="/tools">
                  <Tab
                    label="Tools"
                    sx={{ color: "#000000", fontWeight: 600 }}
                  />
                </Link>
              </Tabs>

              <MDBox
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                gap="2rem"
                // marginRight="1rem"
                marginLeft="auto"
              >
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
              </MDBox>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
