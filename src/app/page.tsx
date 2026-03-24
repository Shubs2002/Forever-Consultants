import ScrollSections from "@/components/ScrollSections";
import Philosophy from "@/components/Philosophy";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <ScrollSections />
      <Philosophy />
      <Booking />
      <Testimonials />
    </div>
  );
}
