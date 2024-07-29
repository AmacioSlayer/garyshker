import { useEffect } from "react";
import VolunteerHero from "components/volunteering/hero";
import VolunteerForm from "components/volunteering/form";
import Footer from "components/common/footer";

export default function Volunteering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VolunteerHero />
      <VolunteerForm />
      <Footer />
    </>
  );
}
