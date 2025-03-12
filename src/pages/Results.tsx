
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Mock data for results
const mockResults = [
  {
    id: '1',
    eventName: 'City Marathon 2023',
    eventDate: 'November 15, 2023',
    runners: [
      { position: 1, bib: '101', name: 'Carlos Santos', gender: 'M', age: 28, category: 'M 25-30', time: '2:21:45', pace: '3:21/km' },
      { position: 2, bib: '156', name: 'Marcos Silva', gender: 'M', age: 32, category: 'M 30-35', time: '2:22:30', pace: '3:23/km' },
      { position: 3, bib: '278', name: 'Felipe Oliveira', gender: 'M', age: 29, category: 'M 25-30', time: '2:24:12', pace: '3:25/km' },
      { position: 4, bib: '134', name: 'Ana Souza', gender: 'F', age: 26, category: 'F 25-30', time: '2:28:35', pace: '3:31/km' },
      { position: 5, bib: '198', name: 'Beatriz Lima', gender: 'F', age: 31, category: 'F 30-35', time: '2:29:45', pace: '3:33/km' },
      { position: 6, bib: '256', name: 'Rodrigo Pereira', gender: 'M', age: 35, category: 'M 35-40', time: '2:31:20', pace: '3:36/km' },
      { position: 7, bib: '189', name: 'Laura Mendes', gender: 'F', age: 27, category: 'F 25-30', time: '2:33:10', pace: '3:38/km' },
      { position: 8, bib: '222', name: 'Pedro Costa', gender: 'M', age: 33, category: 'M 30-35', time: '2:34:45', pace: '3:40/km' },
    ]
  },
  {
    id: '4',
    eventName: 'Forest Half Marathon',
    eventDate: 'September 5, 2023',
    runners: [
      { position: 1, bib: '452', name: 'João Martins', gender: 'M', age: 29, category: 'M 25-30', time: '1:08:22', pace: '3:14/km' },
      { position: 2, bib: '321', name: 'Daniel Costa', gender: 'M', age: 31, category: 'M 30-35', time: '1:09:15', pace: '3:17/km' },
      { position: 3, bib: '378', name: 'Maria Oliveira', gender: 'F', age: 27, category: 'F 25-30', time: '1:10:30', pace: '3:20/km' },
      { position: 4, bib: '401', name: 'Rafael Almeida', gender: 'M', age: 34, category: 'M 30-35', time: '1:11:45', pace: '3:24/km' },
      { position: 5, bib: '325', name: 'Camila Lima', gender: 'F', age: 29, category: 'F 25-30', time: '1:12:30', pace: '3:26/km' },
    ]
  },
  {
    id: '5',
    eventName: 'Sunset 5K Run',
    eventDate: 'July 30, 2023',
    runners: [
      { position: 1, bib: '512', name: 'Lucas Ferreira', gender: 'M', age: 24, category: 'M 20-25', time: '15:12', pace: '3:02/km' },
      { position: 2, bib: '578', name: 'Gabriel Santos', gender: 'M', age: 22, category: 'M 20-25', time: '15:22', pace: '3:04/km' },
      { position: 3, bib: '545', name: 'Sofia Silva', gender: 'F', age: 26, category: 'F 25-30', time: '16:30', pace: '3:18/km' },
    ]
  }
];

const Results = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(mockResults[0].id);

  const currentEvent = mockResults.find(event => event.id === selectedEvent) || mockResults[0];
  
  const filteredRunners = currentEvent.runners.filter(runner => 
    runner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    runner.bib.includes(searchTerm)
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Race Results</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              View and search for race results from our previous events
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-12">
            <Tabs defaultValue={selectedEvent} onValueChange={setSelectedEvent}>
              <TabsList className="mb-6">
                {mockResults.map(result => (
                  <TabsTrigger key={result.id} value={result.id}>
                    {result.eventName}
                  </TabsTrigger>
                ))}
              </TabsList>

              {mockResults.map(result => (
                <TabsContent key={result.id} value={result.id} className="animate-fade-in">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold">{result.eventName}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{result.eventDate}</p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search by name or bib number..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Position</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Bib</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Gender</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Age</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Category</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Time</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Pace</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRunners.length > 0 ? (
                    filteredRunners.map(runner => (
                      <tr key={runner.bib} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <td className="px-4 py-4 text-sm font-medium">
                          {runner.position === 1 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-400 text-white rounded-full">1</span>
                          ) : runner.position === 2 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-300 text-white rounded-full">2</span>
                          ) : runner.position === 3 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-700 text-white rounded-full">3</span>
                          ) : (
                            runner.position
                          )}
                        </td>
                        <td className="px-4 py-4 text-sm">{runner.bib}</td>
                        <td className="px-4 py-4 text-sm font-medium">{runner.name}</td>
                        <td className="px-4 py-4 text-sm">{runner.gender}</td>
                        <td className="px-4 py-4 text-sm">{runner.age}</td>
                        <td className="px-4 py-4 text-sm">{runner.category}</td>
                        <td className="px-4 py-4 text-sm font-medium">{runner.time}</td>
                        <td className="px-4 py-4 text-sm">{runner.pace}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                        No results found for "{searchTerm}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredRunners.length} of {currentEvent.runners.length} runners
              </p>
              <Button variant="outline">
                Download Results
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Results;
