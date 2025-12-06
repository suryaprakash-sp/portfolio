import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { RESUME_DATA, PROJECT_ICONS } from '../../constants';
import { useState, useEffect } from 'react';

export const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project by converting title to URL-friendly slug
  const project = RESUME_DATA.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectId
  );

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    if (!project?.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project?.images]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const Icon = PROJECT_ICONS[project.icon];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with back button */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* Project Content */}
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  {project.category}
                </span>
                <span className="text-sm text-slate-500">{project.year}</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900">{project.title}</h1>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Slideshow */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              {project.images.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  style={{
                    opacity: idx === currentImageIndex ? 1 : 0,
                  }}
                />
              ))}
            </div>

            {/* Slideshow Indicators */}
            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 py-4 bg-slate-800">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? 'w-8 bg-blue-500'
                        : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project Description */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Project</h2>
          <div className="space-y-4">
            {project.description.map((desc, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                <p className="text-slate-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Projects Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; 2025 {RESUME_DATA.name}. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
};
