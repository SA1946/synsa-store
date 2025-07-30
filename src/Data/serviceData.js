// Data for services - easy to add or modify
import {
  Smartphone,
  BatteryCharging,
  HardDrive,
  Wrench,
  ShieldCheck,
  Headphones,
} from "lucide-react";
const services = [
  {
    icon: Smartphone,
    title: "Screen Replacement",
    description:
      "Cracked or unresponsive screen? Our certified technicians provide fast, reliable screen repairs for all major brands.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Replacement",
    description:
      "Extend the life of your device with a professional battery replacement. We use high-quality parts for optimal performance.",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    description:
      "Lost important files? Our experts can help recover data from damaged or corrupted devices with a high success rate.",
  },
  {
    icon: Wrench,
    title: "General Diagnostics",
    description:
      "Not sure what's wrong? We offer a comprehensive diagnostic service to identify and fix any hardware or software issues.",
  },
];

// Data for key features
const features = [
  {
    icon: ShieldCheck,
    title: "1-Year Warranty",
    description:
      "All our repairs are backed by a one-year warranty on parts and labor.",
  },
  {
    icon: Wrench,
    title: "Certified Technicians",
    description:
      "Our team consists of highly skilled and certified professionals.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our round-the-clock customer service.",
  },
];

// Data for FAQs
const faqs = [
  {
    question: "How long does a typical repair take?",
    answer:
      "Most common repairs, like screen or battery replacements, are completed within 1-2 hours. More complex issues may take longer, but we'll always provide you with an estimated timeframe upfront.",
  },
  {
    question: "Do you use original parts for repairs?",
    answer:
      "We use only the highest quality OEM (Original Equipment Manufacturer) or equivalent parts to ensure your device functions like new. All parts come with our 1-year warranty.",
  },
  {
    question: "Is my data safe during the repair process?",
    answer:
      "We prioritize your privacy and data security. While we recommend backing up your device before any repair, our technicians follow strict protocols to protect your personal information.",
  },
  {
    question: "Can I get a quote before committing to a repair?",
    answer:
      "Absolutely! We offer free, no-obligation quotes for all our services. Simply bring your device in for a diagnostic, and we'll provide a detailed cost breakdown.",
  },
];
export { services, features, faqs };
