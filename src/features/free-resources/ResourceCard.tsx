import React from 'react';
import { ExternalLink, CheckCircle2, Bookmark, Info } from 'lucide-react';
import { Resource } from './types';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'official': return 'text-blue-700 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'extension': return 'text-green-700 bg-green-50 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'nonprofit': return 'text-amber-700 bg-amber-50 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'local': return 'text-purple-700 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default: return 'text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'official': return <CheckCircle2 className="w-3 h-3 mr-1" />;
      case 'extension': return <Bookmark className="w-3 h-3 mr-1" />;
      case 'nonprofit': return <Info className="w-3 h-3 mr-1" />;
      default: return null;
    }
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-[#1a5f3f] transition-all group h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#1a5f3f] transition-colors pr-4">
          {resource.title}
        </h3>
        <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-[#1a5f3f] transition-colors" />
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
        {resource.description}
      </p>

      <div className="flex flex-col gap-2 mt-auto">
        <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
          <span className="bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-md text-xs w-full">
            <span className="text-gray-500 font-normal">Best for:</span> {resource.bestFor}
          </span>
        </div>
        <div className="flex mt-1">
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getTypeColor(resource.type)}`}>
            {getBadgeIcon(resource.type)}
            {resource.type}
          </span>
        </div>
      </div>
    </a>
  );
}
