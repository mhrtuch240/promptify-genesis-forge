import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get <span className="gradient-text">In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions, feedback, or suggestions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card hover-lift fade-in-up">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="glass-card border-border/40 focus:border-primary/60"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="glass-card border-border/40 focus:border-primary/60"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="glass-card border-border/40 focus:border-primary/60"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="glass-card border-border/40 focus:border-primary/60"
                      placeholder="Tell us more about your question or feedback..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:glow-effect transition-all duration-300 text-lg py-6 hover-lift"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 fade-in-up stagger-1">
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Quick Response</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We typically respond to messages within 24 hours. For urgent matters, 
                    please mention "URGENT" in your subject line.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Feature Requests</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Have an idea for a new feature? We love hearing from users about 
                    how we can make Promptify LWMHR even better.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Technical Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experiencing issues? Include details about your browser, device, 
                    and what you were trying to do when the issue occurred.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Connect with the Developer</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Want to learn more about the technology behind Promptify LWMHR 
                    or discuss potential collaborations?
                  </p>
                  <Button 
                    variant="outline"
                    className="glass-card border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                    asChild
                  >
                    <a 
                      href="https://mahedihasanrafsan.info" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit Developer Portfolio
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;