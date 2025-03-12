import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EventList from '@/components/events/EventList';
import SearchFilters from '@/components/ui/SearchFilters';
import { EventType } from '@/components/events/EventCard';

// Mock data for events
const mockEvents: EventType[] = [
  {
    id: '1',
    title: 'City Marathon 2023',
    date: 'November 15, 2023',
    location: 'São Paulo, Brazil',
    distance: 'Marathon (42.2km)',
    imageUrl: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Beach Run Series',
    date: 'December 10, 2023',
    location: 'Rio de Janeiro, Brazil',
    distance: '10K / 21K',
    imageUrl: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'Night Trail Challenge',
    date: 'October 25, 2023',
    location: 'Curitiba, Brazil',
    distance: 'Trail (15K)',
    imageUrl: 'https://images.unsplash.com/photo-1598136490929-292a0a7890c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    status: 'registration-closing'
  },
  {
    id: '4',
    title: 'Forest Half Marathon',
    date: 'September 5, 2023',
    location: 'Manaus, Brazil',
    distance: 'Half Marathon (21.1km)',
    imageUrl: 'https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    status: 'completed'
  },
  {
    id: '5',
    title: 'Sunset 5K Run',
    date: 'July 30, 2023',
    location: 'Florianópolis, Brazil',
    distance: '5K',
    imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80',
    status: 'completed'
  },
  {
    id: '6',
    title: 'Mountain Challenge',
    date: 'January 20, 2024',
    location: 'Gramado, Brazil',
    distance: 'Ultra (50K)',
    imageUrl: 'https://images.unsplash.com/photo-1511067007398-7e4b9499a637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    status: 'upcoming'
  }
];

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState(mockEvents);

  const handleSearch = (filters: {
    keyword: string;
    location: string;
    distance: string;
    date: string;
  }) => {
    let results = [...mockEvents];

    // Filter by keyword
    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase();
      results = results.filter(
        event =>
          event.title.toLowerCase().includes(keyword) ||
          event.location.toLowerCase().includes(keyword) ||
          event.distance.toLowerCase().includes(keyword)
      );
    }

    // Filter by location
    if (filters.location) {
      const location = filters.location.toLowerCase();
      results = results.filter(event =>
        event.location.toLowerCase().includes(location)
      );
    }

    // Filter by distance
    if (filters.distance) {
      const distance = filters.distance.toLowerCase();
      results = results.filter(event =>
        event.distance.toLowerCase().includes(distance)
      );
    }

    // For date we would have more complex logic in a real app
    // For the mock, we'll just keep it simple

    setFilteredEvents(results);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Discover Running Events</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find your next running challenge from our collection of curated events.
            </p>
          </div>

          <div className="mb-12">
            <SearchFilters onSearch={handleSearch} />
          </div>

          <EventList events={filteredEvents} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Events;
