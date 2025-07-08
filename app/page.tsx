import boardMeeting2023 from "./_assets/2023-Board-Meeting.jpg";
import cowtown2023 from "./_assets/2023-cowtown.jpg";
import greenCountry2023 from "./_assets/2023-greencountry.jpg";
import heartland2023 from "./_assets/2023-heartland.jpg";
import remakeLearning2023 from "./_assets/2023-remakelearning.jpg";
import robotWip2023 from "./_assets/2023-Robot-in-progress.jpg";
import gkc2024 from "./_assets/2024-GKC.jpg";
import mokan2024 from "./_assets/2024-MOKANState.jpg";
import Carousel, { ImageProps } from "./_components/carousel";

const carouseImgPaths: ImageProps[] = [
  {
    altText:
      "Team 1806's 2024 robot named Pizza Planet at Missouri-Kansas State Championship",
    displayText: "2024 - MOKAN State Championship",
    src: mokan2024,
  },
  {
    altText:
      "Team 1806 members standing in front of their trailer with their robot at GKC 2024",
    displayText: "2024 - Greater Kansas City Regional",
    src: gkc2024,
  },
  {
    altText:
      "Team members of Team 1806 posing for a photo at CowTown Throwdown 2023",
    displayText: "2023 - CowTown Throwdown",
    src: cowtown2023,
  },
  {
    altText:
      "Team members of Team 1806 posing with game pieces on their head from the 2023 competition at local the remake learning event",
    displayText: "2023 - Remake Learning Days Smithville",
    src: remakeLearning2023,
  },
  {
    altText:
      "Team members of Team 1806 posing for a photo at 2023 Green Country Regional",
    displayText: "2023 - Green Country Regional",
    src: greenCountry2023,
  },
  {
    altText:
      "Team 1806 S.W.A.T. in a collision with Team 1987 Broncobots and Team 1710 Ravonics Revolution at Heartland Regional 2023",
    displayText: "2023 - Heartland Regional",
    src: heartland2023,
  },
  {
    altText: "Team 1806 showing a work in progress version of their 2023 robot",
    displayText: "2023 - Robot In Progress",
    src: robotWip2023,
  },
  {
    altText:
      "Team 1806 demoing their 2022 robot to the Smithville School District Board of Education",
    displayText: "2023 - Smithville Schools Board Meeting",
    src: boardMeeting2023,
  },
];

export default function Home() {
  return <Carousel paths={carouseImgPaths} />;
}
