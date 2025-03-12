
import { ArrowRight, Award, Map, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import EventCard, { EventType } from './events/EventCard';

interface HomePageProps {
  featuredEvents: EventType[];
}

const HomePage = ({ featuredEvents }: HomePageProps) => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Marathon runners" 
            className="w-full h-full object-cover image-fade-mask"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="container relative z-10 text-white space-y-8">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Discover Your Next Running Challenge
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Find, register and track your performance in running events across the country
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild className="button-hover-effect">
                <Link to="/events">
                  Find Events
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="button-hover-effect">
                <Link to="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Events</h2>
          <Button variant="ghost" className="group" asChild>
            <Link to="/events" className="flex items-center">
              View All
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map(event => (
            <EventCard key={event.id} event={event} className="animate-slide-up" />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Everything You Need In One Place</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              RunEvents provides a complete platform for runners to discover, participate, and track their running journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all-300 animate-slide-up">
              <div className="bg-event-accent p-3 rounded-lg inline-block mb-4">
                <Calendar className="text-event" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Browse and search for running events by location, distance, or date to find your perfect race.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all-300 animate-slide-up delay-100">
              <div className="bg-event-accent p-3 rounded-lg inline-block mb-4">
                <Users className="text-event" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Register for events with a few clicks, manage your entries, and share with friends.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all-300 animate-slide-up delay-200">
              <div className="bg-event-accent p-3 rounded-lg inline-block mb-4">
                <Award className="text-event" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Results & Rankings</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track your race results, compare with previous performances, and see your ranking.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all-300 animate-slide-up delay-300">
              <div className="bg-event-accent p-3 rounded-lg inline-block mb-4">
                <Map className="text-event" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore race routes with detailed maps to prepare for your events like a pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-16">
        <div className="bg-gradient-to-r from-event to-blue-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Organize Your Running Event</h2>
              <p className="text-lg mb-6">
                Use our platform to manage registrations, publish results, and promote your running event to thousands of runners.
              </p>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-event button-hover-effect" asChild>
                <Link to="/organizers">Get Started</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Organizers and runners" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
