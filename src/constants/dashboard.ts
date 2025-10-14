import {
  CurrencyDollarSimpleIcon,
  TrendUpIcon,
  ArrowsClockwiseIcon,
  SunIcon,
  WaveformIcon,
  CreditCardIcon,
  TagIcon,
  GlobeHemisphereEastIcon,
  GiftIcon,
} from "@phosphor-icons/react";

export const DASHBOARD_SECTIONS = [
  {
    id: "raised",
    title: "Raised",
    description: "Total amount raised and fundraising",
    icon: CurrencyDollarSimpleIcon,
  },
  {
    id: "performance",
    title: "Performance",
    description: "Spiritual performance and consistency tracking",
    icon: TrendUpIcon,
  },
  {
    id: "recurring", 
    title: "Recurring",
    description: "Daily activities and recurring donations",
    icon: ArrowsClockwiseIcon,
  },
  {
    id: "daytime",
    title: "Daytime",
    description: "Your daytime activities",
    icon: SunIcon,
  },
  {
    id: "frequency",
    title: "Frequency",
    description: "Activity frequency analysis",
    icon: WaveformIcon,
  },
  {
    id: "paymentMethod",
    title: "Payment Method",
    description: "Payment method analytics",
    icon: CreditCardIcon,
  },
  {
    id: "designations",
    title: "Designations",
    description: "Donation designations breakdown",
    icon: TagIcon,
  },
  {
    id: "countries",
    title: "Countries",
    description: "Geographic distribution",
    icon: GlobeHemisphereEastIcon,
  },
  {
    id: "tributes",
    title: "Tributes",
    description: "Tribute donations and memorials",
    icon: GiftIcon,
  },
] as const;
