import { Routes, Route, Navigate } from "react-router-dom";
import { ModuleLayout } from "../ModuleLayout";

const topics = [
  {
    id: "design-basics",
    title: "Design Fundamentals",
    path: "/module/digital-design/design-basics",
  },
  {
    id: "typography",
    title: "Typography & Color Theory",
    path: "/module/digital-design/typography",
  },
  {
    id: "ui-ux",
    title: "UI/UX Principles",
    path: "/module/digital-design/ui-ux",
  },
  {
    id: "design-tools",
    title: "Design Tools & Software",
    path: "/module/digital-design/design-tools",
  },
  {
    id: "prototyping",
    title: "Prototyping & Testing",
    path: "/module/digital-design/prototyping",
  },
  {
    id: "portfolio",
    title: "Building Your Portfolio",
    path: "/module/digital-design/portfolio",
  },
];

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="prose max-w-none">
      <h1>{title}</h1>
      <p>
        This content is coming soon! The Digital Design Essentials module will guide you 
        through creating beautiful and functional designs.
      </p>
      <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg mt-6">
        <h3>What You'll Learn:</h3>
        <ul>
          <li>Design principles and theory</li>
          <li>Typography and color usage</li>
          <li>User experience (UX) design</li>
          <li>Figma, Adobe XD, and other tools</li>
          <li>Creating and presenting portfolios</li>
        </ul>
      </div>
    </div>
  );
}

export function DigitalDesign() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="design-basics" replace />} />
      {topics.map((topic) => (
        <Route
          key={topic.id}
          path={topic.id}
          element={
            <ModuleLayout moduleTitle="Digital Design Essentials" topics={topics}>
              <PlaceholderContent title={topic.title} />
            </ModuleLayout>
          }
        />
      ))}
    </Routes>
  );
}
