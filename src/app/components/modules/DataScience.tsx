import { Routes, Route, Navigate } from "react-router-dom";
import { ModuleLayout } from "../ModuleLayout";

const topics = [
  {
    id: "intro-data",
    title: "Introduction to Data Science",
    path: "/module/data-science/intro-data",
  },
  {
    id: "python-basics",
    title: "Python for Data Science",
    path: "/module/data-science/python-basics",
  },
  {
    id: "data-analysis",
    title: "Data Analysis with Pandas",
    path: "/module/data-science/data-analysis",
  },
  {
    id: "machine-learning",
    title: "Machine Learning Fundamentals",
    path: "/module/data-science/machine-learning",
  },
];

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="prose max-w-none">
      <h1>{title}</h1>
      <p>
        This content is coming soon! The Data Science Fundamentals module will teach you 
        essential data analysis and machine learning skills.
      </p>
      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mt-6">
        <h3>What You'll Learn:</h3>
        <ul>
          <li>Data manipulation and cleaning</li>
          <li>Statistical analysis techniques</li>
          <li>Data visualization best practices</li>
          <li>Machine learning algorithms</li>
        </ul>
      </div>
    </div>
  );
}

export function DataScience() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="intro-data" replace />} />
      {topics.map((topic) => (
        <Route
          key={topic.id}
          path={topic.id}
          element={
            <ModuleLayout moduleTitle="Data Science Fundamentals" topics={topics}>
              <PlaceholderContent title={topic.title} />
            </ModuleLayout>
          }
        />
      ))}
    </Routes>
  );
}
