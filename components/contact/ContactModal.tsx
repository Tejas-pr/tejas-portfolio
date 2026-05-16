"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Mail, MessageCircle, Phone, Calendar } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ctaConfig } from "@/config/CTA";

interface ContactModalProps {
  children: React.ReactNode;
}

export default function ContactModal({ children }: ContactModalProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
  const [isCalOpen, setIsCalOpen] = useState(false);
  const calLink = ctaConfig.calLink;

  useEffect(() => {
    const cal = async () => {
      try {
        const calApi = await getCalApi();
        if (calApi) {
          calApi("on", {
            action: "bookingSuccessful",
            callback: () => {
              setIsCalOpen(false);
            },
          });
        }
      } catch (error) {
        console.error("Failed to initialize Cal API:", error);
      }
    };
    cal();
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Tejas, I came across your portfolio and would like to connect.",
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handlePhone = () => {
    window.location.href = `tel:${contactPhone}`;
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Inquiry from Portfolio");
    const body = encodeURIComponent(
      "Hi Tejas, I’d like to get in touch with you.",
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const contactOptions = [
    {
      label: "WhatsApp",
      icon: MessageCircle,
      action: handleWhatsApp,
      description: "Chat directly on WhatsApp",
      colorClass:
        "hover:border-green-500/50 hover:bg-green-500/5 dark:hover:bg-green-500/10",
      iconClass: "text-green-600 dark:text-green-400",
    },
    {
      label: "Phone Call",
      icon: Phone,
      action: handlePhone,
      description: "Speak via phone call",
      colorClass:
        "hover:border-blue-500/50 hover:bg-blue-500/5 dark:hover:bg-blue-500/10",
      iconClass: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Email",
      icon: Mail,
      action: handleEmail,
      description: "Send an email inquiry",
      colorClass:
        "hover:border-orange-500/50 hover:bg-orange-500/5 dark:hover:bg-orange-500/10",
      iconClass: "text-orange-600 dark:text-orange-400",
    },
    {
      label: "Book a Meeting",
      icon: Calendar,
      action: () => setIsCalOpen(true),
      description: "Schedule via Cal.com",
      colorClass:
        "hover:border-purple-500/50 hover:bg-purple-500/5 dark:hover:bg-purple-500/10",
      iconClass: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <>
      <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[95vw] sm:max-w-4xl p-0 overflow-hidden border-border/50 bg-background/60 backdrop-blur-xl shadow-2xl rounded-xl md:rounded-lg max-h-[95vh] md:max-h-[90vh]">
        <div className="flex flex-col md:flex-row h-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto md:overflow-hidden">
          
          {/* Left Side: Contact Methods */}
          <div className="flex w-full shrink-0 flex-col gap-5 bg-black/5 dark:bg-white/5 p-6 md:w-[40%] md:border-r border-b md:border-b-0 border-border/50 md:p-8 md:overflow-y-auto">
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl font-bold tracking-tight">Let&apos;s Connect</DialogTitle>
              <DialogDescription className="mt-1 text-sm text-muted-foreground md:mt-2">
                Drop me a message directly using one of the options below, or check out my scheduling page!
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-3 mt-2">
              {contactOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={option.action}
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-xl border p-3 text-left transition-all duration-300",
                    "border-border/50 bg-background/40 shadow-sm hover:-translate-y-0.5 hover:shadow-md",
                    option.colorClass,
                  )}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background/60 transition-transform duration-300 group-hover:scale-110",
                      option.iconClass,
                    )}
                  >
                    <option.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold truncate">{option.label}</span>
                    <span className="text-xs text-muted-foreground truncate">
                      {option.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Notion Iframe */}
          <div className="w-full shrink-0 md:w-[60%] h-[500px] md:h-auto md:min-h-[600px] bg-transparent">
            <iframe 
              src="https://big-galette-716.notion.site/ebd//36262e5f423e809e982de05cd9c6ef5c" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen 
              className="h-full w-full rounded-b-xl md:rounded-b-none md:rounded-r-lg"
            />
          </div>

        </div>
      </DialogContent>
    </Dialog>

      {/* Cal.com Dialog */}
      <Dialog open={isCalOpen} onOpenChange={setIsCalOpen}>
        <DialogContent className="max-h-[90vh] max-w-[calc(100vw-2rem)] overflow-hidden sm:max-w-[calc(100vw-4rem)] md:max-w-4xl z-[100]">
          <DialogHeader>
            <DialogTitle>Book a Meeting</DialogTitle>
            <DialogDescription>
              Schedule a time to connect and discuss opportunities
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[calc(90vh-220px)] overflow-y-auto rounded-lg">
            <Cal
              calLink={calLink}
              config={{
                name: "Portfolio Visitor",
                email: "",
                notes: "Booked from portfolio website",
              }}
              className="h-[500px] w-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

interface GetInTouchButtonProps extends React.ComponentProps<typeof Button> {
  text?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function GetInTouchButton({
  text = "Get in touch",
  icon: Icon,
  className,
  ...props
}: GetInTouchButtonProps) {
  return (
    <ContactModal>
      <Button className={className} {...props}>
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {text}
      </Button>
    </ContactModal>
  );
}
