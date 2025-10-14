"use client";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AuthUser } from "@/lib/auth-guard";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { DASHBOARD_SECTIONS } from "@/constants/dashboard";
import { DashboardSection } from "./components/dashboard-section";
import { DashboardNavigation } from "./components/dashboard-navigation";
import { LazyLoadSection } from "@/components/lazy-load-section";
import { ChartSkeleton } from "./components/chart-skeleton";

// Dynamic imports with consistent loading states
const DashboardHeader = dynamic(
  () => import("@/app/components/dashboardHeader"),
  { loading: () => <div className="h-12 bg-muted animate-pulse rounded" /> }
);

// Chart components with lazy loading - SSR disabled for better performance
const chartComponents = {
  raised: dynamic(() => import("./components/charts/raised-chart").then(m => ({ default: m.RaisedChart })), { ssr: false }),
  performance: dynamic(() => import("./components/charts/performance-chart").then(m => ({ default: m.PerformanceChart })), { ssr: false }),
  recurring: dynamic(() => import("./components/charts/recurring-chart").then(m => ({ default: m.RecurringChart })), { ssr: false }),
  daytime: dynamic(() => import("./components/charts/daytime-chart").then(m => ({ default: m.DaytimeChart })), { ssr: false }),
  frequency: dynamic(() => import("./components/charts/frequency-chart").then(m => ({ default: m.FrequencyChart })), { ssr: false }),
  paymentMethod: dynamic(() => import("./components/payment-method").then(m => ({ default: m.PaymentMethod })), { ssr: false }),
  designations: dynamic(() => import("./components/charts/designations-chart").then(m => ({ default: m.DesignationsChart })), { ssr: false }),
  countries: dynamic(() => import("./components/charts/countries-chart").then(m => ({ default: m.CountriesChart })), { ssr: false }),
  tributes: dynamic(() => import("./components/charts/tributes-chart").then(m => ({ default: m.TributesChart })), { ssr: false }),
};

interface MainProps {
  user: AuthUser;
}

function MainSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-6 animate-pulse">
      <div className="col-span-1 flex flex-col gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="min-h-[600px] rounded-md border border-border bg-muted" />
        ))}
      </div>
      <div className="col-span-1 hidden lg:block">
        <div className="sticky top-4 z-10">
          <div className="w-full rounded-xl border border-border bg-muted h-96" />
        </div>
      </div>
    </div>
  );
}

export default function Main({ user }: MainProps) {
  const sectionIds = DASHBOARD_SECTIONS.map(section => section.id);
  const observedActiveSection = useIntersectionObserver(sectionIds);

  // State to handle active section with fallback
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  // Update active section when intersection observer detects change
  useEffect(() => {
    if (observedActiveSection) {
      setActiveSection(observedActiveSection);
    }
  }, [observedActiveSection]);

  const renderSectionContent = (sectionId: string) => {
    const Component = chartComponents[sectionId as keyof typeof chartComponents];
    
    if (!Component) {
      return (
        <div className="flex items-center justify-center h-96 text-muted-foreground">
          <div className="text-center">
            <p className="text-lg font-medium">Coming Soon</p>
          </div>
        </div>
      );
    }

    // Wrap each chart in LazyLoadSection for viewport-based loading
    return (
      <LazyLoadSection fallback={<ChartSkeleton />}>
        <Component />
      </LazyLoadSection>
    );
  };

  return (
    <>
      <Suspense fallback={<div className="h-12 bg-muted animate-pulse rounded mb-6" />}>
        <DashboardHeader
          title="Dashboard"
          description="Welcome to your dashboard"
        />
      </Suspense>

      <Suspense fallback={<MainSkeleton />}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-6">
          <div className="col-span-1 flex flex-col gap-8">
            {DASHBOARD_SECTIONS.map((section) => (
              <DashboardSection key={section.id} section={section}>
                {renderSectionContent(section.id)}
              </DashboardSection>
            ))}
          </div>
          <DashboardNavigation
            sections={DASHBOARD_SECTIONS}
            activeSection={activeSection}
          />
        </div>
      </Suspense>
    </>
  );
}
