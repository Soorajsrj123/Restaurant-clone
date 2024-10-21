import { Box, Container, styled, Typography } from "@mui/material";
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'

function Footer() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const FooterLink = styled("span")(() => ({
    display:"inline-block",
    marginBottom:"5px",
    fontSize: "16px",
    color: "#000066",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#6682FF",
    },
  }));

  const IconBox=styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"1rem",
    [theme.breakpoints.down("sm")]: {
        justifyContent:"center",
      },
  }))
  return (
    <Box sx={{ py: 10, backgroundColor: "#FFF682" }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "600",
              mb: 2,
            }}
          >
            Featured
          </Typography>
          <FooterLink>Guides</FooterLink>
          <br />
          <FooterLink>Services</FooterLink>
          <br />
          <FooterLink>Contact Us</FooterLink>
        </Box>
        <Box>
        <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "600",
              mb: 2,
            }}
          >
            Featured
          </Typography>
          <FooterLink>Guides</FooterLink>
          <br />
          <FooterLink>Services</FooterLink>
          <br />
          <FooterLink>Contact Us</FooterLink>
        </Box>
        <Box>
        <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "600",
              mb: 2,
            }}
          >
            Overview
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#1C1C1D",
              fontWeight: "300",
              mb: 2,
            }}
          >
            Keep-in-touch with our social media
           
          </Typography>
          <IconBox>
                <img src={facebook} alt="a" />
                <img src={instagram} alt="b" />
                <img src={twitter} alt="c" />
            </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
}

export default Footer;
