import { Box, Typography } from "@mui/material";
import {styled,Container} from '@mui/system'
import welcome from '../../assets/welcome.png'
import CustomButton from "../../components/Header/CustomButton/CustomButton";
function Welcome() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize:"64px",
    color:"#fff",
    fontWeight:"bold",
    margin:theme.spacing(4,0,4,0),
    [theme.breakpoints.down("sm")]:{
        fontSize:"40px"
    }
  }));
  return (
    <Box sx={{ backgroundColor: "#FED801", minHeightL: "80vh" }}>
      <Container>
        <CustomBox>
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mb: 4,
                mt: 10,
              }}
            >
              Welcome to FoodZone Restaurant
            </Typography>
            <Title variant="h1">
              Discover a Place where you all love to eat
            </Title>
            <Typography
            variant="body2"
            sx={{
                fontSize:"18px",
                color:"#5A6473",
                my:4
            }}
            >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod in. Tenetur minima ab earum, doloribus, saepe molestiae, beatae inventore id maiores quaerat vel recusandae magnam qui reiciendis. Sunt, deserunt.
            </Typography>
            <CustomButton
            backgroundColor="#0f1B4C"
            color="#fff"
            buttonText="More AboutUs"
            welcomeBtn={true}
            />
          </Box>

          <Box
           sx={{
            flex: 1.25,
            display: "flex", // Flex to center the image
            justifyContent: "center",
            alignItems: "center",
          }}
          >
            <img style={{maxWidth:'100%',marginBottom:"2rem"}} src={welcome} alt="gg" />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Welcome;
