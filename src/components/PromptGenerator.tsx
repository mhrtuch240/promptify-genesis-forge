import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, Wand2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PromptGenerator = () => {
  const [input, setInput] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({
        title: "Please enter your idea",
        description: "Add some text to generate a prompt from.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock generated prompt based on input
    const mockPrompt = `Create a comprehensive and detailed response about ${input.toLowerCase()}. 

Instructions:
- Provide thorough explanations with examples
- Use clear, professional language
- Include relevant context and background information
- Organize information in a logical, easy-to-follow structure
- Add specific details that enhance understanding
- Consider different perspectives or approaches
- Conclude with actionable insights or recommendations

Additional Context: Focus on delivering value while maintaining accuracy and clarity in your response. Ensure the information is up-to-date and relevant to current best practices.`;

    setGeneratedPrompt(mockPrompt);
    setIsGenerating(false);
    
    toast({
      title: "Prompt Generated!",
      description: "Your optimized prompt is ready to use.",
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      toast({
        title: "Copied to clipboard!",
        description: "Your prompt has been copied and is ready to use.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the text manually.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Input Section */}
      <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Wand2 className="w-6 h-6 text-primary animate-pulse-glow" />
            Enter Your Idea
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Describe your idea, topic, or what you want to create a prompt about. For example: 'I want to write a blog post about sustainable living' or 'Create a marketing strategy for a tech startup'..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-24 text-lg glass-card border-border/40 focus:border-primary/60 transition-all duration-300"
          />
          
          <Button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-gradient-primary hover:glow-effect transition-all duration-300 text-lg py-6 hover-lift"
          >
            {isGenerating ? (
              <>
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                Generating Perfect Prompt...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5 mr-2" />
                Generate Optimized Prompt
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Output Section */}
      {generatedPrompt && (
        <Card className="glass-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover-lift animate-bounce-in">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-2xl">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent animate-pulse-glow" />
                Your Optimized Prompt
              </div>
              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                className="glass-card border-accent/20 hover:border-accent/40 hover:bg-accent/10"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/20 rounded-lg p-6 border border-border/40">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                {generatedPrompt}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PromptGenerator;