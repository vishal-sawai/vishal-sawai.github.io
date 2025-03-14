import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        'service_a8e3isv', // Replace with your EmailJS service ID
        'template_czb51np', // Replace with your EmailJS template ID
        data,
        'J91Iu2dEwTU4Dwxpe' // Replace with your EmailJS public key
      );
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold code-text mb-2">
            <span className="text-code-purple">&lt;</span>
            <span className="text-code-foreground">Contact</span>
            <span className="text-code-purple">&gt;</span>
          </h2>
          <p className="text-code-foreground/70 max-w-2xl mx-auto">
            Let's work together on your next project
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6 my-auto">
              <Card className="bg-code-background border-code-purple/20">
                <CardHeader>
                  <CardTitle className="code-text flex items-center gap-2">
                    <Mail className="h-5 w-5 text-code-cyan" />
                    <span>Get in Touch</span>
                  </CardTitle>
                  <CardDescription className="text-code-foreground/70">
                    I'm available for freelance projects and full-time positions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-code-pink code-text">Email</h4>
                    <p className="text-code-foreground">vishalsawai17252@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-code-pink code-text ">Based in</h4>
                    <p className="text-code-foreground">Pune, Maharashtra</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-code-background border-code-purple/20">
                <CardHeader className="pb-2">
                  <CardTitle className="code-text flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-code-green" />
                    <span>Let's Connect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-code-foreground mb-4">
                    Feel free to reach out me on any of the following platforms
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Vishal-Sawai" className="text-code-foreground hover:text-code-cyan transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://x.com/vishaldnynasha1" className="text-code-foreground hover:text-code-cyan transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-sawai-5462b9186/" className="text-code-foreground hover:text-code-cyan transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="md:col-span-3 bg-code-background border-code-purple/20">
              <CardHeader>
                <CardTitle className="code-text flex items-center gap-2">
                  <Send className="h-5 w-5 text-code-orange" />
                  <span>Send a Message</span>
                </CardTitle>
                <CardDescription className="text-code-foreground/70">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-sm font-medium code-text text-code-pink">Name</label>
                    <Input {...register("name", { required: "Name is required" })} placeholder="Your name" className="bg-muted border-code-purple/20 focus:border-code-cyan" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message?.toString()}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium code-text text-code-pink">Email</label>
                    <Input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })} placeholder="your.email@example.com" className="bg-muted border-code-purple/20 focus:border-code-cyan" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message?.toString()}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium code-text text-code-pink">Message</label>
                    <Textarea {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message should be at least 10 characters" } })} placeholder="How can I help you?" rows={3} className="bg-muted border-code-purple/20 focus:border-code-cyan resize-none" />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message?.toString()}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-code-purple hover:bg-code-purple/90" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
