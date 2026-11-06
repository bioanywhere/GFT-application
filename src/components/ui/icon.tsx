import {
  Landmark, Leaf, HeartHandshake, Workflow, Rocket, Search, Scale, FlaskConical, Hammer, Megaphone,
  TrendingUp, Lightbulb, Cpu, Globe2, Target, Handshake, Users, BarChart3, Layers, Compass, Sparkles,
  Building2, ShieldCheck, Repeat, type LucideProps,
} from "lucide-react";
import type { IconName } from "@/content/types";

const icons = {
  Landmark, Leaf, HeartHandshake, Workflow, Rocket, Search, Scale, FlaskConical, Hammer, Megaphone,
  TrendingUp, Lightbulb, Cpu, Globe2, Target, Handshake, Users, BarChart3, Layers, Compass, Sparkles,
  Building2, ShieldCheck, Repeat,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp {...props} />;
}
