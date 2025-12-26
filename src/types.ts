import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}