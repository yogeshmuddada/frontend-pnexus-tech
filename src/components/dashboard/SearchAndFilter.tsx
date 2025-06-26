
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
  activeFilter: string;
  searchQuery: string;
}

export const SearchAndFilter = ({ onSearch, onFilter, activeFilter, searchQuery }: SearchAndFilterProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const filters = [
    { value: 'all', label: 'All Content' },
    { value: 'week1', label: 'Week 1' },
    { value: 'week2', label: 'Week 2' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <div className="mb-6 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search course content..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="pl-10 pr-4 py-2 w-full bg-white/80 backdrop-blur-sm border-gray-200 focus:border-blue-500"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSearch('')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-auto"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
        </Button>
        {activeFilter !== 'all' && (
          <Badge variant="secondary" className="flex items-center gap-1">
            {filters.find(f => f.value === activeFilter)?.label}
            <X 
              className="w-3 h-3 cursor-pointer" 
              onClick={() => onFilter('all')}
            />
          </Badge>
        )}
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => onFilter(filter.value)}
              className="text-sm"
            >
              {filter.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
