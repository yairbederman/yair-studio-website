import HomePageBody from "@/components/pages/HomePageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/");

export default function HomePage() {
  return <HomePageBody locale="en" />;
}
