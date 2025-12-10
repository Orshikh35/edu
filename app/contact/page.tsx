import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container px-4 md:px-6 py-12 md:py-20">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-4xl font-bold tracking-tighter mb-6">Get in Touch</h1>
                    <p className="text-muted-foreground mb-8">
                        Have questions about our courses or need help with your account? Our team is here to assist you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p className="text-sm text-muted-foreground">support@eduplatform.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-medium">Phone</h3>
                                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-medium">Office</h3>
                                <p className="text-sm text-muted-foreground">123 Education Lane, Tech City, TC 90210</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border rounded-xl p-6 shadow-sm">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                <Input id="last-name" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="How can we help you?"
                            />
                        </div>
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
