import ThemedHeader from "@/components/ThemedHeader";
import ThemedFooter from "@/components/ThemedFooter";

interface ThemedLayoutProps {
  children: React.ReactNode;
  theme: 'purple' | 'teal' | 'rose' | 'emerald' | 'amber' | 'indigo';
}

export default function ThemedLayout({ children, theme }: ThemedLayoutProps) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ThemedHeader theme={theme} />
      <main>{children}</main>
      <ThemedFooter theme={theme} />
    </div>
  );
}