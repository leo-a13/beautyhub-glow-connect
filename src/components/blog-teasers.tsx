import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import ImageWithFallback from "./image-with-fallback";

const blogPosts = [
  {
    title: "Traditional Shea Butter Beauty Secrets from Cameroon",
    excerpt: "Discover how Cameroonian women have used pure, unrefined shea butter for centuries to achieve glowing skin and healthy hair. Learn the traditional preparation methods and modern applications.",
    image: "https://images.unsplash.com/photo-1668814995532-f8ae8fe1bb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBiZWF1dHklMjByaXR1YWwlMjBzaGVhJTIwYnV0dGVyfGVufDF8fHx8MTc1NTcyMTAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Traditional Beauty",
    date: "Jan 18, 2025",
    readTime: "7 min read"
  },
  {
    title: "Mastering the Art of Gele: Cameroon's Elegant Headwrap Styles",
    excerpt: "From simple everyday wraps to elaborate ceremonial styles, explore the rich tradition of gele headwraps in Cameroon and learn step-by-step techniques for different occasions.",
    image: "https://images.unsplash.com/photo-1662792991988-0560b6151a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcm9vbiUyMHRyYWRpdGlvbmFsJTIwZ2VsZSUyMGhlYWR3cmFwfGVufDF8fHx8MTc1NTcyMTAzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Hair Styling",
    date: "Jan 16, 2025",
    readTime: "6 min read"
  },
  {
    title: "Natural Skincare with Palm Oil and African Black Soap",
    excerpt: "Unlock the secrets of Cameroon's traditional skincare using locally sourced palm oil and authentic African black soap. Perfect for all skin types and ages.",
    image: "https://images.unsplash.com/photo-1675935123264-076447e36c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYWZyaWNhbiUyMHNraW5jYXJlJTIwcGFsbSUyMG9pbHxlbnwxfHx8fDE3NTU3MjEwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Natural Skincare",
    date: "Jan 14, 2025",
    readTime: "8 min read"
  },
  {
    title: "Evolution of Braiding Styles in Modern Cameroon",
    excerpt: "From traditional tribal braids to contemporary fusion styles, see how Cameroonian hair braiding has evolved while maintaining its cultural roots and significance.",
    image: "https://images.unsplash.com/photo-1579748506997-0fd0a0f5ab6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBicmFpZGVkJTIwaGFpciUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1NTcyMTAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Hair Culture",
    date: "Jan 12, 2025",
    readTime: "9 min read"
  },
  {
    title: "Cameroon's Rising Makeup Artists and Beauty Influencers",
    excerpt: "Meet the talented makeup artists from Douala and Yaoundé who are setting trends and representing Cameroonian beauty on the global stage.",
    image: "https://images.unsplash.com/photo-1520584098783-ebcfe78f39dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcm9vbiUyMG1ha2V1cCUyMGFydGlzdCUyMG1vZGVybiUyMGJlYXV0eXxlbnwxfHx8fDE3NTU3MjEwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Modern Beauty",
    date: "Jan 10, 2025",
    readTime: "5 min read"
  },
  {
    title: "Coconut Oil Hair Treatments: Cameroon's Natural Hair Care",
    excerpt: "Discover why coconut oil is considered liquid gold for natural hair care in Cameroon. Learn the best application methods and treatment recipes.",
    image: "https://images.unsplash.com/photo-1690228987673-f6e104fa653c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbmF0dXJhbCUyMGhhaXIlMjBjYXJlJTIwY29jb251dCUyMG9pbHxlbnwxfHx8fDE3NTU3MjEwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Natural Hair Care",
    date: "Jan 8, 2025",
    readTime: "6 min read"
  }
];

export default function BlogTeasers() {
  return (
    <section className="py-16 bg-gradient-beauty-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-warmgray-900">
            Cameroon Beauty Tips & Cultural Practices
          </h2>
          <p className="text-warmgray-600 max-w-3xl mx-auto">
            Discover the rich beauty traditions of Cameroon, from ancient natural remedies to modern styling techniques that celebrate our diverse cultural heritage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-white border-purple-100 hover:border-purple-200">
              <div className="relative">
                <ImageWithFallback 
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="gradient-beauty-primary text-white shadow-lg">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-warmgray-500 mb-4 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2 text-purple-300">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mb-3 text-warmgray-900 group-hover:text-purple-600 transition-colors duration-300 font-headline text-xl">
                  {post.title}
                </h3>
                
                <p className="text-warmgray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-purple-600 group-hover:text-pink-600 transition-colors duration-300">
                  <span className="mr-2 font-medium">Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block gradient-beauty-primary rounded-full p-0.5">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors duration-300 font-medium">
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
