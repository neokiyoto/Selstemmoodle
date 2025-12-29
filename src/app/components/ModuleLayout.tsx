import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { ReactNode } from "react";

interface Topic {
  id: string;
  title: string;
  path: string;
}

interface ModuleLayoutProps {
  moduleTitle: string;
  topics: Topic[];
  children: ReactNode;
}

export function ModuleLayout({ moduleTitle, topics, children }: ModuleLayoutProps) {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{moduleTitle}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg mb-4 text-gray-900">Topics</h3>
              <nav className="space-y-2">
                {topics.map((topic) => {
                  const isActive = topicId === topic.id;
                  return (
                    <Link
                      key={topic.id}
                      to={topic.path}
                      className={`block px-4 py-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {topic.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow-md p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
