import {  
  Brain, 
  MessageSquare, 
  BookOpen, 
  Map, 
  FileText, 
  Briefcase, 
  HelpCircle, 
  Trophy,
  Stars,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { link } from "fs";

const features = [
  {
    icon: FileText,
    title: "Chatdoc",
    description: "it provides the usable notes from any PDF using AI",
    gradient: "from-pink-500 to-rose-500",
    link:"https://chatdoc.com"
  },
  {
    icon: FileText,
    title: "Glasp",
    description: "It summarizes articles, papers, and videos into concise notes",
    gradient: "from-pink-500 to-rose-500",
    link:"https://glasp.co"
  },
   {
    icon: MessageSquare,
    title: "Fireflies",
    description: "It transcribes meetings, interviews, and calls automatically",
    gradient: "from-green-500 to-emerald-500",
    link:"https://fireflies.ai/"
  },
   {
    icon: BookOpen,
    title: "FreeB",
    description: "It provides free access to paid books and study materials",
    gradient: "from-orange-500 to-red-500",
    link:"https://annas-archive.org/"
  },
  {
    icon: Map,
    title: "Roadmap",
    description: "AI guide from courses to career - what to learn, skip, and do",
    gradient: "from-indigo-500 to-purple-500",
    link:"https://scribehow.com"
  },
  {
    icon: Brain,
    title: "Aptitude Sprint",
    description: "5000+ questions in quantitative, verbal, and logical reasoning",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: HelpCircle,
    title: "Scholary",
    description: "It summarizes long PDFs into flash cards for quick learning",
    gradient: "from-teal-500 to-cyan-500",
    link:"https://www.scholarcy.com/"
  },
  {
    icon: Briefcase,
    title: "InternArena",
    description: "Daily verified internships and jobs, beginner-friendly opportunities",
    gradient: "from-yellow-500 to-amber-500",
    link:"https://internshala.com/internships/"
  },
  {
    icon: Trophy,
    title: "HackArena",
    description: "Get all the latest hackathons and tech events details",
    gradient: "from-violet-500 to-purple-500",
    link:"https://www.hackerearth.com/challenges/hackathon/"
  },
   {
    icon: Stars,
    title: "Poe",
    description: "A place where you will get all the diferent  AI Chatbots",
    gradient: "from-violet-500 to-purple-500",
    link:"https://poe.com"
  },
   {
    icon: CheckCircle,
    title: "Wolframalpha",
    description: "It provides step-by-step solutions for math and science problems",
    gradient: "from-violet-500 to-purple-500",
    link:"https://www.wolframalpha.com"
  },
   {
    icon: MessageSquare,
    title: "Student Connect",
    description: "Chat space for students to discuss doubts, exams, and placements",
    gradient: "from-green-500 to-emerald-500",
    link:"https://nex-box.vercel.app"
  },
   
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nine powerful tools designed to accelerate your learning and career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
               <a
                href={feature.link}
               
                   >
              <Card
                key={index}
                className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
