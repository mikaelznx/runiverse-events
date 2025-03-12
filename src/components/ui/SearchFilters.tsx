
import { useState } from 'react';
import { Calendar, MapPin, Ruler, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchFiltersProps {
  onSearch: (filters: {
    keyword: string;
    location: string;
    distance: string;
    date: string;
  }) => void;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    distance: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({
      keyword: '',
      location: '',
      distance: '',
      date: '',
    });
    onSearch({
      keyword: '',
      location: '',
      distance: '',
      date: '',
    });
  };

  return (
    <div className="glass-panel rounded-xl p-4 md:p-6 w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Main search box */}
        <div className="flex items-center">
          <div className="relative flex-grow">
            <Search 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            />
            <Input
              type="text"
              name="keyword"
              placeholder="Search events by name, location, or type..."
              value={filters.keyword}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
          <Button 
            type="button" 
            variant="outline" 
            className="ml-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Filter size={18} />
            <span className="sr-only md:not-sr-only md:ml-2">Filters</span>
          </Button>
          <Button type="submit" className="ml-2">
            <Search size={18} />
            <span className="sr-only md:not-sr-only md:ml-2">Search</span>
          </Button>
        </div>

        {/* Expanded filters */}
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 animate-slide-down">
            <div className="relative">
              <MapPin 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
              <Input
                type="text"
                name="location"
                placeholder="Location"
                value={filters.location}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <Ruler 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
              <select
                name="distance"
                value={filters.distance}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
              >
                <option value="">All Distances</option>
                <option value="5k">5K</option>
                <option value="10k">10K</option>
                <option value="half-marathon">Half Marathon</option>
                <option value="marathon">Marathon</option>
                <option value="ultra">Ultra</option>
              </select>
            </div>
            
            <div className="relative">
              <Calendar 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
              <select
                name="date"
                value={filters.date}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
              >
                <option value="">Any Date</option>
                <option value="this-week">This Week</option>
                <option value="this-month">This Month</option>
                <option value="next-month">Next Month</option>
                <option value="next-3-months">Next 3 Months</option>
                <option value="next-6-months">Next 6 Months</option>
              </select>
            </div>
            
            <div className="md:col-span-3 flex justify-end">
              <Button type="button" variant="ghost" onClick={handleReset}>
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFilters;
