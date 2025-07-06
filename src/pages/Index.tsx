import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Promptify LWMHR</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced AI understands context, intent, and optimal prompt structure to deliver 
              results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover-lift fade-in-up stagger-1">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-6 animate-pulse-glow"></div>
              <h3 className="text-2xl font-bold mb-4">Smart Enhancement</h3>
              <p className="text-muted-foreground">
                Automatically enhances your ideas with context, structure, and specific instructions 
                for optimal AI responses.
              </p>
            </div>

            <div className="glass-card p-8 hover-lift fade-in-up stagger-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-6 animate-pulse-glow"></div>
              <h3 className="text-2xl font-bold mb-4">Universal Compatibility</h3>
              <p className="text-muted-foreground">
                Works perfectly with ChatGPT, Claude, Gemini, and any other AI model or platform 
                you prefer to use.
              </p>
            </div>

            <div className="glass-card p-8 hover-lift fade-in-up stagger-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-6 animate-pulse-glow"></div>
              <h3 className="text-2xl font-bold mb-4">Instant Results</h3>
              <p className="text-muted-foreground">
                Generate optimized prompts in seconds, not minutes. Start getting better AI responses 
                immediately.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto glass-card p-12 hover-lift fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Create Better Prompts?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are already getting better results from their AI interactions.
            </p>
            <button className="bg-gradient-primary hover:glow-effect transition-all duration-300 text-lg px-12 py-4 rounded-lg font-semibold hover-lift text-primary-foreground">
              Start Now - It's Free
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;