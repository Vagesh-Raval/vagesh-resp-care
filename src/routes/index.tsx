import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vagesh Raval — Biomedical Engineer" },
      { name: "description", content: "Portfolio of Vagesh Raval, specializing in respiratory care, critical care systems and medical equipment R&D." },
      { property: "og:title", content: "Vagesh Raval — Biomedical Engineer" },
      { property: "og:description", content: "Respiratory care, critical care systems and medical equipment R&D." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});
