import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: (data: { email: string }) => 
      apiRequest("/api/newsletter", "POST", data),
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
      <h3 className="text-xl font-bold mb-6 text-blue-200">Subscribe to our newsletter</h3>
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
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900"
          disabled={newsletterMutation.isPending}
        >
          {newsletterMutation.isPending ? "Subscribing..." : "Submit"}
        </Button>
      </form>
      <p className="text-sm text-gray-400 mt-3">
        By submitting this form, you are agreeing to our{" "}
        <span className="text-blue-300 font-semibold hover:text-blue-200 cursor-pointer">Privacy Policy</span>.
      </p>
    </div>
  );
}