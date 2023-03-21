import LandingPage from "@/modules/Landing";

export const metadata = {
  title: "LXP App",
  description: "LXP App adalah LMS berbasis AI",
};

export default async function Home() {
  return <LandingPage />;
}
