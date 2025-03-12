
import HomePage from '@/components/HomePage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { EventType } from '@/components/events/EventCard';

// Mock data for the home page
const mockFeaturedEvents: EventType[] = [
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
  }
];

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HomePage featuredEvents={mockFeaturedEvents} />
      </main>
      <Footer />
    </>
  );
};

export default Index;
