import { Box, Container, styled, Typography } from "@mui/material";

import houseCard from "../../assets/ambience.jpg";
function Ambience() {
  const CustomBox = styled(Box)(({ theme }) => ({
  
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    width: "100%",
  
    [theme.breakpoints.down("md")]:{
       display:"flex",
       flexDirection:"column",
       alignItems:"center"
    }
  }));

  const Divider=styled('div')(({theme})=>({
        width:"13%",
        height:"7px",
        backgroundColor:"#000339",
        [theme.breakpoints.down("md")]:{
            marginLeft:"auto",
            marginRight:"auto"
        }

  }))

  const TextFlexBox = styled(Box)(({ theme }) => ({
     marginTop:theme.spacing(7),
     display:"flex",
     justifyContent:"space-between",
     padding:theme.spacing(0,5,0,5),
     [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
        gap:theme.spacing(5),
        textAlign:"center"
      }

  }));

  const SmallText=styled(Typography)(({ theme }) => ({
    fontSize:"18px",
    fontWeight:"500",
    color:"#7B8087",
    [theme.breakpoints.down("md")]:{
      fontSize:"14"
    }

 }));
 const LargeText=styled(Typography)(({ theme }) => ({
   fontSize:"64px",
   fontWeight:"700",
   color:"#000",
   [theme.breakpoints.down("md")]:{
    fontSize:"32px"
 }

 }));

  return (
    <Box
      sx={{
        py: 10,
      }}
    >
      <Container>
        <CustomBox>
          <ImageContainer>
            <img src={houseCard} style={{ maxWidth: "100%" }} alt="eg" />
          </ImageContainer>
          <Box>
           <Divider/>
            <Typography
            sx={{
                fontSize:"35px",
                fontWeight:"700",
                color:"#000339"
,                my:3
            }}
            >You&apos;ve found a ambience you love.</Typography>

            <Typography
            sx={{
             fontSize:"14px",
             fontWeight:"600",
             color:"silver"
            }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              obcaecati optio suscipit enim, natus mollitia deserunt amet
              
            
            </Typography>
          </Box>
        </CustomBox>

        <TextFlexBox>
          <Box 
          sx={{
            display:'flex',
            flexDirection:"column",
            alignItems:"center",
          }}
          >
            <LargeText>250+</LargeText>
            <SmallText>Dishes</SmallText>
          </Box>
          <Box>
          <LargeText>300+</LargeText>
          <SmallText>Trusted Clients</SmallText>
          </Box>
          <Box>
          <LargeText>400+</LargeText>
          <SmallText>Delivery Per Day</SmallText>
          </Box>
        </TextFlexBox>
      </Container>
    </Box>
  );
}

export default Ambience;
