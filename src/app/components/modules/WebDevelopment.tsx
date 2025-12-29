import { Routes, Route, Navigate } from "react-router-dom";
import { ModuleLayout } from "../ModuleLayout";

const topics = [
  {
    id: "intro-html",
    title: "Introduction to HTML",
    path: "/module/web-development/intro-html",
  },
  {
    id: "css-styling",
    title: "CSS Styling",
    path: "/module/web-development/css-styling",
  },
  {
    id: "javascript-basics",
    title: "JavaScript Basics",
    path: "/module/web-development/javascript-basics",
  },
  {
    id: "react-framework",
    title: "React Framework",
    path: "/module/web-development/react-framework",
  },
  {
    id: "advanced-topics",
    title: "Advanced Topics",
    path: "/module/web-development/advanced-topics",
  },
];

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="prose max-w-none">
      <h1>{title}</h1>
      <p>
        This content is coming soon! The Web Development Masterclass will cover everything 
        you need to know about modern web development.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
        <h3>What You'll Learn:</h3>
        <ul>
          <li>HTML structure and semantic markup</li>
          <li>CSS styling and responsive design</li>
          <li>JavaScript programming fundamentals</li>
          <li>React and modern frameworks</li>
          <li>Best practices and deployment</li>
        </ul>
      </div>
    </div>
  );
}

export function WebDevelopment() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="intro-html" replace />} />
      {topics.map((topic) => (
        <Route
          key={topic.id}
          path={topic.id}
          element={
            <ModuleLayout moduleTitle="Web Development Masterclass" topics={topics}>
              <PlaceholderContent title={topic.title} />
            </ModuleLayout>
          }
        />
      ))}
    </Routes>
  );
}
