import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Heart, Users, Code, Lightbulb, Shield, HandshakeIcon, TrendingUp, Database, Palette, Briefcase, TrendingUpIcon } from 'lucide-react';

const AboutUs = () => {
  // NexMotion Technologies Core Team
  const nexmotionTeam = [
    { name: "Casious Mookamedi", role: "Founder & CEO", icon: Briefcase },
    { name: "Bokang Kgabale", role: "Backend Lead", icon: Database },
    { name: "Thabang Mokotedi", role: "UI/UX & Frontend Lead", icon: Palette },
    { name: "Amanda Soko", role: "Head of Marketing & Business Development", icon: TrendingUpIcon }
  ];

  // External Pampiri Development Team
  const pampiriDevelopers = [
    { name: "Sifiso Ntuli", role: "Backend Developer", icon: Database },
    { name: "Tshepo Motebele", role: "Backend Developer", icon: Database },
    { name: "Portia Wayesa", role: "Frontend Developer", icon: Code },
    { name: "Rethabile Motlatsi", role: "Frontend Developer", icon: Code }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver high-quality work with attention to detail and results that speak for themselves."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead by embracing creativity and new technologies."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We work with honesty, transparency, and strong ethics."
    },
    {
      icon: HandshakeIcon,
      title: "Collaboration",
      description: "We grow through teamwork — with our clients and our team."
    },
    {
      icon: Heart,
      title: "Customer-Centricity",
      description: "We listen, understand, and build around client needs."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "We keep learning to stay better, faster, and smarter."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Pampiri
          </Link>

          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Building the future of digital transformation in Africa
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* About NexMotion Technologies */}
          <section className="bg-card border border-border rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">About NexMotion Technologies</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At NexMotion Tech, we aim to be the leading force in digital transformation by delivering customized software solutions,
              exceptional website designs, robust applications, and innovative hardware engineering. Our commitment to excellence,
              innovation, and customer-centricity drives us to exceed client expectations and empower organizations worldwide through
              cutting-edge technology and unparalleled customer service.
            </p>

            <div className="mt-6 bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-muted-foreground text-center italic">
                "Innovation isn't just about technology — it's about creating meaningful change that moves businesses forward."
              </p>
            </div>
          </section>

          {/* Vision */}
          <section className="bg-card border border-border rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At NexMotion, our vision is to become a leading force in digital transformation across Africa, empowering businesses
              through smart automation, seamless systems integration, and purposeful design. We envision a future where small and
              large enterprises alike thrive using intelligent, accessible, and scalable tech solutions — built to solve real-world
              problems and inspire sustainable growth. We are driven by the belief that innovation isn't just about technology — it's
              about creating meaningful change that moves businesses forward.
            </p>
          </section>

          {/* Mission */}
          <section className="bg-card border border-border rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to develop and deliver high-impact software systems, automation tools, and integrated digital solutions
              that help businesses run better, faster, and smarter. We aim to simplify operations, enhance customer experiences, and
              reduce manual effort through tailored platforms — whether it's automating admin tasks, integrating financial workflows,
              or elevating a brand's digital presence through web and graphic design. At NexMotion, we build more than just products —
              we build partnerships that grow with our clients.
            </p>
          </section>

          {/* Values Grid */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at NexMotion Technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* NexMotion Technologies Core Team */}
          <section className="bg-card border border-border rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">NexMotion Technologies Team</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Meet the core team behind NexMotion Technologies — the visionaries and technical leaders driving innovation
              and delivering exceptional digital solutions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nexmotionTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <member.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pampiri Development Team */}
          <section className="bg-card border border-border rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground">Pampiri Development Team</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Pampiri is built by a talented team of external developers collaborating with NexMotion Technologies
              to deliver a world-class receipt management solution.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pampiriDevelopers.map((member, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-md transition-all duration-200"
                >
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <member.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-gradient-hero text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in building the future of digital transformation. Let's create something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
