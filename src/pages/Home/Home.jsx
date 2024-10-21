import Welcome from "../Wellcome/Welcome";
import Partners from "../Partners/Partners";
import Booking from "../Booking/Booking";
import Dishes from "../Dishes/Dishes";
import Ambience from "../Ambience/Ambience";
import Delivery from "../Delivery/Delivery";
import AboutUs from "../AboutUs/AboutUs";

function Home() {
  return (
    <>
      <Welcome />
      <Partners />
      <Booking />
      <Dishes />
      <Ambience />
      <Delivery />
      <AboutUs/>
    </>
  );
}

export default Home;
