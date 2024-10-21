import { Box, styled, Typography } from "@mui/material";
import CustomButton from "../../components/Header/CustomButton/CustomButton";
import buyIcon from "../../assets/buy_icon.png";
import  rentIcon from "../../assets/sell_Icon.png";
import sellIcon from "../../assets/sell_icon.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
function Booking() {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "86%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    // backgroundColor: "green",
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));
  const GuideBox = styled(Box)(({theme}) => ({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(5),
    [theme.breakpoints.down('sm')]:{
        margin:theme.spacing(2,0,2,0)
    }
  }));

 
  return (
    <Box
      sx={{
        // backgroundColor:"red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "10px",
          backgroundColor: "black",
        }}
      ></div>
      <Typography
        variant="h3"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#000339",
          my: 3,
        }}
      >
        How To Book
      </Typography>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            textAlign: "center",
            color: "#5A6473",
          }}
        >
          Everything You need to know when ur booking a thing
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <img src={buyIcon} alt="b" />
          <Typography
          variant="body2"
          sx={{
            fontSize:"18px",
            fontWeight:"500",
            color:"#3B3c45",
            my:1,
          }}
          >Order Guids
          </Typography>
          <Box
          sx={{
        cursor:'pointer',
              display:"flex",
              justifyContent:'center',
              alignItems:"center"
          }}
          >
            <Typography
            variant="body2"
            sx={{
                fontSize:"14px",
                fontWeight:"bold",
                color:"#0689FF"
            }}
            >How to order
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}  />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={sellIcon} alt="b" />
          <Typography
          variant="body2"
          sx={{
            fontSize:"18px",
            fontWeight:"500",
            color:"#3B3c45",
            my:1,
          }}
          >Order Guids
          </Typography>
          <Box
          sx={{
        cursor:'pointer',
              display:"flex",
              justifyContent:'center',
              alignItems:"center"
          }}
          >
            <Typography
            variant="body2"
            sx={{
                fontSize:"14px",
                fontWeight:"bold",
                color:"#0689FF"
            }}
            >How to order
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}  />
          </Box>
        </GuideBox>
        <GuideBox>
          <img src={rentIcon} alt="b" />
          <Typography
          variant="body2"
          sx={{
            fontSize:"18px",
            fontWeight:"500",
            color:"#3B3c45",
            my:1,
          }}
          >Order Guids
          </Typography>
          <Box
          sx={{
        cursor:'pointer',
              display:"flex",
              justifyContent:'center',
              alignItems:"center"
          }}
          >
            <Typography
            variant="body2"
            sx={{
                fontSize:"14px",
                fontWeight:"bold",
                color:"#0689FF"
            }}
            >How to order
            </Typography>
            <ArrowRightAltIcon style={{color:"#0689FF"}}  />
          </Box>
        </GuideBox>
      </GuidesBox>
      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See full guides"
        guideBtn={true}
      />
    </Box>
  );
}

export default Booking;
