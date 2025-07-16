import { Box, Typography } from "@mui/material";
import Link from "next/link";
import DataList from "../../components/list";
import VerticalLinearStepper from "../../components/vertical-stepper";

const steps = [
  {
    label: "Sign Up For The Team",
    description: (
      <Typography>
        First, fill out{" "}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScrXjbNzM4kuRyXe67YA11hkLBZCMm78hwUEeGn8vTo3sQCtQ/viewform"
          target="_blank"
        >
          this form
        </Link>{" "}
        to sign up to join the team
      </Typography>
    ),
  },
  {
    label: "Read Handbook",
    description: (
      <Typography>
        Next, read and sign the{" "}
        <Link
          href="https://docs.google.com/document/d/1je78p4ZADTx7aYyjeyP4SgrYUObXlefbY4ApI3SzYAI/edit?tab=t.0#heading=h.d51b07zbtvd9"
          target="_blank"
        >
          FRC Team 1806 S.W.A.T. Student Team Handbook
        </Link>{" "}
        to get familiarized with the rules and regulations of the team
      </Typography>
    ),
  },
  {
    label: "Register For FIRST Robotics",
    description: (
      <Typography>
        Lastly, register to become a member on the{" "}
        <Link
          href="https://my.firstinspires.org/AccountManager/Account/Register"
          target="_blank"
        >
          official FIRST robotics website
        </Link>{" "}
        to officially become a member of the team!
      </Typography>
    ),
  },
];

const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={10}
      marginX={15}
    >
      <Typography variant="h6">
        Welcome to the S.W.A.T. team! Complete the following steps to officially
        become a member of the team!
      </Typography>
      <VerticalLinearStepper steps={steps} />

      <DataList
        title={
          <Typography variant="h6">Frequently Asked Questions:</Typography>
        }
        items={[
          "Q: Where are meetings held at",
          <>
            A: Meetings are held in PLTW Engineering Room 12. Check out our{" "}
            <Link
              href="https://www.google.com/maps/place/Team+S.W.A.T.+1806/@39.3757502,-94.579071,17z/data=!3m1!4b1!4m6!3m5!1s0x87c05bc58a988b27:0xe77e847b3df1f69f!8m2!3d39.3757461!4d-94.5764961!16s%2Fg%2F11rfb4npw2?entry=tts&g_ep=EgoyMDI0MDczMS4wKgBIAVAD"
              target="_blank"
            >
              Google Maps Page
            </Link>{" "}
            for more info
          </>,
          "Q: When does the team meet?",
          <>
            A: The meeting schedule is TBD, contact Coach Woollums{" "}
            <Link href="mailto:woollumd@smithville.k12.mo.us" target="_blank">
              WoollumD@smithville.k12.mo.us
            </Link>{" "}
            for meeting information
          </>,
          "Q: I've signed up, but where can I keep in touch with the team?",
          <>
            A: Join our{" "}
            <Link
              href="https://join.slack.com/t/frc-1806/signup"
              target="_blank"
            >
              slack server
            </Link>
            !
          </>,
        ]}
      />
    </Box>
  );
};

export default About;
