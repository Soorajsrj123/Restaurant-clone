import { Box, Container, styled, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import logos from "../../assets/logoS.png";
import startIcon from "../../assets/Star.png";

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
//   backgroundColor: "red",
  [theme.breakpoints.down("md")]:{
    flexDirection:"column",
    textAlign:"center",
    alignItems:"center",
    marginBottom:theme.spacing(4)
  }
}));

const CustomBox = styled(Box)(({ theme }) => ({
//   backgroundColor: "blue",
  [theme.breakpoints.down("md")]:{
    marginBottom:theme.spacing(4)
  }
}));

function Partners() {
  return (
    <Box
    sx={{mt:5}}
    >
      <CustomContainer>
        <CustomBox>
          <img src={logo} alt="" style={{maxWidth:"100%"}} />
          <Typography
          variant="body2"
          sx={{
            color:"#7D8589",
            fontSize:"16px",
            fontWeight:"600",
            mt:2
          }}
          >More than 45,000 trusted Users</Typography>
        </CustomBox>

        <Box
        >
          <img src={startIcon} alt="" style={{maxWidth:"100%"}} />
          <Typography
           sx={{
            fontSize:"16px",
            color:"#7D8589",
            fontWeight:"600",
            mt:2
           }}
          >5k Customers delivered</Typography>
        </Box>

      </CustomContainer>

      <Container
      sx={{
        display:'flex',
       flexDirection:"column"
      }}
      >
        <img  src={logos} alt="logos" />
      </Container>
    </Box>
  );
}

export default Partners;
