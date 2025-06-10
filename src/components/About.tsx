
import { Card, CardContent } from '@/components/ui/card';
import { Award, Clock, Users, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      label: "Talented Models & Actors"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "50+",
      label: "Industry Awards"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      number: "15+",
      label: "Years of Excellence"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      number: "25+",
      label: "Countries Worldwide"
    }
  ];

  return (
    <section id="about" className="py-20 bg-talent-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title">About Our Agency</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, we've been at the forefront of talent management, 
              discovering and nurturing exceptional individuals who shape the entertainment 
              and fashion industries.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence has established us as a premier agency, 
              representing diverse talent across fashion, film, television, and commercial sectors.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="talent-card">
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg"
                  alt="Agency team"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
