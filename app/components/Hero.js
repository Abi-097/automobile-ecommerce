import { Button, Typography } from "@mui/material";
import MDBox from "./common/MDBox/MDBox";
import Grid from "@mui/material/Grid";
import Image from "next/image";
const Hero = () => {
  return (
    <MDBox bgColor="#D4D4D4" height="100%">
      <Grid container>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          order={{ md: 2, sm: 2, xs: 2, lg: 1, xl: 1 }}
        >
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={600}
          >
            <div>
              <Typography
                sx={{
                  fontSize: "64px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#FFFFFF" }}>Auto </span> Spare Parts
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                All Major Brands Available
              </Typography>
              <div style={{ textAlign: "center", marginTop: 7 }}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#868686", color: "#FFFFFF" }}
                >
                  shop Now
                </Button>
              </div>
            </div>
          </MDBox>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          order={{ md: 1, sm: 1, xs: 1, lg: 2, xl: 2 }}
        >
          <MDBox display="flex" justifyContent="center" alignItems="center">
            <Image
              src="/Rectangle-70.png"
              alt="Rectangle-70.png"
              width={536}
              height={547}
            />
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
};

export default Hero;
