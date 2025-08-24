import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Cog, 
  Rocket, 
  RotateCcw, 
  Shield, 
  Users, 
  GraduationCap, 
  TreePine 
} from "lucide-react";

const principles = [
  {
    id: 1,
    title: "Identify Specific Challenges",
    description: "Target real-world problems with measurable impact",
    icon: Brain,
    areas: [
      "Healthcare: Disease diagnosis, outcome prediction, personalized treatment",
      "Accessibility: Enhanced communication for people with disabilities, improved physical access", 
      "Disaster Response: Disaster prediction, evacuation optimization, resource management",
      "Public Welfare: Poverty reduction, educational improvement, public safety enhancement"
    ]
  },
  {
    id: 2,
    title: "Gather and Analyze Data",
    description: "Ensure high-quality, ethical data collection and analysis",
    icon: Database,
    areas: [
      "Collect high-quality data from reputable sources (hospitals, agencies, NGOs)",
      "Ensure privacy, security, and regulatory compliance",
      "Apply data analytics to reveal trends, gaps, and opportunities"
    ]
  },
  {
    id: 3,
    title: "Develop AI Models",
    description: "Build robust, validated AI solutions",
    icon: Cog,
    areas: [
      "Select suitable AI methods (ML, DL, NLP, etc.)",
      "Train models on historical and current data",
      "Validate with real-world cases to ensure accuracy and reliability"
    ]
  },
  {
    id: 4,
    title: "Implement Solutions",
    description: "Integrate AI into operational systems effectively",
    icon: Rocket,
    areas: [
      "Integrate AI into operational systems (EHRs, management platforms)",
      "Create intuitive interfaces for key stakeholders",
      "Design for scalability and adaptability"
    ]
  },
  {
    id: 5,
    title: "Evaluate and Iterate",
    description: "Continuously improve through monitoring and feedback",
    icon: RotateCcw,
    areas: [
      "Continuously monitor solution performance",
      "Collect feedback from real users and stakeholders",
      "Refine models and approaches based on data and feedback"
    ]
  },
  {
    id: 6,
    title: "Ethical Considerations and Governance",
    description: "Maintain transparency, accountability, and fairness",
    icon: Shield,
    areas: [
      "Proactively address bias, transparency, and accountability",
      "Establish clear governance and oversight mechanisms",
      "Ensure ongoing legal and regulatory compliance"
    ]
  },
  {
    id: 7,
    title: "Collaboration and Partnerships",
    description: "Engage experts and communities in the development process",
    icon: Users,
    areas: [
      "Engage with domain experts (doctors, planners)",
      "Build alliances with supportive organizations",
      "Involve affected communities in the design and feedback process"
    ]
  },
  {
    id: 8,
    title: "Education and Training",
    description: "Promote understanding and digital literacy",
    icon: GraduationCap,
    areas: [
      "Train end-users on AI tools and systems",
      "Inform the public about AI's benefits, risks, and limitations",
      "Promote digital literacy and accessibility"
    ]
  },
  {
    id: 9,
    title: "Sustainability and Long-term Impact",
    description: "Plan for lasting positive societal outcomes",
    icon: TreePine,
    areas: [
      "Plan for ongoing maintenance and evolution of AI solutions",
      "Regularly assess societal impact and alignment with goals",
      "Adjust strategy for continuous, positive, and sustainable outcomes"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            background: 'var(--hero-gradient)',
            filter: 'blur(100px)'
          }}
        />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Human-Centric AI Framework
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Building AI Solutions for Humanity
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A comprehensive 9-principle framework for developing ethical, impactful, and sustainable AI solutions that serve real human needs.
            </p>
          </div>
        </div>
      </header>

      {/* Principles Grid */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle) => {
            const IconComponent = principle.icon;
            return (
              <Card 
                key={principle.id} 
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-border/50 hover:border-primary/20"
                style={{ 
                  transition: 'var(--transition-smooth)',
                  boxShadow: 'var(--shadow-elegant)'
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono">
                      {principle.id.toString().padStart(2, '0')}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold leading-tight">
                    {principle.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {principle.areas.map((area, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              Human-Centric AI Framework • Building technology that serves humanity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
