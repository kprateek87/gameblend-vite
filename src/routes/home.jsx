import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "GameBlend: Game on, anytime, anywhere!" },
    {
      name: "description",
      content:
        "GameBlend: Game on, anytime, anywhere! Stay updated with the latest gaming news, deals, reviews, and exclusive game picks. Join us for an immersive gaming experience!",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Welcome />
    </>
  );
}
