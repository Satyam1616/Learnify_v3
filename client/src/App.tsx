import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import JobBridgePrograms from "@/pages/job-bridge-programs";
import GlobalInternship from "@/pages/global-internship";

import AboutUs from "@/pages/about-us";
import ContactUs from "@/pages/contact-us";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import WebDevelopment from "@/pages/job-bridge/web-development";
import ArtificialIntelligence from "@/pages/job-bridge/artificial-intelligence";
import DigitalMarketing from "@/pages/job-bridge/digital-marketing";
import DataScience from "@/pages/job-bridge/data-science";
import DroneEngineering from "@/pages/job-bridge/drone-engineering";
import UIUXDesign from "@/pages/job-bridge/ui-ux-design";
import Careers from "@/pages/careers";
import Blog from "@/pages/blog";
import HelpCenter from "@/pages/help-center";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import ELearningCourses from "@/pages/e-learning-courses";
import ResearchPaper from "@/pages/research-paper";
import PythonProgramming from "@/pages/e-learning/python-programming";
import DigitalPhotography from "@/pages/e-learning/digital-photography";
import ExcelBusinessAnalytics from "@/pages/e-learning/excel-business-analytics";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/job-bridge-programs" component={JobBridgePrograms} />
      <Route path="/global-internship" component={GlobalInternship} />

      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact-us" component={ContactUs} />
      {/* Job Bridge Course Pages */}
      <Route path="/job-bridge/web-development" component={WebDevelopment} />
      <Route path="/job-bridge/artificial-intelligence" component={ArtificialIntelligence} />
      <Route path="/job-bridge/digital-marketing" component={DigitalMarketing} />
      <Route path="/job-bridge/data-science" component={DataScience} />
      <Route path="/job-bridge/drone-engineering" component={DroneEngineering} />
      <Route path="/job-bridge/ui-ux-design" component={UIUXDesign} />
      {/* Additional Pages */}
      <Route path="/careers" component={Careers} />
      <Route path="/blog" component={Blog} />
      <Route path="/help-center" component={HelpCenter} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/e-learning-courses" component={ELearningCourses} />
      <Route path="/research-paper" component={ResearchPaper} />
      {/* E-Learning Course Pages */}
      <Route path="/e-learning/python-programming" component={PythonProgramming} />
      <Route path="/e-learning/digital-photography" component={DigitalPhotography} />
      <Route path="/e-learning/excel-business-analytics" component={ExcelBusinessAnalytics} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
