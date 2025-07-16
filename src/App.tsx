import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CareerSelection from "./pages/CareerSelection";
import LocationSelection from "./pages/LocationSelection";
import CollegeList from "./pages/CollegeList";
import AptitudeTest from "./pages/AptitudeTest";
import TestCompletion from "./pages/TestCompletion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/careers" element={<CareerSelection />} />
          <Route path="/location-selection" element={<LocationSelection />} />
          <Route path="/colleges" element={<CollegeList />} />
          <Route path="/aptitude-test" element={<AptitudeTest />} />
          <Route path="/test-completion" element={<TestCompletion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
