import LandingModule from "@/modules/landing";

export const metadata = {
  title: "LXP App",
  description: "LXP App adalah LMS berbasis AI",
};

export default async function Home() {
  return <LandingModule />;
}
