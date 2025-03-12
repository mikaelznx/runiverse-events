
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export type EventType = {
  id: string;
  title: string;
  date: string;
  location: string;
  distance: string;
  imageUrl: string;
  status: 'upcoming' | 'registration-closing' | 'completed';
};

interface EventCardProps {
  event: EventType;
  className?: string;
}

const EventCard = ({ event, className = '' }: EventCardProps) => {
  const statusColors = {
    'upcoming': 'bg-green-100 text-green-800',
    'registration-closing': 'bg-amber-100 text-amber-800',
    'completed': 'bg-gray-100 text-gray-800'
  };
  
  const statusText = {
    'upcoming': 'Upcoming',
    'registration-closing': 'Registration Closing Soon',
    'completed': 'Completed'
  };

  return (
    <div 
      className={`group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all-300 ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover object-center transition-transform-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge className={`${statusColors[event.status]}`}>
            {statusText[event.status]}
          </Badge>
        </div>
      </div>
      
      <div className="p-5 space-y-4">
        <h3 className="text-xl font-semibold line-clamp-1 group-hover:text-event transition-colors">
          {event.title}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm">{event.date}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm line-clamp-1">{event.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm">{event.distance}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <Button asChild variant="outline" size="sm" className="button-hover-effect">
            <Link to={`/events/${event.id}`}>
              <span>Details</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
          
          {event.status !== 'completed' && (
            <Button asChild size="sm" className="button-hover-effect">
              <Link to={`/events/${event.id}/register`}>Register</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
