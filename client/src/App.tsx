import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import JobBridgePrograms from "@/pages/job-bridge-programs";
import GlobalInternship from "@/pages/global-internship";
import EduLet from "@/pages/edu-let";
import AboutUs from "@/pages/about-us";
import ContactUs from "@/pages/contact-us";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/job-bridge-programs" component={JobBridgePrograms} />
      <Route path="/global-internship" component={GlobalInternship} />
      <Route path="/edu-let" component={EduLet} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact-us" component={ContactUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
