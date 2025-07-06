import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Promptify LWMHR</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about the vision behind the tool and meet the developer who created it.
            </p>
          </div>

          {/* Tool Story */}
          <Card className="glass-card mb-12 hover-lift fade-in-up stagger-1">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text">The Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-muted-foreground space-y-4">
              <p>
                Promptify LWMHR was born from a simple observation: most people struggle to get 
                the best results from AI tools, not because the AI isn't capable, but because 
                they don't know how to craft effective prompts.
              </p>
              <p>
                This tool bridges that gap by transforming your raw ideas into expertly crafted 
                prompts that unlock the full potential of any AI model. Whether you're a content 
                creator, researcher, student, or professional, Promptify LWMHR helps you communicate 
                more effectively with AI.
              </p>
            </CardContent>
          </Card>

          {/* Developer Section */}
          <Card className="glass-card hover-lift fade-in-up stagger-2">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text mb-4">Meet the Developer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">Mahedi Hasan Rafsan</h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    An experienced developer and technology enthusiast, proficient in modern web 
                    development and AI integration. His portfolio showcases various innovative 
                    projects that highlight his skill and creativity.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Expertise</h4>
                      <p className="text-muted-foreground">
                        Skilled in both frontend and backend development, with a strong focus on 
                        cutting-edge UI/UX design and performance optimization.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Goal</h4>
                      <p className="text-muted-foreground">
                        To create user-centric, functional, and aesthetically pleasing digital 
                        solutions that solve real-world problems.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="glass-card border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                      asChild
                    >
                      <a 
                        href="https://mahedihasanrafsan.info" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover-lift"
                      >
                        View Full Portfolio
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="border-t border-border/40 pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Built With</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Tailwind CSS', 'AI Integration', 'Modern UI/UX'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-gradient-primary/10 border border-primary/20 rounded-lg text-sm font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;