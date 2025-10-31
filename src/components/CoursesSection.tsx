import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, Users } from "lucide-react";

const CoursesSection = () => {
  const universities = [
    {
      name: "Harvard University",
      courses: [
        { title: "CS50: Introduction to Computer Science",
           duration: "12 weeks", 
           students: "3M+" ,
          link:"https://pll.harvard.edu/catalog?price%5B1%5D=1&max_price=&start_date=&keywords=&url="
    },
       { title: "Data Science Professional Certificate", 
        duration: "8 months",
         students: "500K+" ,
        link:"https://pll.harvard.edu/catalog?price%5B2%5D=2&max_price=&start_date=&keywords=&url="
       }
     ],
      logo: "https://images.unsplash.com/photo-1562774053-701939374585",
    },
    {
      name: "MIT OpenCourseWare",
      courses: [
        { title: "Introduction to Algorithms", 
          duration: "16 weeks", 
          students: "2M+" ,
           link:""
        },
        { title: "Artificial Intelligence", 
          duration: "14 weeks",
           students: "1.5M+",
          link:""
         },
      ],
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
     
    },
    {
      name: "Stanford Online",
      courses: [
        { title: "Machine Learning Specialization", duration: "11 weeks", students: "4M+",link:"https://www.stanford.edu/" },
        { title: "Introduction to Statistics", duration: "10 weeks", students: "800K+", link:"" },
      ],
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    },
  ];

  const companies = [
    { name: "Google",
       icon: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd", 
       courses: 45 ,
      link:"https://grow.google/intl/en_in/certificates/"
    },
    { name: "Microsoft", icon: "https://images.unsplash.com/photo-1633409361618-c73427e4e206", 
      courses: 38,
      link:"https://learn.microsoft.com/en-us/training/"
    },
    { name: "IBM", icon: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", 
      courses: 52,
      link:"https://www.ibm.com/training/search?cost=free"
    },
    { name: "Amazon", icon: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2", 
      courses: 29,
      link:"https://aws.amazon.com/training/"
  },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* University Courses */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Learn from <span className="gradient-text">Top Universities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access free courses from Harvard, MIT, Stanford, and more
            </p>
          </div>

          <div className="space-y-8">
            {universities.map((university, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-hover transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-glow">
                      <img src={university.logo} alt={university.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{university.name}</h3>
                      <p className="text-sm text-muted-foreground">{university.courses.length} Featured Courses</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {university.courses.map((course, courseIdx) => (
                      <div key={courseIdx} className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <h4 className="font-semibold mb-3">{course.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{course.students}</span>
                          </div>
                        </div>
                        <Button asChild
                        size="sm" variant="outline" className="w-full">
                          <a
                   href={course.link}
                   target="_blank"
                   rel="noopener noreferrer"
                     >
                       start leraning
                   </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Courses */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Industry Leaders</span> Teach You
            </h3>
            <p className="text-lg text-muted-foreground">
              Get certified by world's leading technology companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, idx) => (
              <Card key={idx} className="group hover:shadow-hover transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-glow group-hover:scale-110 transition-transform">
                    <img src={company.icon} alt={company.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{company.name}</h4>
                  <Badge className="gradient-bg">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    {company.courses} courses
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
