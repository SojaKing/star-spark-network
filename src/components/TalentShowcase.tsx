import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Eye } from 'lucide-react';

const TalentShowcase = () => {
  const talents = [
    {
      id: 1,
      name: "Alexandra Chen",
      category: "Fashion Model",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=600&fit=crop&crop=face",
      rating: 4.9,
      views: "2.1M",
      specialties: ["Editorial", "Runway", "Commercial"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      category: "Actor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
      rating: 4.8,
      views: "1.8M",
      specialties: ["Drama", "Action", "Commercial"]
    },
    {
      id: 3,
      name: "Sofia Petrov",
      category: "Fashion Model",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face",
      rating: 4.9,
      views: "2.5M",
      specialties: ["High Fashion", "Beauty", "Luxury"]
    },
    {
      id: 4,
      name: "James Thompson",
      category: "Fitness Model",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
      rating: 4.7,
      views: "1.3M",
      specialties: ["Fitness", "Athletic", "Lifestyle"]
    },
    {
      id: 5,
      name: "Luna Kim",
      category: "Actor",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
      rating: 4.8,
      views: "1.9M",
      specialties: ["Indie", "Drama", "Voice Acting"]
    },
    {
      id: 6,
      name: "Diego Santos",
      category: "Fashion Model",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
      rating: 4.9,
      views: "2.3M",
      specialties: ["Men's Fashion", "Editorial", "Lifestyle"]
    }
  ];

  return (
    <section id="talent" className="py-20 bg-talent-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Talent</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our exceptional roster of models and actors who are making waves in the industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent) => (
            <Card key={talent.id} className="talent-card group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{talent.rating}</span>
                    <Eye className="w-4 h-4 ml-2" />
                    <span className="text-sm">{talent.views}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{talent.name}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {talent.category}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {talent.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentShowcase;
