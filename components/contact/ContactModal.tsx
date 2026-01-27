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
import { Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  children: React.ReactNode;
}

export default function ContactModal({ children }: ContactModalProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

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
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Choose a method to contact me directly.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4">
          {contactOptions.map((option) => (
            <button
              key={option.label}
              onClick={option.action}
              className={cn(
                "group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300",
                "border-border bg-background hover:shadow-md",
                option.colorClass,
              )}
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border bg-background transition-colors group-hover:scale-110",
                  option.iconClass,
                )}
              >
                <option.icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold">{option.label}</span>
                <span className="text-muted-foreground text-sm">
                  {option.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
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
