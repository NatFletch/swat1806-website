import cowtown2023 from "./_assets/2023-cowtown.jpg";
import Carousel from "./_components/carousel";

export default function Home() {
  return (
    <Carousel
      paths={[
        {
          src: cowtown2023,
          altText: "2023 cowtown",
          displayText: "2023 cowtown",
        },
      ]}
    />
  );
}
