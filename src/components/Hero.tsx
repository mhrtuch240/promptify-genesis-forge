import { Button } from '@/components/ui/button';
import PromptGenerator from './PromptGenerator';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in-up">
              Transform Your Ideas Into
              <span className="gradient-text block mt-2">Perfect AI Prompts</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up stagger-1 max-w-3xl mx-auto">
              Promptify LWMHR uses advanced AI to transform your raw ideas into refined, 
              detailed, and optimized prompts that get better results from any AI model.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-2">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:glow-effect transition-all duration-300 text-lg px-8 py-4 hover-lift"
              >
                Start Creating Prompts
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 hover-lift glass-card border-primary/20 hover:border-primary/40"
              >
                See Examples
              </Button>
            </div>
          </div>

          {/* Interactive Prompt Generator */}
          <div className="fade-in-up stagger-3">
            <PromptGenerator />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-up stagger-4">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10,000+</div>
              <div className="text-muted-foreground">Prompts Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">95%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5,000+</div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;