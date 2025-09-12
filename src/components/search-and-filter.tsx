'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  X,
  Grid3x3,
  List,
  SortAsc,
  SortDesc,
  DollarSign,
  Clock
} from 'lucide-react';
import type { Salon } from '@/lib/types';
import { useGeolocation } from '@/hooks/use-geolocation';


interface SearchAndFilterProps {
  onFiltersChange?: (filters: any) => void;
  showResults?: boolean;
}

export function SearchAndFilter({ onFiltersChange, showResults = true }: SearchAndFilterProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const { location: userLocation } = useGeolocation();
  
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [distance, setDistance] = useState([25]);
  const [rating, setRating] = useState([0]);

  const categories = [
    'All', 'Braiding', 'Natural Hair', 'Nails', 'Spa & Facials', 
    'Makeup', 'Dreadlocks', 'Twists', 'Barbering', 'Manicure'
  ];

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated', icon: Star },
    { value: 'distance', label: 'Nearest First', icon: MapPin },
    { value: 'price-low', label: 'Price: Low to High', icon: SortAsc },
    { value: 'price-high', label: 'Price: High to Low', icon: SortDesc },
    { value: 'reviews', label: 'Most Reviewed', icon: Star }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger search with current filters
    onFiltersChange?.({
      query: searchQuery,
      category: selectedCategory,
      priceRange,
      distance: distance[0],
      rating: rating[0],
      sortBy
    });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setPriceRange([0, 50000]);
    setDistance([25]);
    setRating([0]);
    setSortBy('rating');
  };

  const activeFiltersCount = [
    searchQuery,
    selectedCategory && selectedCategory !== 'All',
    priceRange[0] > 0 || priceRange[1] < 50000,
    distance[0] < 25,
    rating[0] > 0
  ].filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Main Search Bar */}
      <Card className="border-purple-100">
        <CardContent className="p-4">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warmgray-400" />
                <Input
                  placeholder="Search salons, services, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-warmgray-50 border-purple-200"
                />
              </div>
              
              {/* Location Input */}
              <div className="relative sm:w-64">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-warmgray-400" />
                <Input
                  placeholder={userLocation?.city || "Enter location"}
                  className="pl-10 bg-warmgray-50 border-purple-200"
                />
              </div>
              
              {/* Search Button */}
              <Button 
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6"
              >
                Search
              </Button>
            </div>

            {/* Quick Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category) => (
                <Button
                  key={category}
                  type="button"
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      : "border-purple-200 text-purple-600 hover:bg-purple-50"
                  }
                >
                  {category}
                </Button>
              ))}
              
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                <Filter className="h-4 w-4 mr-1" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge className="ml-2 bg-purple-600 text-white text-xs">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Advanced Filters */}
      {showFilters && (
        <Card className="border-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-warmgray-900">Advanced Filters</h3>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearFilters}
                  className="text-warmgray-500 hover:text-warmgray-700"
                >
                  Clear All
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(false)}
                  className="text-warmgray-500 hover:text-warmgray-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-warmgray-900 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-purple-600" />
                  Price Range
                </label>
                <Slider
                  value={[priceRange[0], priceRange[1]]}
                  onValueChange={(value) => setPriceRange(value)}
                  max={50000}
                  min={0}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-warmgray-600">
                  <span>₦{priceRange[0].toLocaleString()}</span>
                  <span>₦{priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              {/* Distance */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-warmgray-900 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  Distance
                </label>
                <Slider
                  value={distance}
                  onValueChange={setDistance}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="text-xs text-warmgray-600 text-center">
                  Within {distance[0]} km
                </div>
              </div>

              {/* Rating */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-warmgray-900 flex items-center gap-2">
                  <Star className="h-4 w-4 text-purple-600" />
                  Minimum Rating
                </label>
                <Slider
                  value={rating}
                  onValueChange={setRating}
                  max={5}
                  min={0}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex items-center justify-center gap-1 text-xs text-warmgray-600">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${
                        i < rating[0] ? 'text-yellow-400 fill-yellow-400' : 'text-warmgray-300'
                      }`} 
                    />
                  ))}
                  <span className="ml-1">{rating[0]}+ stars</span>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-warmgray-900 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-purple-600" />
                  Availability
                </label>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-xs border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    Available Today
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-xs border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    This Week
                  </Button>
                </div>
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="mt-6 flex justify-center">
              <Button 
                onClick={handleSearch}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8"
              >
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Header */}
      {showResults && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-warmgray-900">
              {searchQuery ? `Results for "${searchQuery}"` : 'All Salons'}
            </h2>
            <p className="text-warmgray-600">
              {userLocation?.city && `Near ${userLocation.city} • `}
              Showing 24 of 156 salons
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-warmgray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-purple-200 rounded-md px-3 py-1 bg-white text-warmgray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-purple-200 rounded-md overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={`rounded-none px-3 ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={`rounded-none px-3 ${
                  viewMode === 'list' 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'text-purple-600 hover:bg-purple-50'
                }`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-warmgray-600">Active filters:</span>
          
          {searchQuery && (
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
              Search: "{searchQuery}"
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setSearchQuery('')}
              />
            </Badge>
          )}
          
          {selectedCategory && selectedCategory !== 'All' && (
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
              {selectedCategory}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setSelectedCategory('')}
              />
            </Badge>
          )}
          
          {(priceRange[0] > 0 || priceRange[1] < 50000) && (
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
              ₦{priceRange[0].toLocaleString()} - ₦{priceRange[1].toLocaleString()}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setPriceRange([0, 50000])}
              />
            </Badge>
          )}
          
          {distance[0] < 25 && (
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
              Within {distance[0]}km
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setDistance([25])}
              />
            </Badge>
          )}
          
          {rating[0] > 0 && (
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
              {rating[0]}+ stars
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setRating([0])}
              />
            </Badge>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-warmgray-500 hover:text-warmgray-700 ml-2"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}

    
