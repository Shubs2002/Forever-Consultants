import ScrollSections from "@/components/ScrollSections";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <ScrollSections />
      <Testimonials />
    </div>
  );
}
