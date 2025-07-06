import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Examples = () => {
  const examples = [
    {
      category: "Content Creation",
      input: "Write a blog post about healthy eating",
      output: `Create a comprehensive, engaging blog post about healthy eating that provides practical value to readers.

Content Requirements:
- Target audience: Health-conscious adults aged 25-45
- Tone: Informative yet conversational, encouraging but not preachy
- Length: 1,500-2,000 words
- Include actionable tips and practical advice

Structure:
1. Compelling introduction that hooks the reader
2. 5-7 main sections covering different aspects of healthy eating
3. Include specific examples and practical meal ideas
4. Address common challenges and solutions
5. Conclusion with actionable next steps

Key Topics to Cover:
- Benefits of whole foods vs processed foods
- Meal planning and preparation strategies
- Budget-friendly healthy eating tips
- How to read nutrition labels effectively
- Simple swaps for healthier choices

Additional Requirements:
- Include at least 3 scientific facts or statistics
- Add 2-3 personal anecdotes or relatable scenarios
- Optimize for SEO with relevant keywords
- End with a clear call-to-action for readers`,
      color: "bg-blue-500/20 text-blue-300"
    },
    {
      category: "Business Strategy",
      input: "Help me create a marketing plan for my startup",
      output: `Develop a comprehensive marketing strategy for a startup, focusing on practical implementation and measurable results.

Business Context Needed:
- Industry and target market details
- Current stage of business (pre-launch, early stage, growth phase)
- Budget constraints and resources available
- Unique value proposition and competitive advantages

Marketing Strategy Framework:
1. Market Analysis
   - Target audience demographics and psychographics
   - Competitor analysis and positioning
   - Market size and growth potential

2. Brand Positioning
   - Brand identity and messaging
   - Value proposition articulation
   - Differentiation strategy

3. Channel Strategy
   - Digital marketing channels (social media, content, email, PPC)
   - Traditional marketing opportunities
   - Partnership and collaboration potential

4. Content Strategy
   - Content themes and topics
   - Content calendar and frequency
   - Platform-specific content adaptation

5. Budget Allocation
   - Channel-wise budget distribution
   - Expected ROI for each channel
   - Testing and optimization budget

6. Implementation Timeline
   - 90-day quick wins
   - 6-month strategic initiatives
   - 12-month long-term goals

7. Success Metrics
   - KPIs for each marketing channel
   - Tracking and measurement tools
   - Regular review and optimization schedule

Please provide specific, actionable recommendations with clear next steps and implementation guidance.`,
      color: "bg-green-500/20 text-green-300"
    },
    {
      category: "Learning & Education",
      input: "Explain quantum physics in simple terms",
      output: `Explain quantum physics in an accessible, engaging way that makes complex concepts understandable to a general audience.

Teaching Approach:
- Use analogies and everyday examples to illustrate abstract concepts
- Build understanding progressively from basic to more complex ideas
- Avoid jargon; define any necessary technical terms clearly
- Include visual descriptions where helpful

Key Concepts to Cover:
1. What is Quantum Physics?
   - Define quantum physics and its scope
   - Explain why it matters in our daily lives
   - Historical context and key discoveries

2. Fundamental Principles
   - Wave-particle duality (with simple analogies)
   - Uncertainty principle (Heisenberg's principle explained simply)
   - Quantum superposition (Schrödinger's cat analogy)
   - Quantum entanglement ("spooky action at a distance")

3. Real-World Applications
   - Technologies that use quantum principles
   - Medical applications (MRI, PET scans)
   - Computing and communication advances
   - Future possibilities and ongoing research

4. Common Misconceptions
   - Address popular myths about quantum physics
   - Clarify what quantum physics can and cannot do
   - Separate science from science fiction

Structure Requirements:
- Start with a compelling hook that shows relevance
- Use storytelling elements to maintain engagement
- Include thought experiments and mental models
- End with practical implications and future outlook
- Make it conversational and encourage curiosity`,
      color: "bg-purple-500/20 text-purple-300"
    },
    {
      category: "Creative Writing",
      input: "Write a short story about time travel",
      output: `Create an engaging short story about time travel that explores both the adventure and consequences of temporal manipulation.

Story Requirements:
- Length: 2,000-3,000 words
- Genre: Science fiction with emotional depth
- Perspective: Third person limited or first person
- Tone: Thought-provoking with elements of wonder and caution

Character Development:
- Create a relatable protagonist with clear motivations
- Establish what drives them to attempt time travel
- Show character growth through the experience
- Include supporting characters that feel authentic

Plot Structure:
1. Opening: Establish the ordinary world and inciting incident
2. Development: The time travel event and initial consequences
3. Complications: Unexpected results and moral dilemmas
4. Climax: Major conflict or realization about time travel
5. Resolution: How the experience changes the protagonist

Time Travel Elements:
- Establish clear rules for how time travel works in your story
- Address the grandfather paradox or other temporal complications
- Show both positive and negative impacts of changing the past
- Consider ripple effects and unintended consequences

Themes to Explore:
- The weight of choices and their consequences
- Whether changing the past is morally justified
- The relationship between destiny and free will
- How our past shapes who we become

Writing Style:
- Use vivid, sensory details to bring scenes to life
- Balance action with introspection
- Create authentic dialogue that reveals character
- Build tension and maintain reader engagement throughout

End Goal: A story that entertains while making readers think about time, choice, and consequence.`,
      color: "bg-orange-500/20 text-orange-300"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Prompt <span className="gradient-text">Examples</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Promptify LWMHR transforms simple ideas into detailed, 
              professional prompts that get exceptional results.
            </p>
          </div>

          {/* Examples Grid */}
          <div className="space-y-12">
            {examples.map((example, index) => (
              <Card key={index} className="glass-card hover-lift fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className={`${example.color} border-0 text-sm px-4 py-2`}>
                      {example.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">Before & After Transformation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Input */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-muted-foreground">Original Input:</h4>
                    <div className="bg-muted/10 rounded-lg p-4 border border-border/20">
                      <p className="text-foreground/80 italic">"{example.input}"</p>
                    </div>
                  </div>

                  {/* Output */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Optimized Prompt:</h4>
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90 font-mono">
                        {example.output}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 fade-in-up">
            <Card className="glass-card p-12 hover-lift">
              <h2 className="text-3xl font-bold mb-4 gradient-text">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start creating professional-quality prompts that get better results.
              </p>
              <button className="bg-gradient-primary hover:glow-effect transition-all duration-300 text-lg px-12 py-4 rounded-lg font-semibold hover-lift text-primary-foreground">
                Try Promptify Now
              </button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;