"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Wrench,
  Sparkles,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Target,
  Menu,
  X,
  Star,
  MapPin,
  Globe,
  Heart,
  CheckCircle2,
  ArrowRight,
  Mail,
  Building2,
  DollarSign,
  BarChart3,
  Settings,
  Gauge,
  Camera,
  Languages,
  Wifi,
  Battery,
  Cloud,
  Bell,
  AlertTriangle,
  Calendar,
  Clock,
  Radio,
  Route,
  Eye,
  Compass,
  Zap as Lightning,
} from "lucide-react";

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#products", label: "Products" },
    { href: "#dashboard", label: "Dashboard" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F172A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <img
                src="/logo.png"
                alt="ORION Dev Core"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-tight">
                ORION
              </span>
              <span className="text-[#D4A84B] text-xs font-medium tracking-widest">
                DEV CORE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#D4A84B] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-[#D4A84B] text-[#0F172A] hover:bg-[#E8C97A] font-semibold">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-[#D4A84B] transition-colors text-lg font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full bg-[#D4A84B] text-[#0F172A] hover:bg-[#E8C97A] font-semibold mt-4">
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#0F172A]/90 to-[#0B1220]/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A84B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2D8B8B]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#D4A84B]" />
            <span className="text-sm text-gray-300">
              Built in Africa. Engineered for Impact.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Agentic AI for
            <br />
            <span className="gradient-text">African Hospitality</span>
          </h1>

          {/* Tagline */}
          <div className="flex flex-wrap justify-center gap-2 text-lg sm:text-xl">
            <span className="text-[#D4A84B] font-bold">IMAGINE.</span>
            <span className="text-[#2D8B8B] font-bold">AMPLIFY.</span>
            <span className="text-white font-bold">CONNECT.</span>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <span className="text-[#D4A84B] font-semibold">
              Proactive Intelligence.
            </span>
            <span className="text-[#2D8B8B] font-semibold">
              {" "}
              Local Languages.
            </span>
            <span className="text-white font-semibold"> Real Impact.</span>
            <br />
            ORION HOTEL SUITE delivers{" "}
            <span className="text-[#D4A84B] font-semibold">
              5-17% measurable revenue increase
            </span>{" "}
            through AI-powered optimization that anticipates needs before they
            become problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#D4A84B] text-[#0F172A] hover:bg-[#E8C97A] font-semibold px-8 py-6 text-lg group"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 max-w-5xl mx-auto">
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl font-bold text-[#D4A84B]">
                5-17%
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2">
                Revenue Increase
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl font-bold text-[#2D8B8B]">
                8+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2">
                African Languages
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl font-bold text-white">
                Agentic
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2">
                Proactive AI
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-2xl sm:text-4xl font-bold text-[#D4A84B]">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-2">
                Provable Results
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#D4A84B] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Agentic AI Section
function AgenticAISection() {
  return (
    <section
      id="features"
      className="py-24 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 168, 75, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(45, 139, 139, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-[#D4A84B]/30 text-[#D4A84B]"
              >
                <Brain className="w-3 h-3 mr-1" />
                Proactive Intelligence
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Not Just AI—
                <br />
                <span className="gradient-text">Intelligence That Cares</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Most hospitality AI waits for problems to happen, then responds.
                ORION&apos;s{" "}
                <span className="text-[#D4A84B] font-semibold">Agentic AI</span>{" "}
                is fundamentally different—it anticipates needs before they
                become problems. It&apos;s not reactive; it&apos;s proactive. It
                doesn&apos;t just respond; it predicts and prevents.
              </p>
              <p>
                Imagine an AI that warns guests about upcoming load shedding and
                suggests ordering dinner beforehand. An AI that notices a
                pattern of maintenance issues in Room 312 before the guest
                complains. An AI that sees a guest&apos;s birthday is tomorrow
                and prompts your team to prepare something special. This
                isn&apos;t artificial intelligence that replaces human
                judgment—it&apos;s intelligence that amplifies your team&apos;s
                ability to deliver extraordinary experiences.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <AlertTriangle className="w-6 h-6 text-[#D4A84B] mb-2" />
                <h4 className="font-semibold text-white">Predictive Alerts</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Anticipate issues before guests notice them
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Zap className="w-6 h-6 text-[#2D8B8B] mb-2" />
                <h4 className="font-semibold text-white">Proactive Actions</h4>
                <p className="text-sm text-gray-400 mt-1">
                  AI that acts, not just suggests
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Battery className="w-6 h-6 text-[#D4A84B] mb-2" />
                <h4 className="font-semibold text-white">
                  Load Shedding Aware
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Built for African infrastructure realities
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Heart className="w-6 h-6 text-[#2D8B8B] mb-2" />
                <h4 className="font-semibold text-white">Human-Centered</h4>
                <p className="text-sm text-gray-400 mt-1">
                  AI that uplifts humanity, not replaces it
                </p>
              </div>
            </div>
          </div>

          {/* AI Visualization Card */}
          <div className="relative">
            <Card className="bg-[#1E293B] border border-white/10 overflow-hidden">
              <CardHeader className="border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A84B]/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-[#D4A84B]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">
                      ORION AI Assistant
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Proactive Intelligence Engine
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {/* AI Alert */}
                <div className="p-4 rounded-lg bg-[#D4A84B]/10 border border-[#D4A84B]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-[#D4A84B]" />
                    <span className="text-sm font-medium text-[#D4A84B]">
                      Proactive Alert
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Load shedding scheduled for Stage 4, 18:00-20:30. Guest in
                    Room 215 ordered dinner at 17:45—suggest notifying kitchen
                    to prioritize.
                  </p>
                </div>

                {/* AI Insight */}
                <div className="p-4 rounded-lg bg-[#2D8B8B]/10 border border-[#2D8B8B]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-[#2D8B8B]" />
                    <span className="text-sm font-medium text-[#2D8B8B]">
                      Opportunity Detected
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Guest in Suite 402 mentioned anniversary in pre-stay survey.
                    Tomorrow is the date. Room upgrade available—recommend
                    champagne on arrival.
                  </p>
                </div>

                {/* AI Prediction */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">
                      Predictive Analysis
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Room 312 AC showing 15% efficiency drop over 3 days.
                    Predicted failure: 72 hours. Proactive maintenance ticket
                    created.
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-gray-400">AI Active</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    Last update: 2 min ago
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// African Languages Section
function AfricanLanguagesSection() {
  const languages = [
    { name: "Zulu", native: "isiZulu", speakers: "12M+" },
    { name: "Xhosa", native: "isiXhosa", speakers: "8M+" },
    { name: "Afrikaans", native: "Afrikaans", speakers: "7M+" },
    { name: "Sotho", native: "Sesotho", speakers: "5M+" },
    { name: "Tswana", native: "Setswana", speakers: "4M+" },
    { name: "Venda", native: "Tshivenda", speakers: "1.2M+" },
    { name: "Tsonga", native: "Xitsonga", speakers: "2.3M+" },
    { name: "Ndebele", native: "isiNdebele", speakers: "1.1M+" },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-[#2D8B8B]/10 text-[#2D8B8B] border-[#2D8B8B]/20"
              >
                <Languages className="w-3 h-3 mr-1" />
                Local Language Support
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
                Speaking Your Guests&apos;
                <br />
                <span className="text-[#2D8B8B]">Language—Literally</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                In South Africa, hospitality is personal. It&apos;s about making
                every guest feel at home, regardless of where home is.
                ORION&apos;s African Language Support isn&apos;t just
                translation—it&apos;s cultural intelligence. When a
                Zulu-speaking guest arrives in Durban, they should be greeted in
                isiZulu. When a Xhosa family celebrates a wedding in Cape Town,
                your team should have the tools to make them feel truly welcome.
              </p>
              <p>
                Our platform supports{" "}
                <span className="text-[#D4A84B] font-semibold">
                  8+ indigenous African languages
                </span>
                , enabling your staff to communicate authentically with guests
                in their mother tongue. This isn&apos;t about checking diversity
                boxes—it&apos;s about delivering the warmth and hospitality that
                South Africa is famous for, in the languages that make it
                meaningful.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A84B]/10 text-[#D4A84B]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Native Language Greetings
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D8B8B]/10 text-[#2D8B8B]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium">Cultural Context</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A84B]/10 text-[#D4A84B]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Staff Translation Tools
                </span>
              </div>
            </div>
          </div>

          {/* Languages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {languages.map((lang, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-100 hover:border-[#D4A84B]/30 transition-all duration-300"
              >
                <CardContent className="p-4 text-center">
                  <Languages className="w-6 h-6 text-[#2D8B8B] mx-auto mb-2" />
                  <h4 className="font-semibold text-[#0F172A]">{lang.name}</h4>
                  <p className="text-xs text-gray-500">{lang.native}</p>
                  <p className="text-xs text-[#D4A84B] mt-1">
                    {lang.speakers} speakers
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Ghost LAN Routing Section
function GhostLANSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#D4A84B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#2D8B8B]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-[#D4A84B]/30 text-[#D4A84B]"
              >
                <Wifi className="w-3 h-3 mr-1" />
                Exclusive Technology
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                GHOST LAN
                <br />
                <span className="gradient-text">Revolutionary Routing</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Traditional ticket routing goes through managers, dispatchers,
                and departments—adding precious minutes to every response.{" "}
                <span className="text-[#D4A84B] font-semibold">GHOST LAN</span>{" "}
                changes everything. Our revolutionary routing system uses phone
                MAC addresses and IP detection to route tickets directly to the
                nearest available staff member.
              </p>
              <p>
                When a guest reports a maintenance issue, GHOST LAN identifies
                which maintenance staff member is closest to that room and
                assigns the ticket instantly. No middleman. No delays. The right
                person, in the right place, at the right time—every single time.
                This isn&apos;t just operational efficiency; it&apos;s guest
                experience transformation.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Route className="w-6 h-6 text-[#D4A84B] mb-2" />
                <h4 className="font-semibold text-white">Direct Routing</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Bypass the middleman completely
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-6 h-6 text-[#2D8B8B] mb-2" />
                <h4 className="font-semibold text-white">Location Aware</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Find the closest staff instantly
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Zap className="w-6 h-6 text-[#D4A84B] mb-2" />
                <h4 className="font-semibold text-white">Sub-Second</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Ticket assignment in milliseconds
                </p>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <Card className="bg-[#0F172A] border border-white/10 overflow-hidden">
            <CardHeader className="border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4A84B]/20 flex items-center justify-center">
                  <Radio className="w-5 h-5 text-[#D4A84B]" />
                </div>
                <div>
                  <CardTitle className="text-lg text-white">
                    GHOST LAN Active
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Real-time staff positioning
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Mock Map Visualization */}
              <div className="relative h-64 rounded-lg bg-[#1E293B] border border-white/10 p-4">
                {/* Floor plan grid */}
                <div className="absolute inset-4 grid grid-cols-4 grid-rows-3 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded bg-white/5 border border-white/10"
                    />
                  ))}
                </div>

                {/* Staff indicators */}
                <div
                  className="absolute top-12 left-12 w-4 h-4 rounded-full bg-[#2D8B8B] animate-pulse"
                  title="Staff: Thabo"
                />
                <div
                  className="absolute top-24 left-36 w-4 h-4 rounded-full bg-[#2D8B8B] animate-pulse"
                  title="Staff: Nomsa"
                />
                <div
                  className="absolute bottom-16 right-16 w-4 h-4 rounded-full bg-[#D4A84B] animate-pulse"
                  title="Staff: Johan (Assigned)"
                />

                {/* Guest request indicator */}
                <div className="absolute bottom-20 right-20 w-6 h-6 rounded-full bg-red-500/80 flex items-center justify-center">
                  <span className="text-xs text-white">!</span>
                </div>

                {/* Legend */}
                <div className="absolute bottom-2 left-2 flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#2D8B8B]" />
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#D4A84B]" />
                    <span>Assigned</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Request</span>
                  </div>
                </div>
              </div>

              {/* Assignment Log */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-2 rounded bg-white/5 text-sm">
                  <span className="text-gray-400">Room 312 - Maintenance</span>
                  <span className="text-[#D4A84B]">
                    Assigned to Johan (8m away)
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/5 text-sm">
                  <span className="text-gray-400">Room 405 - Housekeeping</span>
                  <span className="text-[#2D8B8B]">
                    Assigned to Nomsa (12m away)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// AI Vision Maintenance Section
function AIVisionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-[#D4A84B]/10 text-[#D4A84B] border-[#D4A84B]/20"
              >
                <Camera className="w-3 h-3 mr-1" />
                AI Vision Technology
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
                Snap a Photo,
                <br />
                <span className="text-[#D4A84B]">Problem Solved</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Gone are the days of guests struggling to describe maintenance
                issues over the phone. &quot;There&apos;s something wrong with
                the bathroom thing&quot; becomes crystal clear when your guest
                simply snaps a photo. Our{" "}
                <span className="text-[#D4A84B] font-semibold">
                  AI Vision technology
                </span>{" "}
                analyzes the image, identifies the problem, categorizes the
                severity, and automatically creates a detailed maintenance
                ticket.
              </p>
              <p>
                The AI recognizes everything from leaky faucets and broken air
                conditioning units to electrical issues and furniture damage. It
                estimates repair time, identifies the right tools and parts
                needed, and routes the ticket to the most qualified staff member
                through GHOST LAN. What used to take 15 minutes of
                back-and-forth phone calls now happens in seconds—with
                photographic documentation for your records.
              </p>
            </div>

            {/* How It Works */}
            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-[#0F172A]">How It Works</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4A84B]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#D4A84B]">1</span>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Guest photographs the issue through ORION mobile app or
                      WhatsApp
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2D8B8B]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#2D8B8B]">2</span>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      AI analyzes image, identifies problem type and severity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4A84B]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#D4A84B]">3</span>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      Automatic ticket creation with GHOST LAN routing to
                      nearest qualified staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <Card className="bg-[#0F172A] border border-white/10 overflow-hidden">
            <CardContent className="p-6 space-y-6">
              {/* Photo Preview */}
              <div className="relative aspect-video rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">
                      Guest Photo Captured
                    </p>
                  </div>
                </div>
                {/* AI Detection Overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="p-2 rounded bg-[#D4A84B]/20 backdrop-blur-sm border border-[#D4A84B]/40">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#D4A84B]" />
                      <span className="text-xs text-[#D4A84B] font-medium">
                        AI Detected: Faucet Leak
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#1E293B] border border-white/10">
                  <h4 className="text-sm font-medium text-white mb-3">
                    AI Analysis Results
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Issue Type:</span>
                      <p className="text-white">Plumbing - Faucet Leak</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Severity:</span>
                      <p className="text-[#D4A84B]">Medium</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Est. Repair:</span>
                      <p className="text-white">15-20 minutes</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Parts Needed:</span>
                      <p className="text-white">Washer, O-ring</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-[#2D8B8B]/10 border border-[#2D8B8B]/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2D8B8B]" />
                    <span className="text-sm text-[#2D8B8B]">
                      Ticket #M-4821 Created
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    Assigned via GHOST LAN
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Guest Journey Section
function GuestJourneySection() {
  const journeyStages = [
    {
      title: "Pre-Stay",
      icon: Calendar,
      color: "gold",
      description:
        "The guest journey begins long before check-in. ORION captures preferences during booking, anticipates needs based on stay purpose, and prepares your team with actionable insights. Is it their anniversary? Do they need airport pickup? Are they traveling for business? Every detail is captured and distributed to the right departments before the guest even arrives.",
      features: [
        "Preference capture",
        "Occasion detection",
        "Pre-arrival preparation",
        "Transportation coordination",
      ],
      metric: "Pre-Stay Engagement",
      metricValue: "+85%",
    },
    {
      title: "During Stay",
      icon: Heart,
      color: "teal",
      description:
        "Real-time support that doesn't wait for problems. Our Agentic AI monitors for issues, triggers proactive upsell opportunities at the right moment, and ensures instant issue resolution through GHOST LAN routing. From the moment they check in until they depart, every interaction is optimized for both guest satisfaction and revenue generation.",
      features: [
        "Real-time support",
        "Proactive upselling",
        "Instant issue resolution",
        "Personalized recommendations",
      ],
      metric: "Guest Satisfaction",
      metricValue: "4.8/5",
    },
    {
      title: "Post-Stay",
      icon: Star,
      color: "gold",
      description:
        "The relationship doesn't end at checkout. ORION automates feedback collection, analyzes sentiment, and triggers rebooking incentives at optimal moments. Loyalty programs, personalized offers, and anniversary reminders keep your property top-of-mind. Transform one-time guests into lifelong advocates who return again and again.",
      features: [
        "Automated feedback",
        "Sentiment analysis",
        "Rebooking incentives",
        "Loyalty integration",
      ],
      metric: "Return Rate",
      metricValue: "+34%",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-[#2D8B8B]/10 text-[#2D8B8B] border-[#2D8B8B]/20"
          >
            <Compass className="w-3 h-3 mr-1" />
            Complete Lifecycle
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            The Full Guest Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From booking to farewell, and beyond. ORION manages the complete
            guest lifecycle with proactive intelligence at every stage.
          </p>
        </div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journeyStages.map((stage, index) => {
            const Icon = stage.icon;
            const isGold = stage.color === "gold";
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      isGold ? "bg-[#D4A84B]/10" : "bg-[#2D8B8B]/10"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${isGold ? "text-[#D4A84B]" : "text-[#2D8B8B]"}`}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0F172A]">
                    {stage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {stage.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {stage.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                          isGold
                            ? "bg-[#D4A84B]/5 text-[#D4A84B]"
                            : "bg-[#2D8B8B]/5 text-[#2D8B8B]"
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Metric */}
                  <div
                    className={`p-4 rounded-lg ${isGold ? "bg-[#D4A84B]/5" : "bg-[#2D8B8B]/5"}`}
                  >
                    <div className="text-sm text-gray-500 mb-1">
                      {stage.metric}
                    </div>
                    <div
                      className={`text-2xl font-bold ${isGold ? "text-[#D4A84B]" : "text-[#2D8B8B]"}`}
                    >
                      {stage.metricValue}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Journey Connection */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-[#D4A84B]">
              Seamless transitions.
            </span>{" "}
            <span className="font-semibold text-[#2D8B8B]">
              Continuous intelligence.
            </span>{" "}
            <span className="font-semibold text-[#0F172A]">
              Complete guest satisfaction.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

// Eskom sePush Section
function EskomSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-[#D4A84B]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-[#D4A84B]/30 text-[#D4A84B]"
              >
                <Lightning className="w-3 h-3 mr-1" />
                Load Shedding Intelligence
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Never Caught in the Dark
                <br />
                <span className="text-[#D4A84B]">
                  Literally or Figuratively
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Load shedding is a reality of South African life—but it
                doesn&apos;t have to ruin your guests&apos; experience.
                ORION&apos;s{" "}
                <span className="text-[#D4A84B] font-semibold">
                  Eskom sePush integration
                </span>{" "}
                brings real-time power status directly to your manager
                dashboard. Know exactly when outages are scheduled and how
                they&apos;ll affect your property.
              </p>
              <p>
                But here&apos;s where Agentic AI shines: it doesn&apos;t just
                show you the schedule—it proactively warns guests to order food
                before the power goes out, suggests entertainment options during
                outages, and ensures your backup systems are prepared. Your
                guests might not even notice there was load shedding.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Radio className="w-6 h-6 text-[#D4A84B] mb-2" />
                <h4 className="font-semibold text-white">Live Integration</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Real-time Eskom sePush data
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Bell className="w-6 h-6 text-[#2D8B8B] mb-2" />
                <h4 className="font-semibold text-white">Guest Alerts</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Proactive power notifications
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Calendar className="w-6 h-6 text-[#D4A84B] mb-2" />
                <h4 className="font-semibold text-white">Smart Suggestions</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Dining & entertainment tips
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Battery className="w-6 h-6 text-[#2D8B8B] mb-2" />
                <h4 className="font-semibold text-white">Backup Ready</h4>
                <p className="text-xs text-gray-400 mt-1">
                  Generator & UPS monitoring
                </p>
              </div>
            </div>
          </div>

          {/* Widget Preview */}
          <Card className="bg-[#1E293B] border border-white/10 overflow-hidden">
            <CardHeader className="border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A84B]/20 flex items-center justify-center">
                    <Lightning className="w-5 h-5 text-[#D4A84B]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">
                      Eskom Status
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Live power monitoring
                    </CardDescription>
                  </div>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                  Stage 4
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Current Status */}
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <div>
                    <span className="text-sm font-medium text-yellow-500">
                      Load Shedding Active
                    </span>
                    <p className="text-xs text-gray-400">
                      Stage 4 • Your area affected
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Next Outage:</span>
                    <p className="text-white font-medium">18:00 - 20:30</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <p className="text-white font-medium">2h 30m</p>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white">
                  AI Recommendations
                </h4>
                <div className="p-3 rounded bg-[#D4A84B]/10 border border-[#D4A84B]/20">
                  <p className="text-sm text-gray-300">
                    <span className="text-[#D4A84B] font-medium">
                      Notify guests:
                    </span>{" "}
                    Recommend ordering dinner by 17:30. Kitchen will operate on
                    backup power during outage.
                  </p>
                </div>
                <div className="p-3 rounded bg-[#2D8B8B]/10 border border-[#2D8B8B]/20">
                  <p className="text-sm text-gray-300">
                    <span className="text-[#2D8B8B] font-medium">
                      Entertainment:
                    </span>{" "}
                    Suggest spa bookings during outage window. Indoor activities
                    available.
                  </p>
                </div>
              </div>

              {/* Schedule Preview */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-white">
                  Today&apos;s Schedule
                </h4>
                <div className="space-y-1">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5 text-sm">
                    <span className="text-gray-400">06:00 - 08:30</span>
                    <Badge className="bg-green-500/20 text-green-500 text-xs">
                      Passed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-yellow-500/10 text-sm">
                    <span className="text-gray-400">18:00 - 20:30</span>
                    <Badge className="bg-yellow-500/20 text-yellow-500 text-xs">
                      Upcoming
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const products = [
    {
      icon: Wrench,
      title: "Maintenance Ticketing",
      description:
        "Transform issue resolution with AI Vision photo capability. Guests snap a photo, AI analyzes and categorizes, GHOST LAN routes to the nearest qualified staff. Track downtime minutes, severity escalation, and fix velocity. Calculate exact revenue protected with every resolved ticket. This isn't just maintenance—it's revenue insurance.",
      features: [
        "AI Vision photo analysis",
        "GHOST LAN routing",
        "Revenue protection metrics",
        "Downtime tracking",
      ],
      metric: "Room Downtime Recovery Rate",
      featured: false,
    },
    {
      icon: Sparkles,
      title: "Housekeeping Status",
      description:
        "Room turnover time directly impacts revenue. Track every minute between checkout and room-ready status with GHOST LAN intelligent routing. Calculate sellable hours recovered across your property. Faster turnover means higher occupancy potential and reduced guest wait times.",
      features: [
        "GHOST LAN routing",
        "Turnover velocity tracking",
        "Sellable hours recovery",
        "Staff performance metrics",
      ],
      metric: "Turnover Velocity Index",
      featured: false,
    },
    {
      icon: Users,
      title: "Guest Onboarding",
      description:
        "Pre-stay journey optimization that captures purpose of stay, interest signals, and special occasions. Trigger personalized upsell recommendations at maximum receptivity. This isn't check-in paperwork—it's revenue expansion disguised as hospitality.",
      features: [
        "Pre-stay capture",
        "Smart upsell triggers",
        "Occasion detection",
        "Conversion tracking",
      ],
      metric: "Onboarding Conversion Rate",
      featured: false,
    },
    {
      icon: Gauge,
      title: "RACK RATE Control",
      description:
        "The Revenue Alignment Control Key is your strategic command center. Choose your optimization strategy—from pure guest satisfaction to maximum revenue extraction. Revolutionary slider control with AI recommendations based on live performance data.",
      features: [
        "Strategy slider",
        "AI recommendations",
        "Projected outcomes",
        "Manual override",
      ],
      metric: "Revenue Alignment Score",
      featured: true,
    },
    {
      icon: Brain,
      title: "AI Assist Layer",
      description:
        "Agentic, proactive AI that anticipates needs before they become problems. Not just responding—predicting and preventing. Analyzes patterns across maintenance response times, housekeeping velocity, and guest engagement to surface opportunities and risks.",
      features: [
        "Predictive alerts",
        "Proactive actions",
        "Performance insights",
        "Load shedding awareness",
      ],
      metric: "Intelligence Score",
      featured: false,
    },
    {
      icon: Languages,
      title: "African Language Support",
      description:
        "Speaking your guests' language—literally. Support for 8+ indigenous African languages including Zulu, Xhosa, Afrikaans, Sotho, Tswana, and more. Enable authentic communication that delivers the warmth South African hospitality is famous for.",
      features: [
        "8+ African languages",
        "Native greetings",
        "Cultural context",
        "Staff translation tools",
      ],
      metric: "Language Coverage",
      featured: false,
    },
    {
      icon: Lightning,
      title: "Eskom sePush Integration",
      description:
        "Live load shedding intelligence on manager dashboard. Proactive AI warns guests to order food before outages, suggests entertainment options during load shedding. Never caught in the dark—literally or figuratively.",
      features: [
        "Live Eskom data",
        "Guest alerts",
        "Smart suggestions",
        "Backup monitoring",
      ],
      metric: "Outage Preparedness",
      featured: false,
    },
    {
      icon: Wifi,
      title: "GHOST LAN Routing",
      description:
        "Revolutionary routing system using phone MAC and IP addresses to route tickets directly to the nearest staff member. Bypass the middleman—direct staff assignment. The right person, in the right place, at the right time.",
      features: [
        "Direct routing",
        "Location awareness",
        "Sub-second assignment",
        "No middleman",
      ],
      metric: "Response Velocity",
      featured: false,
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-[#2D8B8B]/10 text-[#2D8B8B] border-[#2D8B8B]/20"
          >
            Product Suite
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            ORION HOTEL SUITE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A complete revenue intelligence platform with 8 powerful modules
            designed specifically for African hospitality. Agentic AI. Local
            languages. Real impact.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;

            if (product.featured) {
              return (
                <Card
                  key={index}
                  className="lg:col-span-2 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white border-0 hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#D4A84B]/20">
                          <Icon className="w-8 h-8 text-[#D4A84B]" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {product.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className="border-[#D4A84B]/30 text-[#D4A84B]"
                          >
                            {product.metric}
                          </Badge>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {product.features.map((feature, fIndex) => (
                            <div
                              key={fIndex}
                              className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#D4A84B]" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            }

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#2D8B8B]/10 flex-shrink-0">
                        <Icon className="w-7 h-7 text-[#2D8B8B]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                          {product.title}
                        </h3>
                        <Badge variant="secondary">{product.metric}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#2D8B8B]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Dashboard Preview Section
function DashboardPreviewSection() {
  const [sliderValue, setSliderValue] = useState([35]);
  const [mode, setMode] = useState<"ai" | "manual">("ai");

  const getStrategyLabel = () => {
    if (sliderValue[0] <= 30)
      return {
        label: "Guest-First Mode",
        desc: "Maximum satisfaction with sustainable growth",
      };
    if (sliderValue[0] <= 60)
      return {
        label: "Balanced Growth",
        desc: "Experience-optimized revenue strategy",
      };
    return {
      label: "Revenue Maximizer",
      desc: "Aggressive upselling with premium focus",
    };
  };

  const strategy = getStrategyLabel();

  return (
    <section
      id="dashboard"
      className="py-24 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 168, 75, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(45, 139, 139, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-[#D4A84B]/30 text-[#D4A84B]"
          >
            Manager Dashboard
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Command Center for
            <br />
            <span className="gradient-text">Modern Hospitality</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A dark-themed, intuitive dashboard that puts everything at your
            fingertips. Live analytics, proactive AI notifications, and Eskom
            status—all in one place.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-[#1E293B] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Dashboard Header */}
          <div className="bg-[#0F172A] px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="ORION" className="w-8 h-8 rounded" />
              <div>
                <h3 className="text-white font-semibold">
                  ORION Manager Dashboard
                </h3>
                <p className="text-xs text-gray-400">
                  The Grand Hotel • Durban
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                <Lightning className="w-3 h-3 mr-1" />
                Stage 4
              </Badge>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                <span>14:32</span>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Analytics */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#0F172A] border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">
                      Today&apos;s Revenue
                    </span>
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-white">R 47,850</div>
                  <div className="text-xs text-green-500 mt-1">
                    +12% vs yesterday
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0F172A] border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Occupancy</span>
                    <Building2 className="w-4 h-4 text-[#2D8B8B]" />
                  </div>
                  <div className="text-2xl font-bold text-white">87%</div>
                  <div className="text-xs text-[#2D8B8B] mt-1">
                    +5% this week
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0F172A] border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Open Tickets</span>
                    <Wrench className="w-4 h-4 text-[#D4A84B]" />
                  </div>
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-xs text-[#D4A84B] mt-1">3 urgent</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0F172A] border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Guest Score</span>
                    <Star className="w-4 h-4 text-[#D4A84B]" />
                  </div>
                  <div className="text-2xl font-bold text-white">4.8</div>
                  <div className="text-xs text-[#D4A84B] mt-1">Excellent</div>
                </div>
              </div>

              {/* RACK RATE Control */}
              <Card className="bg-[#0F172A] border border-white/10">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-[#D4A84B]" />
                      <CardTitle className="text-base text-white">
                        RACK RATE Control
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={mode === "ai" ? "default" : "outline"}
                        className={`cursor-pointer text-xs ${mode === "ai" ? "bg-[#2D8B8B] hover:bg-[#2D8B8B]/80" : "border-gray-600 text-gray-400"}`}
                        onClick={() => setMode("ai")}
                      >
                        AI
                      </Badge>
                      <Badge
                        variant={mode === "manual" ? "default" : "outline"}
                        className={`cursor-pointer text-xs ${mode === "manual" ? "bg-[#D4A84B] hover:bg-[#D4A84B]/80 text-[#0F172A]" : "border-gray-600 text-gray-400"}`}
                        onClick={() => setMode("manual")}
                      >
                        Manual
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-3 rounded-lg bg-gradient-to-r from-[#D4A84B]/10 to-[#2D8B8B]/10">
                    <div className="text-xs text-gray-400">
                      Current Strategy
                    </div>
                    <div className="text-lg font-bold text-white">
                      {strategy.label}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Revenue</span>
                      <span>Satisfaction</span>
                    </div>
                    <div className="relative">
                      <div
                        className="absolute inset-0 h-2 rounded-full top-1/2 -translate-y-1/2"
                        style={{
                          background:
                            "linear-gradient(90deg, #D4A84B 0%, #2D8B8B 100%)",
                        }}
                      />
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                        className="relative z-10"
                        disabled={mode === "ai"}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Alerts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0F172A] border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4 text-[#D4A84B]" />
                    <span className="text-sm font-medium text-white">
                      Maintenance
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Room 312 - AC Issue</span>
                      <Badge className="bg-red-500/20 text-red-500 text-xs">
                        Urgent
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">
                        Room 405 - Leaky Faucet
                      </span>
                      <Badge className="bg-yellow-500/20 text-yellow-500 text-xs">
                        Medium
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#0F172A] border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-[#2D8B8B]" />
                    <span className="text-sm font-medium text-white">
                      Housekeeping
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Rooms Ready: 34/42</span>
                      <span className="text-[#2D8B8B]">81%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">
                        Avg. Turnover: 28 min
                      </span>
                      <span className="text-green-500">-5 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - AI & Weather */}
            <div className="space-y-6">
              {/* AI Notifications */}
              <Card className="bg-[#0F172A] border border-white/10">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-[#D4A84B]" />
                    <CardTitle className="text-base text-white">
                      AI Notifications
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-[#D4A84B]/10 border border-[#D4A84B]/20">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="w-3 h-3 text-[#D4A84B]" />
                      <span className="text-xs font-medium text-[#D4A84B]">
                        Proactive Alert
                      </span>
                    </div>
                    <p className="text-xs text-gray-300">
                      Load shedding in 2h 30m. Kitchen notified to prioritize
                      Room 215 dinner order.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#2D8B8B]/10 border border-[#2D8B8B]/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-3 h-3 text-[#2D8B8B]" />
                      <span className="text-xs font-medium text-[#2D8B8B]">
                        Opportunity
                      </span>
                    </div>
                    <p className="text-xs text-gray-300">
                      Suite 402 anniversary tomorrow. Champagne suggestion sent
                      to F&B.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Weather Widget */}
              <div className="p-4 rounded-xl bg-[#0F172A] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-[#2D8B8B]" />
                    <span className="text-sm font-medium text-white">
                      Weather
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">Durban</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">24°C</div>
                  <div className="text-sm text-gray-400">Partly Cloudy</div>
                  <div className="flex justify-center gap-4 mt-4 text-xs text-gray-400">
                    <div>
                      <div className="text-[#2D8B8B]">High</div>
                      <div>27°</div>
                    </div>
                    <div>
                      <div className="text-[#D4A84B]">Low</div>
                      <div>18°</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eskom Status */}
              <div className="p-4 rounded-xl bg-[#0F172A] border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Lightning className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-white">
                      Eskom Status
                    </span>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-500 text-xs">
                    Stage 4
                  </Badge>
                </div>
                <div className="text-xs text-gray-400">
                  <div className="flex justify-between mb-1">
                    <span>Next Outage:</span>
                    <span className="text-white">18:00 - 20:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-white">2h 30m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 bg-[#D4A84B]/10 text-[#D4A84B] border-[#D4A84B]/20"
              >
                Our Story
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
                Built in Africa.
                <br />
                <span className="gradient-text">Engineered for Impact.</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                ORION DEV CORE was founded by Graham Schubach with a vision that
                extends far beyond software. Based in Durban, South Africa, we
                represent a new generation of African technology companies
                building world-class solutions for global markets. Our
                founder&apos;s philosophy is simple yet profound: technology
                should help people enjoy life and family more, not add
                complexity to it.
              </p>
              <p>
                The hospitality industry has long suffered from technology that
                promises transformation but delivers complexity. We took a
                different approach. ORION HOTEL SUITE was designed from the
                ground up to deliver measurable, provable revenue impact—5-17%
                increases that you can demonstrate to stakeholders with
                mathematical certainty.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <Globe className="w-6 h-6 text-[#D4A84B] mb-2" />
                <h4 className="font-semibold text-[#0F172A]">
                  African Innovation
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Proudly built in South Africa
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <Target className="w-6 h-6 text-[#2D8B8B] mb-2" />
                <h4 className="font-semibold text-[#0F172A]">
                  Math-Based Results
                </h4>
                <p className="text-sm text-gray-500 mt-1">Provable impact</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <Heart className="w-6 h-6 text-[#D4A84B] mb-2" />
                <h4 className="font-semibold text-[#0F172A]">Human-Centered</h4>
                <p className="text-sm text-gray-500 mt-1">
                  AI that uplifts humanity
                </p>
              </div>
            </div>
          </div>

          {/* Founder Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A84B]/20 to-[#2D8B8B]/20 rounded-3xl transform rotate-3" />
            <Card className="relative bg-white border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                {/* Profile Header */}
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#D4A84B] to-[#2D8B8B] flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">GS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Graham Schubach
                  </h3>
                  <p className="text-[#D4A84B] font-medium mt-1">
                    - Founder & Visionary
                  </p>
                </div>

                {/* Profile Content */}
                <div className="p-8 space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2D8B8B] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0F172A]">
                        Durban, South Africa
                      </div>
                      <div className="text-sm text-gray-500">
                        Building world-class technology from Africa
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-semibold text-[#0F172A]">
                      Founder&apos;s Vision
                    </h4>
                    <blockquote className="text-gray-600 italic border-l-4 border-[#D4A84B] pl-4">
                      &quot;We&apos;re not just building software. We&apos;re
                      creating infrastructure that helps people enjoy life and
                      family more. Every feature we ship should reduce
                      complexity and increase human flourishing.&quot;
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#D4A84B]/10 text-[#D4A84B]"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Vision-First Thinker
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-[#2D8B8B]/10 text-[#2D8B8B]"
                    >
                      <Globe className="w-3 h-3 mr-1" />
                      African Innovation
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    property: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          company: formData.company,
          propertyName: formData.property,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Form error:", data.message);
        alert(`Error: ${data.message || "Failed to submit"}`);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          property: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0F172A] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, rgba(212, 168, 75, 0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-[#D4A84B]/30 text-[#D4A84B]"
              >
                Get Started
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform
                <br />
                <span className="gradient-text">Your Revenue?</span>
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              Join forward-thinking hoteliers experiencing 5-17% measurable
              revenue increases with ORION HOTEL SUITE. Agentic AI, local
              languages, and real impact—built for African hospitality.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#D4A84B]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email Us</div>
                  <div className="text-white font-medium">
                    hello@oriondevcore.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2D8B8B]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#2D8B8B]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-white font-medium">
                    Durban, South Africa
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Company</div>
                  <div className="text-white font-medium">ORION DEV CORE</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#D4A84B]">5-17%</div>
                <div className="text-xs text-gray-500 mt-1">Revenue Lift</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-[#2D8B8B]">Agentic</div>
                <div className="text-xs text-gray-500 mt-1">Proactive AI</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500 mt-1">Provable</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <Card className="bg-[#1E293B] border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  Request a Demo
                </CardTitle>
                <CardDescription className="text-gray-400">
                  See ORION in action with a personalized demonstration
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#2D8B8B]/20 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#2D8B8B]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-400">
                      We&apos;ll be in touch within 24 hours to schedule your
                      demo.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="bg-[#0F172A] border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4A84B]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@hotel.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="bg-[#0F172A] border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4A84B]"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">
                          Company
                        </Label>
                        <Input
                          id="company"
                          placeholder="Hotel Group"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          required
                          className="bg-[#0F172A] border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4A84B]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="property" className="text-gray-300">
                          Property Name
                        </Label>
                        <Input
                          id="property"
                          placeholder="The Grand Hotel"
                          value={formData.property}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              property: e.target.value,
                            })
                          }
                          className="bg-[#0F172A] border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4A84B]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your property and challenges..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={4}
                        className="bg-[#0F172A] border-white/10 text-white placeholder:text-gray-500 focus:border-[#D4A84B] resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#D4A84B] text-[#0F172A] hover:bg-[#E8C97A] font-semibold py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Request Demo"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img
                  src="/logo.png"
                  alt="ORION Dev Core"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight">
                  ORION
                </span>
                <span className="text-[#D4A84B] text-xs font-medium tracking-widest">
                  DEV CORE
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              Agentic AI for African Hospitality. Proactive Intelligence. Local
              Languages. Real Impact. Built in South Africa for the world.
            </p>
            <div className="flex items-center gap-2 text-[#D4A84B] text-sm font-medium">
              <span>IMAGINE.</span>
              <span className="text-[#2D8B8B]">AMPLIFY.</span>
              <span className="text-white">CONNECT.</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#products"
                  className="hover:text-[#D4A84B] transition-colors"
                >
                  Maintenance Ticketing
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-[#D4A84B] transition-colors"
                >
                  Housekeeping Status
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-[#D4A84B] transition-colors"
                >
                  Guest Onboarding
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-[#D4A84B] transition-colors"
                >
                  RACK RATE Control
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-[#D4A84B] transition-colors"
                >
                  GHOST LAN Routing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@oriondevcore.com</li>
              <li>Durban, South Africa</li>
              <li className="pt-2">
                <Button
                  size="sm"
                  className="bg-[#D4A84B] text-[#0F172A] hover:bg-[#E8C97A]"
                >
                  Request Demo
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ORION DEV CORE. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built in Africa. Engineered for Impact.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AgenticAISection />
      <AfricanLanguagesSection />
      <GhostLANSection />
      <AIVisionSection />
      <GuestJourneySection />
      <EskomSection />
      <ProductsSection />
      <DashboardPreviewSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
