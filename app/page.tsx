import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <div className="relative bg-black">
      <FloatingNav navItems={navItems} />
      <Hero />
    </div>
  );
}
