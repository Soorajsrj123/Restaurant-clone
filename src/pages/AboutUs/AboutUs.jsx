import { Box, Container, styled, Typography } from "@mui/material";

function AboutUs() {
  const CustomBox = styled(Container)(({ theme }) => ({
    width: "33%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  const Divider = styled("div")(() => ({
    width: "5%",
    height: "5px",
    backgroundColor: "black",
    margin: "0 auto",
    borderRadius: "3px",
  }));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        marginTop: "65px",
        marginBottom: "100px",
      }}
    >
      {/* <CustomContainer> */}
      <Divider />
      <Typography
        variant="h3"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#000339",
          my: 3,
        }}
      >
        About Us
      </Typography>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#000339",
            textAlign: "center",
            my: 1,
          }}
        >
          Welcome to Our Restaurant where culinary excelence meets , warm
          hospitality
        </Typography>
      </CustomBox>
      {/* </CustomContainer> */}
    </Box>
  );
}

export default AboutUs;
