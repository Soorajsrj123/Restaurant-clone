/* eslint-disable react/prop-types */
import { Button } from '@mui/material'
import { styled } from '@mui/system'

function CustomButton({
    backgroundColor,
    color,
    buttonText,
    welcomeBtn,
    guideBtn,
    getStartedBtn
}) {
    const CusmonButton=styled(Button)(({theme})=>({
        backgroundColor:backgroundColor,
        color:color,
        fontWeight:'700',
        fontSize:"14px",
        padding:"0.5rem 1.2rem",
        borderRadius:"4px",
        textTransform:"none",
        display:"block",
        border:"2px solid transparent",
        "&:hover":{
            backgroundColor:color,
            color:backgroundColor,
            borderColor:backgroundColor
        },
        [theme.breakpoints.down("md")]:{
            margin:(welcomeBtn||getStartedBtn)&&theme.spacing(0,"auto",3,"auto"),
            width:(welcomeBtn||getStartedBtn)&& "90%",
        },
        [theme.breakpoints.down("sm")]:{
            margintTop:guideBtn && theme.spacing(3),
            width:guideBtn && "90%",
        },

  }))

  return (
   <CusmonButton>
     {buttonText}
   </CusmonButton>
  )
}

export default CustomButton
