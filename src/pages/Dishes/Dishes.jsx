import { Box, Container, styled, Typography } from "@mui/material";
import { Data } from "../../Static/Static.js";
import CustomCard from "../../components/CustomCard/CustomCard";

function Dishes() {
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const DishesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));
  return (
    <Box
      sx={{
        backgroundColor: "#F5FAFE",
        mt: 5,
        py: 10,
      }}
    >
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{
              color:"#000339",
              fontSize: "35px",
              fontWeight: "bold",
              ml: "13px",
            }}
          >
           Featred Dishes
          </Typography>
          <Typography
            sx={{
              color:"#5A6473",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 1,
              ml: "13px",
            }}
          >
                      Explore varity of southindian dishe

          </Typography>
        </PropertiesTextBox>
        <DishesBox>
          {Data.map((food) => (
            <CustomCard
              key={food.id}
              img={food.img}
              price={food.price}
              item={food.item}
              likes={food.likes}
              heart={food.heart}
              share={food.share}
            />
          ))}
        </DishesBox>
      </Container>
    </Box>
  );
}

export default Dishes;
