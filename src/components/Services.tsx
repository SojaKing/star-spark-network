
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Users, Star, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Portfolio Development",
      description: "Professional photoshoots and portfolio creation to showcase your unique talents and versatility."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Management",
      description: "Comprehensive career guidance, contract negotiations, and strategic planning for long-term success."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Brand Building",
      description: "Personal branding and marketing strategies to establish your unique identity in the industry."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Opportunity Placement",
      description: "Exclusive access to premium casting calls, fashion shows, and high-profile commercial projects."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive talent management services designed to elevate your career
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="talent-card text-center group">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
