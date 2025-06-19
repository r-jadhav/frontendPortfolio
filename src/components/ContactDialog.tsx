
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, MapPin, MessageSquare } from 'lucide-react';

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    query: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}

Query:
${formData.query}
      `);
      
      const mailtoLink = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast({
        title: "Success!",
        description: "Your email client should open with the pre-filled message. Please send it to complete your inquiry.",
      });

      // Reset form and close dialog
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        query: ''
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-bold">Let's Talk</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
              <User size={16} />
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300 flex items-center gap-2">
              <Phone size={16} />
              Phone *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
              <Mail size={16} />
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-gray-300 flex items-center gap-2">
              <MapPin size={16} />
              City *
            </Label>
            <Input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Your city"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="query" className="text-gray-300 flex items-center gap-2">
              <MessageSquare size={16} />
              Query *
            </Label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Tell us about your project or inquiry..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
