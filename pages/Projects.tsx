import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, Edit2, Save, X } from 'lucide-react';
import SEO from '../components/SEO';

const Projects: React.FC = () => {
  // Initialize projects from localStorage or use defaults from constants
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('oef_projects');
    return saved ? JSON.parse(saved) : PROJECTS;
  });

  // State to track which project is being edited
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // State to hold the temporary changes for the project being edited
  const [editForm, setEditForm] = useState<Partial<Project>>({});

  // Persist to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem('oef_projects', JSON.stringify(projects));
  }, [projects]);

  const startEditing = (project: Project) => {
    setEditingId(project.id);
    setEditForm({ ...project });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEditing = () => {
    if (!editingId) return;
    
    setProjects(prev => prev.map(p => 
      p.id === editingId ? { ...p, ...editForm } as Project : p
    ));
    setEditingId(null);
    setEditForm({});
  };

  const handleChange = (field: keyof Project, value: string) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full min-h-screen py-12 md:py-20">
      <SEO 
        title="Our Projects" 
        description="Explore our ongoing initiatives like Abigail Academy and Project Saber, transforming education through technology and community."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-16 border-b-4 border-swiss-black pb-10 bg-white/50 backdrop-blur-md p-6 md:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-swiss-blue">
              PROJECTS
            </h1>
            <p className="text-lg md:text-xl text-swiss-black max-w-3xl leading-relaxed font-medium">
              Our ongoing initiatives. Curated to highlight our active developments in transforming education.
            </p>
          </div>
        </header>

        {/* Projects List */}
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => {
            const isEditing = editingId === project.id;

            return (
              <article 
                key={project.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-swiss-black bg-swiss-bg transition-all duration-300 ${isEditing ? 'shadow-none ring-4 ring-swiss-blue' : 'shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:translate-x-[2px] hover:translate-y-[2px]'}`}
              >
                {/* Image Column */}
                <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-swiss-black relative overflow-hidden min-h-[250px] lg:min-h-auto bg-swiss-black group flex flex-col">
                    {/* Decorative Overlay if image is missing/placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-swiss-gray/20 pointer-events-none">
                      <span className="text-8xl font-black text-white/10">{index + 1}</span>
                    </div>
                    
                    {/* Image Preview */}
                    <img 
                      src={isEditing ? (editForm.image || project.image) : project.image} 
                      alt={project.title} 
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isEditing ? 'opacity-50 grayscale' : 'grayscale mix-blend-overlay group-hover:grayscale-0 group-hover:mix-blend-normal opacity-80 group-hover:opacity-100'}`} 
                    />

                    {/* Edit Image Input Overlay */}
                    {isEditing && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-6 z-20">
                        <div className="w-full">
                          <label className="text-white text-xs font-bold uppercase tracking-widest mb-2 block">Image URL</label>
                          <input 
                            type="text"
                            value={editForm.image || ''}
                            onChange={(e) => handleChange('image', e.target.value)}
                            className="w-full bg-white border-2 border-swiss-black p-2 font-mono text-sm focus:outline-none focus:border-swiss-blue"
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4 z-10">
                       <span className="inline-block px-3 py-1.5 bg-swiss-bg border border-swiss-black text-xs font-bold uppercase tracking-widest shadow-md">
                          {project.status}
                       </span>
                    </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between bg-white/80 relative">
                  
                  {/* Edit Actions */}
                  <div className="absolute top-6 right-6 z-20 flex gap-2">
                    {isEditing ? (
                      <>
                        <button 
                          onClick={saveEditing}
                          className="flex items-center gap-2 bg-swiss-blue text-white px-3 py-2 text-xs font-bold uppercase tracking-widest hover:bg-swiss-black transition-colors shadow-sm"
                        >
                          <Save size={14} /> Save
                        </button>
                        <button 
                          onClick={cancelEditing}
                          className="flex items-center gap-2 bg-swiss-bg text-swiss-black border border-swiss-black px-3 py-2 text-xs font-bold uppercase tracking-widest hover:bg-swiss-red hover:text-white transition-colors shadow-sm"
                        >
                          <X size={14} /> Cancel
                        </button>
                      </>
                    ) : (
                      <button 
                        onClick={() => startEditing(project)}
                        className="flex items-center gap-2 text-swiss-gray hover:text-swiss-black transition-colors opacity-0 group-hover:opacity-100"
                        title="Edit Project"
                      >
                        <Edit2 size={16} />
                      </button>
                    )}
                  </div>

                  <div className="w-full">
                    <div className="flex items-baseline justify-between mb-2">
                       <span className="text-swiss-red font-black text-xs tracking-widest uppercase">Initiative 0{index + 1}</span>
                    </div>

                    {isEditing ? (
                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-swiss-gray mb-1">Title</label>
                          <input 
                            type="text"
                            value={editForm.title || ''}
                            onChange={(e) => handleChange('title', e.target.value)}
                            className="w-full text-2xl md:text-4xl font-black leading-none bg-swiss-bg border-b-2 border-swiss-blue focus:outline-none text-swiss-black placeholder-swiss-gray/50"
                          />
                        </div>
                        <div className="w-20 h-1.5 bg-swiss-blue"></div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-swiss-gray mb-1">Description</label>
                          <textarea 
                            value={editForm.description || ''}
                            onChange={(e) => handleChange('description', e.target.value)}
                            rows={4}
                            className="w-full text-base md:text-lg leading-relaxed font-medium bg-swiss-bg border-2 border-swiss-black/20 focus:border-swiss-blue p-3 focus:outline-none text-swiss-black"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-2xl md:text-4xl font-black leading-none mb-4 text-swiss-black">
                          {project.title}
                        </h2>
                        <div className="w-20 h-1.5 bg-swiss-blue mb-6"></div>
                        <p className="text-base md:text-lg leading-relaxed text-swiss-black/80 mb-6 font-medium">
                          {project.description}
                        </p>
                      </>
                    )}
                    
                    {/* Media Embed / Link Block for Vimeo */}
                    {!isEditing && project.embedUrl && (
                       <div className="mb-6 p-4 bg-swiss-black text-swiss-bg rounded-sm border-l-4 border-swiss-red">
                          <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-swiss-gray">Featured Media</h4>
                          <p className="text-sm mb-4 opacity-80">Watch our latest discussions and series on Vimeo.</p>
                          <a 
                             href={project.embedUrl} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="inline-flex items-center gap-2 bg-swiss-blue text-white px-4 py-2 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-swiss-blue transition-colors"
                          >
                             Watch on Vimeo <ArrowUpRight size={14} />
                          </a>
                       </div>
                    )}
                  </div>

                  {/* Conditionally Render Details Button */}
                  {!isEditing && !project.hideDetailsLink && (
                    <div className="mt-auto pt-6 border-t border-swiss-black/10">
                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-swiss-red transition-colors group">
                            View Details 
                            <span className="bg-swiss-black text-swiss-bg rounded-full p-1 group-hover:bg-swiss-red transition-colors">
                                <ArrowUpRight size={14} />
                            </span>
                        </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center opacity-60">
            <p className="text-xs font-mono">
                // ACTIVE PROJECTS DISPLAYED: {projects.length}
            </p>
        </div>

      </div>
    </div>
  );
};

export default Projects;