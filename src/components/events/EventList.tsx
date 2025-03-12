
import { useState } from 'react';
import EventCard, { EventType } from './EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface EventListProps {
  events: EventType[];
}

const EventList = ({ events }: EventListProps) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredEvents = {
    all: events,
    upcoming: events.filter(event => event.status === 'upcoming' || event.status === 'registration-closing'),
    completed: events.filter(event => event.status === 'completed'),
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        {(['all', 'upcoming', 'completed'] as const).map(tab => (
          <TabsContent key={tab} value={tab} className="space-y-6">
            {filteredEvents[tab].length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                No {tab === 'all' ? '' : tab} events found.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents[tab].map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default EventList;
