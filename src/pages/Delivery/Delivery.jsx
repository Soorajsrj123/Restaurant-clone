import { Box, Container, styled, Typography } from '@mui/material'
import CustomButton from '../../components/Header/CustomButton/CustomButton'
import DeliveryImg from '../../assets/DeliveryImg.png'
function Delivery() {

   
    const CustomContainer=styled(Container)(({theme})=>({
        backgroundColor:"#FED801",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        borderRadius:"15px",
        height:'416px',
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            height:"auto",
            padding:theme.spacing(3,3,0,3),
            width:"90%"
        }
    }))

    const CustomBox=styled(Box)(({theme})=>({
        //   backgroundColor:"red",
          padding:theme.spacing(10,0,10,0),
          margin:theme.spacing(0,2,0,2),
          [theme.breakpoints.down("md")]:{
            padding:"0"
        }
    }))
    const ContentWrapper=styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",  // Centers the content horizontally
        textAlign: "center",   // Centers text content
        [theme.breakpoints.down("md")]: {
          width: "100%"        // Makes the wrapper full-width for better centering
        }
      }));
    
  return (
    <CustomBox>
          <CustomContainer>
             <ContentWrapper
              
             >
                <Typography
                sx={{
                    fontSize:"35px",
                    fontWeight:"700",
                    color:'white',
                    fontFamily:"monospace"

                }}
                >
                    Super Fast Home devivery!
                </Typography>
                <Typography
                 sx={{
                    fontSize:"16px",
                    fontWeight:"800",
                    color:'#000',
                    fontFamily:"monospace",
                    my:3

                }}
                >
                    Door to Door Delivery
                </Typography>
                <CustomButton
                 backgroundColor='#fff'
                 color='#17275F'
                 buttonText='Order Now'

                />
             </ContentWrapper>
             <img src={DeliveryImg} style={{maxWidth:"100%"}} alt="" />
          </CustomContainer>
    </CustomBox>
  )
}

export default Delivery
