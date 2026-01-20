import { notFound } from "next/navigation";
import ModuleContent from "./ModuleContent";

const moduleData: Record<string, { name: string; description: string; video: string }> = {
  "hcbpm": {
    name: "HCBPM",
    description: "Human Capital and Business Process Management - Complete workforce and business processes management solution for your organization.",
    video: "/assets/HCBPM.mp4"
  },
  "finance": {
    name: "Finance",
    description: "Comprehensive financial management including accounting, budgeting, and financial reporting.",
    video: "/assets/finance.mp4"
  },
  "mm": {
    name: "Materials Management",
    description: "Trace, track, and manage your inventory. Complete control of your warehouse and its workforce.",
    video: "/assets/erp.mp4"
  },
  "crm": {
    name: "CRM",
    description: "Customer Relationship Management - Build and maintain strong customer relationships with powerful tools.",
    video: "/assets/CRM.mp4"
  },
  "spending-management": {
    name: "Spending Management",
    description: "Strategic spend analysis and procurement optimization to maximize your purchasing power.",
    video: "/assets/spending.mp4"
  },
  "engineering-production": {
    name: "Engineering and Production",
    description: "Concurrently configure, plan, and execute maintenance and production operations.",
    video: "/assets/production.mp4"
  },
  "transport": {
    name: "Transport Management",
    description: "Fleet and logistics management for efficient transportation operations.",
    video: "/assets/transport.mp4"
  },
  "analytics": {
    name: "Analytics",
    description: "Business intelligence and analytics to make data-driven decisions.",
    video: "/assets/analytics.mp4"
  }
};

export function generateStaticParams() {
  return Object.keys(moduleData).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ModuleVideoPage({ params }: PageProps) {
  const { slug } = await params;
  const moduleInfo = moduleData[slug];

  if (!moduleInfo) {
    notFound();
  }

  return (
    <ModuleContent
      name={moduleInfo.name}
      description={moduleInfo.description}
      video={moduleInfo.video}
    />
  );
}
