import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  programInterest: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    programInterest: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) =>
      apiRequest("/api/contact", "POST", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        programInterest: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send",
        description: error?.message || "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phoneNumber.trim() || !formData.programInterest || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const updateFormData = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => updateFormData("fullName", e.target.value)}
              className="w-full"
              disabled={contactMutation.isPending}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData("phoneNumber", e.target.value)}
              className="w-full"
              disabled={contactMutation.isPending}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            className="w-full"
            disabled={contactMutation.isPending}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Programs Interested In *</label>
          <Select
            value={formData.programInterest}
            onValueChange={(value) => updateFormData("programInterest", value)}
            disabled={contactMutation.isPending}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Job-Bridge Program">Job-Bridge Program</SelectItem>
              <SelectItem value="Global Internship">Global Internship</SelectItem>
              <SelectItem value="Research Paper">Research Paper</SelectItem>
              <SelectItem value="Edu-let">Edu-let Tablet</SelectItem>
              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Messages *</label>
          <Textarea
            placeholder="Write your message..."
            rows={5}
            value={formData.message}
            onChange={(e) => updateFormData("message", e.target.value)}
            className="w-full"
            disabled={contactMutation.isPending}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[hsl(219,79%,37%)] text-white py-4 text-lg font-semibold hover:bg-[hsl(217,91%,60%)]"
          disabled={contactMutation.isPending}
        >
          {contactMutation.isPending ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}