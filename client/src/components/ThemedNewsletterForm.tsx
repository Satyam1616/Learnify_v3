import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ThemedNewsletterFormProps {
  theme: 'purple' | 'teal' | 'rose' | 'emerald' | 'amber' | 'indigo';
}

const themeConfig = {
  purple: {
    headingText: 'text-purple-200',
    gradient: 'from-purple-600 to-purple-800',
    hoverGradient: 'from-purple-700 to-purple-900',
    linkText: 'text-purple-300',
    linkHover: 'hover:text-purple-200'
  },
  teal: {
    headingText: 'text-teal-200',
    gradient: 'from-teal-600 to-teal-800',
    hoverGradient: 'from-teal-700 to-teal-900',
    linkText: 'text-teal-300',
    linkHover: 'hover:text-teal-200'
  },
  rose: {
    headingText: 'text-rose-200',
    gradient: 'from-rose-600 to-rose-800',
    hoverGradient: 'from-rose-700 to-rose-900',
    linkText: 'text-rose-300',
    linkHover: 'hover:text-rose-200'
  },
  emerald: {
    headingText: 'text-emerald-200',
    gradient: 'from-emerald-600 to-emerald-800',
    hoverGradient: 'from-emerald-700 to-emerald-900',
    linkText: 'text-emerald-300',
    linkHover: 'hover:text-emerald-200'
  },
  amber: {
    headingText: 'text-amber-200',
    gradient: 'from-amber-600 to-amber-800',
    hoverGradient: 'from-amber-700 to-amber-900',
    linkText: 'text-amber-300',
    linkHover: 'hover:text-amber-200'
  },
  indigo: {
    headingText: 'text-indigo-200',
    gradient: 'from-indigo-600 to-indigo-800',
    hoverGradient: 'from-indigo-700 to-indigo-900',
    linkText: 'text-indigo-300',
    linkHover: 'hover:text-indigo-200'
  }
};

export default function ThemedNewsletterForm({ theme }: ThemedNewsletterFormProps) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const config = themeConfig[theme];

  const newsletterMutation = useMutation({
    mutationFn: (data: { email: string }) => 
      apiRequest("POST", "/api/newsletter", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription Failed",
        description: error?.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    newsletterMutation.mutate({ email: email.trim() });
  };

  return (
    <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
      <h3 className={`text-xl font-bold mb-6 ${config.headingText}`}>Subscribe to our newsletter</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
          disabled={newsletterMutation.isPending}
        />
        <Button 
          type="submit"
          className={`w-full bg-gradient-to-r ${config.gradient} hover:${config.hoverGradient} text-white`}
          disabled={newsletterMutation.isPending}
        >
          {newsletterMutation.isPending ? "Subscribing..." : "Submit"}
        </Button>
      </form>
      <p className="text-sm text-gray-400 mt-3">
        By submitting this form, you are agreeing to our{" "}
        <span className={`${config.linkText} font-semibold ${config.linkHover} cursor-pointer`}>Privacy Policy</span>.
      </p>
    </div>
  );
}