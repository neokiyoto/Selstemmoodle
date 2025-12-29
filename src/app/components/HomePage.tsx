import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const modules = [
  {
    id: "circuitech-wizard",
    title: "CircuiTech Wizard",
    description: "Master electronics and circuit design from basics to advanced concepts",
    image: "https://images.unsplash.com/photo-1553408226-42ecf81a214c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NjY0NDM5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    chapters: 3,
  },
  {
    id: "web-development",
    title: "Web Development Masterclass",
    description: "Learn modern web development with React, TypeScript, and more",
    image: "https://images.unsplash.com/photo-1556792189-55769c8dfbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjY1NDExODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    chapters: 5,
  },
  {
    id: "data-science",
    title: "Data Science Fundamentals",
    description: "Explore data analysis, visualization, and machine learning",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjY0NTI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    chapters: 4,
  },
  {
    id: "digital-design",
    title: "Digital Design Essentials",
    description: "Create stunning designs with industry-standard tools and techniques",
    image: "https://images.unsplash.com/photo-1740059020488-ba2541d7f907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY2NDM1MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    chapters: 6,
  },
];

export function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-4">
              Welcome to Learning Hub
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Explore our comprehensive modules and enhance your skills
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {modules.map((module) => (
                <div key={module.id} className="px-4">
                  <Link to={`/module/${module.id}`}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                      <div className="relative h-64">
                        <ImageWithFallback
                          src={module.image}
                          alt={module.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl mb-2">{module.title}</h3>
                          <p className="text-gray-200">{module.description}</p>
                        </div>
                      </div>
                      <div className="p-6 bg-white text-gray-900">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            {module.chapters} Chapters
                          </span>
                          <span className="text-blue-600 flex items-center gap-2">
                            Start Learning
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Featured Modules Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center text-gray-900">
            All Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <Link
                key={module.id}
                to={`/module/${module.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={module.image}
                    alt={module.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{module.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {module.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {module.chapters} Chapters
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
