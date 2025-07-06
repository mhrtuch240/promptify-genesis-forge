import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, Wand2, Sparkles, Copy } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "1. Share Your Idea",
      description: "Simply describe what you want to create, ask about, or accomplish. No technical knowledge required.",
      example: "I want to write a compelling product description for my eco-friendly water bottle"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "2. AI Processing",
      description: "Our advanced AI analyzes your input and applies expert prompt engineering techniques.",
      example: "Adding context, structure, formatting instructions, and optimization parameters"
    },
    {
      icon: <Copy className="w-8 h-8" />,
      title: "3. Get Perfect Prompts",
      description: "Receive a professionally crafted prompt that will get you better results from any AI model.",
      example: "A detailed, structured prompt with clear instructions and context for optimal AI responses"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How <span className="gradient-text">It Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your ideas into expert-level prompts in three simple steps.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="glass-card hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-2xl">
                      <div className="p-3 bg-gradient-primary rounded-lg animate-pulse-glow">
                        {step.icon}
                      </div>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-muted/20 rounded-lg p-4 border border-border/40">
                      <p className="text-sm text-muted-foreground font-medium mb-2">Example:</p>
                      <p className="text-foreground/80 italic">{step.example}</p>
                    </div>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-8">
                    <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-20 fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Why This Process Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Expert Knowledge</h3>
                  <p className="text-muted-foreground">
                    Built on proven prompt engineering principles used by professionals to get 
                    optimal results from AI models.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Universal Compatibility</h3>
                  <p className="text-muted-foreground">
                    Generated prompts work with ChatGPT, Claude, Gemini, and virtually any 
                    AI model or platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Time Saving</h3>
                  <p className="text-muted-foreground">
                    Skip the trial and error. Get optimized prompts instantly instead of 
                    spending time figuring out what works.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Better Results</h3>
                  <p className="text-muted-foreground">
                    Structured prompts with clear instructions lead to more accurate, 
                    relevant, and useful AI responses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;