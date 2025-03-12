
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, MapPin, Clock, Users, Award, Share2, 
  Facebook, Twitter, Instagram, ArrowLeft, Heart
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { EventType } from '@/components/events/EventCard';
import { Separator } from '@/components/ui/separator';

// Mock events data
const mockEvents: Record<string, EventType & {
  description: string;
  route: string;
  organizer: string;
  maxParticipants: number;
  registeredParticipants: number;
  price: string;
  schedule: {time: string; activity: string}[];
}> = {
  '1': {
    id: '1',
    title: 'City Marathon 2023',
    date: 'November 15, 2023',
    location: 'São Paulo, Brazil',
    distance: 'Marathon (42.2km)',
    imageUrl: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    status: 'upcoming',
    description: 'Experience the largest and most prestigious marathon in South America. The course takes you through the most iconic parts of São Paulo, with thousands of spectators cheering you on. The race begins at Ibirapuera Park and finishes at Paulista Avenue, passing through numerous landmarks along the way.',
    route: 'https://images.unsplash.com/photo-1577086664693-894d3429e162?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80',
    organizer: 'São Paulo Athletics Association',
    maxParticipants: 25000,
    registeredParticipants: 17890,
    price: 'R$250 - R$350',
    schedule: [
      {time: '05:00', activity: 'Arrival and kit pickup for last-minute registrants'},
      {time: '06:30', activity: 'Warm-up session'},
      {time: '07:00', activity: 'Race start - Elite runners'},
      {time: '07:15', activity: 'Race start - General participants'},
      {time: '13:00', activity: 'Award ceremony'},
    ]
  }
};

const EventDetail = () => {
  const { eventId } = useParams<{eventId: string}>();
  const event = eventId ? mockEvents[eventId] : null;

  if (!event) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 pb-16">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
            <p className="text-xl mb-8">The event you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/events">
                <ArrowLeft size={18} className="mr-2" />
                Back to Events
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const progressPercentage = (event.registeredParticipants / event.maxParticipants) * 100;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 pb-16">
        {/* Hero Section with Event Image */}
        <div className="relative h-[40vh] md:h-[50vh]">
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <div className="container">
              <Link to="/events" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft size={18} className="mr-2" />
                Back to Events
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{event.title}</h1>
              <div className="flex flex-wrap gap-4 md:gap-6 text-white/90">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>{event.distance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="details">
                <TabsList className="mb-6">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="route">Route</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="animate-slide-up">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <Separator className="my-6" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Event Details</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Calendar size={18} className="mr-3 text-event mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Date:</span>
                              <p className="text-gray-600 dark:text-gray-400">{event.date}</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <MapPin size={18} className="mr-3 text-event mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Location:</span>
                              <p className="text-gray-600 dark:text-gray-400">{event.location}</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Clock size={18} className="mr-3 text-event mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Distance:</span>
                              <p className="text-gray-600 dark:text-gray-400">{event.distance}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Organized by</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{event.organizer}</p>
                        
                        <h3 className="text-lg font-medium mb-3">Entry Fee</h3>
                        <p className="text-gray-700 dark:text-gray-300">{event.price}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="route" className="animate-slide-up">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Race Route</h2>
                    <div className="aspect-video rounded-lg overflow-hidden mb-6">
                      <img 
                        src={event.route} 
                        alt="Race route map" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      The route takes runners through the heart of São Paulo, showcasing the city's vibrant culture and architecture. 
                      Starting at the Ibirapuera Park, the course winds through major avenues before finishing at Paulista Avenue.
                    </p>
                    <Button variant="outline">Download GPX File</Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="schedule" className="animate-slide-up">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Event Schedule</h2>
                    <div className="space-y-4">
                      {event.schedule.map((item, index) => (
                        <div key={index} className="flex border-l-2 border-event pl-4">
                          <div className="font-medium w-20">{item.time}</div>
                          <div className="flex-1">{item.activity}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Registration Status */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
                {event.status !== 'completed' ? (
                  <>
                    <h3 className="text-xl font-semibold mb-4">Registration Status</h3>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Spots filled</span>
                        <span>{event.registeredParticipants} / {event.maxParticipants}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-event h-2.5 rounded-full" 
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                      {event.status === 'registration-closing' 
                        ? 'Registration closing soon! Secure your spot now.' 
                        : 'Register now to secure your spot.'}
                    </p>
                    <Button className="w-full mb-3 button-hover-effect" asChild>
                      <Link to={`/events/${event.id}/register`}>Register Now</Link>
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center">
                      <Heart size={18} className="mr-2" />
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold mb-4">Event Completed</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      This event has already taken place. Check out the results and photos!
                    </p>
                    <Button className="w-full mb-3" asChild>
                      <Link to={`/results?event=${event.id}`}>View Results</Link>
                    </Button>
                  </>
                )}
              </div>
              
              {/* Share */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Share This Event</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook size={18} />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter size={18} />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram size={18} />
                    <span className="sr-only">Share on Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 size={18} />
                    <span className="sr-only">Copy link</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetail;
