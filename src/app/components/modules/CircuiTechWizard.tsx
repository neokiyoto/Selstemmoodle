import { Routes, Route, Navigate } from "react-router-dom";
import { ModuleLayout } from "../ModuleLayout";
import { Chapter1 } from "./circuitech/Chapter1";
import { Chapter2 } from "./circuitech/Chapter2";
import { Chapter3 } from "./circuitech/Chapter3";

const topics = [
  {
    id: "chapter-1",
    title: "Chapter 1: Introduction",
    path: "/module/circuitech-wizard/chapter-1",
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Resistor Color Codes",
    path: "/module/circuitech-wizard/chapter-2",
  },
  {
    id: "chapter-3",
    title: "Chapter 3: Project",
    path: "/module/circuitech-wizard/chapter-3",
  },
];

export function CircuiTechWizard() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="chapter-1" replace />} />
      <Route
        path="chapter-1"
        element={
          <ModuleLayout moduleTitle="CircuiTech Wizard" topics={topics}>
            <Chapter1 />
          </ModuleLayout>
        }
      />
      <Route
        path="chapter-2"
        element={
          <ModuleLayout moduleTitle="CircuiTech Wizard" topics={topics}>
            <Chapter2 />
          </ModuleLayout>
        }
      />
      <Route
        path="chapter-3"
        element={
          <ModuleLayout moduleTitle="CircuiTech Wizard" topics={topics}>
            <Chapter3 />
          </ModuleLayout>
        }
      />
    </Routes>
  );
}
