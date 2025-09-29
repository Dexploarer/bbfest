'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Ticket, Beer, Music, Users, Star } from 'lucide-react';

export default function Home() {
  const [activeDay, setActiveDay] = useState('saturday');

  const saturdayArtists = [
    'Trudy Sosbe Rose', 'Logan Bolling', 'Greyson June', 'Nathan Coots',
    'John Isaacs', 'Luke Trimble', 'Logan Purcell', 'Justin Ratcliff',
    'Johnathon Cox', 'Matthew Douglas Simpson', 'Daniel Cain',
    'Lance Rogers', 'Wes Shipp', 'Joe Clark', 'Chris Knight'
  ];

  const sundayArtists = [
    'Hannah Wheeler', 'Westley Metcalfe', 'Arianna & The Bourbon Britches',
    'Gracie Yates', 'Brock Burton & No Handshakes Band',
    'Cody Lee Meece & The Poor Excuses', 'Moonlight Mile',
    'Smilo & The Ghost', 'Buffalo wabs and The Price Hill Hustle', 'Paul McDonald and the Mourning Doves'
  ];

  const ticketOptions = [
    {
      type: 'Single-Day Pass',
      price: '$50',
      description: 'Access to one day of music and vendor fair',
      features: ['All-day music access', 'Vendor fair entry', 'Food truck access']
    },
    {
      type: 'Weekend Pass',
      price: '$90',
      description: 'Both days of festival access',
      features: ['2-day music access', 'Vendor fair entry', 'Food truck access', 'Best value'],
      popular: true
    },
    {
      type: 'Group Discount',
      price: '$70',
      description: 'Per person for 10+ weekend passes',
      features: ['Group of 10+', '2-day access', 'Vendor fair entry', 'Group seating']
    },
    {
      type: 'VIP Pass',
      price: '$190',
      description: 'Premium festival experience',
      features: ['Premium viewing area', 'Private food window', 'Exclusive amenities', 'VIP seating'],
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-orange-100 via-amber-100 to-orange-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 font-serif animate-slide-up text-gradient">
              Ballads & Brews
            </h1>
            <p className="text-2xl md:text-3xl text-amber-800 font-light mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Music Festival 2025
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-amber-700 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>October 4-5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Cynthiana, Kentucky</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Gates 11 AM • Music Noon</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-amber-300 shadow-2xl bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Music className="h-12 w-12 text-amber-700" />
                    <Beer className="h-12 w-12 text-amber-700" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-amber-900 font-serif">
                      Festival Highlights
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-800">25+</div>
                        <div className="text-sm text-amber-700">Artists</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-800">2</div>
                        <div className="text-sm text-amber-700">Days</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-800">4</div>
                        <div className="text-sm text-amber-700">Acre Field</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-800">∞</div>
                        <div className="text-sm text-amber-700">Good Vibes</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3 text-amber-800">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span>Live music from noon to 10:30 PM</span>
                      </div>
                      <div className="flex items-center gap-3 text-amber-800">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span>Craft beer & bourbon tastings</span>
                      </div>
                      <div className="flex items-center gap-3 text-amber-800">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span>Local vendor fair & food trucks</span>
                      </div>
                      <div className="flex items-center gap-3 text-amber-800">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span>Family-friendly atmosphere</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <img
              src="/assets/c1833c7a-716a-489e-bb90-e8e66cc0971f.png"
              alt="Festival Lineup Board"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

            <Button
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-xl rounded-full shadow-lg hover-lift animate-glow transition-all duration-300"
              onClick={() => window.open('https://www.curtaincalltickets.com/events/buy-tickets/y40eeQzk0nFwo9vk5Lot', '_blank')}
            >
              <Ticket className="h-6 w-6 mr-2 animate-float" />
              Get Your Tickets Now
            </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">A Partnership of Music & Craft</h2>
            <p className="text-xl text-amber-700 max-w-4xl mx-auto leading-relaxed">
              The Train Station (Corbin, KY) has partnered with Maiden City Brewing Company to bring you this 
              two-day celebration of live music and craft beer. Experience Appalachian storytelling, folk and 
              Americana tunes on Maiden City's spacious 4-acre field, paired with locally crafted beers, 
              bourbon tastings, and regional cuisine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-fade-in group">
              <CardHeader className="text-center">
                <Music className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:animate-bounce transition-all duration-300" />
                <CardTitle className="text-amber-900">Live Music</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 text-center">
                  Two days of continuous performances featuring regional singer-songwriters and touring acts
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-fade-in group" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="text-center">
                <Beer className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:animate-bounce transition-all duration-300" />
                <CardTitle className="text-amber-900">Craft Brews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 text-center">
                  Local craft beers, distilled bourbons, and specialty drinks from Maiden City Brewing
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-fade-in group" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:animate-bounce transition-all duration-300" />
                <CardTitle className="text-amber-900">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 text-center">
                  Vendor fair, food trucks, and a welcoming atmosphere for all ages to enjoy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maiden City Gallery */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Maiden City Gallery</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Experience the beauty of Maiden City through our curated collection of local photography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift scroll-reveal animate-fade-in">
              <img
                src="/assets/mc2.jpg"
                alt="Maiden City Brewing Company exterior and beer garden"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Local Brewery & Venue</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift scroll-reveal animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img
                src="/assets/mc3.jpg"
                alt="Festival atmosphere and crowd enjoying live music"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Live Music Experience</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift scroll-reveal animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="/assets/mc4.jpg"
                alt="Craft beer selection and local brews"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Craft Beer Selection</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift scroll-reveal animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img
                src="/assets/mc5.avif"
                alt="Kentucky countryside and festival surroundings"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">Kentucky Countryside</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-amber-700 italic">
              Photography captured throughout Cynthiana, Kentucky
            </p>
          </div>
        </div>
      </section>

      {/* Train Station Partnership Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">About The Train Station</h2>
              <p className="text-xl text-amber-700 mb-6 leading-relaxed">
                The Train Station is a beloved live music venue and event center in Corbin, Kentucky. 
                Known for championing original artists, "Kentucky Unplugged" showcases, and community 
                dance nights, it has hosted everything from intimate listening-room sets to full-band throwdowns.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900">Previous Location</p>
                    <p className="text-amber-700">4672 5th Street Road, Corbin, KY 40701</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Music className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900">Programming Highlights</p>
                    <p className="text-amber-700">Original music, line dancing, community shows</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900">Capacity</p>
                    <p className="text-amber-700">Up to ~500 guests</p>
                  </div>
                </div>
              </div>

              <Card className="border-amber-300 bg-gradient-to-br from-amber-100 to-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">2025–2026 Venue Update</h3>
                  <p className="text-amber-800 mb-3">
                    The Train Station is <strong>temporarily closed</strong>. We are building the next chapter now.
                  </p>
                  <p className="text-amber-800 mb-4">
                    <strong>Look for us at our new location in 2026.</strong>
                  </p>
                  <p className="text-sm text-amber-700">
                    Follow updates on social media and our website for the new address, opening timeline, and first-run shows.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-amber-900 mb-4">Festival Partnership</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <Music className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-amber-900">The Train Station</p>
                      <p className="text-xs text-amber-700">Corbin, KY</p>
                    </div>
                    <div className="text-4xl text-amber-600">+</div>
                    <div className="text-center">
                      <Beer className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-amber-900">Maiden City Brewing</p>
                      <p className="text-xs text-amber-700">Cynthiana, KY</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl text-amber-600 mb-2">=</div>
                    <p className="text-lg font-bold text-amber-900">Ballads & Brews 2025</p>
                  </div>
                  
                  <p className="text-amber-700 text-sm leading-relaxed">
                    The Train Station helped assemble and promote the Ballads & Brews lineup, 
                    bringing together Kentucky's finest songwriters for this special celebration 
                    at Maiden City Brewing Company.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal animate-fade-in">
            <h2 className="text-4xl font-bold text-amber-900 mb-6 text-gradient">Festival Lineup</h2>
            <p className="text-xl text-amber-700">
              Featuring Kentucky's finest songwriters and touring acts
            </p>
          </div>

          <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-amber-100">
              <TabsTrigger 
                value="saturday" 
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Saturday, Oct 4
              </TabsTrigger>
              <TabsTrigger 
                value="sunday"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Sunday, Oct 5
              </TabsTrigger>
            </TabsList>

            <TabsContent value="saturday" className="space-y-6">
              <Card className="border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900 text-center flex items-center justify-center gap-2">
                    <Star className="h-6 w-6" />
                    Saturday Lineup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {saturdayArtists.map((artist, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={`p-3 text-center justify-center ${
                          artist === 'Chris Knight' 
                            ? 'bg-amber-600 text-white border-amber-600 text-lg font-bold' 
                            : 'border-amber-300 text-amber-800 hover:bg-amber-100'
                        }`}
                      >
                        {artist}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Badge className="bg-amber-600 text-white px-4 py-2 text-lg">
                      Headliner: Chris Knight
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sunday" className="space-y-6">
              <Card className="border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900 text-center flex items-center justify-center gap-2">
                    <Star className="h-6 w-6" />
                    Sunday Lineup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sundayArtists.map((artist, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={`p-3 text-center justify-center ${
                          artist === 'Paul McDonald and the Mourning Doves' || artist === 'Buffalo wabs and The Price Hill Hustle'
                            ? 'bg-amber-600 text-white border-amber-600 text-lg font-bold'
                            : 'border-amber-300 text-amber-800 hover:bg-amber-100'
                        }`}
                      >
                        {artist}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Badge className="bg-amber-600 text-white px-4 py-2 text-lg">
                      Co-Headliners: Paul McDonald and the Mourning Doves & Buffalo wabs and The Price Hill Hustle
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Spotify Playlist Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6 text-gradient scroll-reveal animate-fade-in">Festival Soundtrack</h2>
          <p className="text-xl text-amber-700 mb-12 scroll-reveal animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Get in the mood with our official playlist featuring all the artists performing at Ballads & Brews
          </p>

          <div className="scroll-reveal animate-scale-in bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/0fmZAygl9DOcbVoQ90vUGO?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Ballads & Brews Festival Playlist"
              className="rounded-2xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal animate-fade-in">
            <h2 className="text-4xl font-bold text-amber-900 mb-6 text-gradient">Festival Tickets</h2>
            <p className="text-xl text-amber-700">
              Choose your festival experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketOptions.map((ticket, index) => (
              <Card
                key={index}
                className={`border-2 shadow-lg hover-lift scroll-reveal animate-scale-in group cursor-pointer ${
                  ticket.popular
                    ? 'border-amber-500 bg-gradient-to-b from-amber-50 to-orange-50 hover:shadow-amber-200'
                    : ticket.premium
                    ? 'border-orange-500 bg-gradient-to-b from-orange-50 to-red-50 hover:shadow-orange-200'
                    : 'border-amber-200 hover:border-amber-300 hover:shadow-amber-100'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open('https://www.curtaincalltickets.com/events/buy-tickets/y40eeQzk0nFwo9vk5Lot', '_blank')}
                role="button"
                tabIndex={0}
                aria-label={`Purchase ${ticket.type} - ${ticket.price}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.open('https://www.curtaincalltickets.com/events/buy-tickets/y40eeQzk0nFwo9vk5Lot', '_blank');
                  }
                }}
              >
                <CardHeader className="text-center relative">
                  {ticket.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  {ticket.premium && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                      Premium
                    </Badge>
                  )}
                  <CardTitle className="text-xl text-amber-900">{ticket.type}</CardTitle>
                  <div className="text-3xl font-bold text-amber-700 mt-2">{ticket.price}</div>
                  <p className="text-sm text-amber-600 mt-2">{ticket.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-amber-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-6 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://www.curtaincalltickets.com/events/buy-tickets/y40eeQzk0nFwo9vk5Lot', '_blank')}
            >
              <Ticket className="h-6 w-6 mr-2" />
              Purchase Tickets
            </Button>
            <p className="text-sm text-amber-600 mt-4">
              Rain or shine event • No refunds for weather
            </p>
          </div>
        </div>
      </section>

      {/* Lodging Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal animate-fade-in">
            <h2 className="text-4xl font-bold text-amber-900 mb-6 text-gradient">Festival Lodging</h2>
            <p className="text-xl text-amber-700 max-w-4xl mx-auto">
              Convenient overnight accommodations within a 30-minute drive of Maiden City Brewing Company.
              From historic bed-and-breakfasts to full-service chain hotels, find the perfect place to rest between festival days.
            </p>
          </div>

          {/* Cynthiana Lodging */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center scroll-reveal animate-fade-in">🏠 Cynthiana, KY</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-amber-900 text-xl">Ashford Acres Inn</CardTitle>
                  <div className="flex items-center gap-2 text-amber-700 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Kentucky Highway 36 East • 5 minutes from venue</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 mb-4">
                    Historic ambiance with modern comfort. Five finely decorated suites with en suite bathrooms,
                    complimentary breakfast, and free parking.
                  </p>
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => window.open('https://www.ashfordacresinn.com/stays', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-amber-900 text-xl">BBQ Ready Retreat on Rice</CardTitle>
                  <div className="flex items-center gap-2 text-amber-700 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Near Licking River • Private riverside retreat</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 mb-4">
                    Self-catering holiday home with full kitchen and scenic views.
                    Perfect for groups seeking a private countryside escape.
                  </p>
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => window.open('https://www.booking.com/hotel/us/hike-and-fish-nature-escape-near-licking-river.html', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Paris Lodging */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center scroll-reveal animate-fade-in">🏨 Paris, KY</h3>
            <div className="max-w-md mx-auto">
              <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-amber-900 text-xl">Best Western Paris Inn</CardTitle>
                  <div className="flex items-center gap-2 text-amber-700 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Alverson Drive • 20 minutes from venue</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 mb-4">
                    Reliable brand-standard lodging with full breakfast buffet and free parking.
                    Easy access to local restaurants, historic downtown Paris, and Bourbon Trail wineries.
                  </p>
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => window.open('https://www.booking.com/hotel/us/best-western-paris-inn.html', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Georgetown Chain Hotels */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center scroll-reveal animate-fade-in">🏢 Chain Hotels in Georgetown, KY</h3>
            <p className="text-center text-amber-700 mb-8">Interstate 75 access • 20 minutes from venue</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-amber-900 text-lg">Best Western Plus Georgetown</CardTitle>
                  <div className="text-amber-700 text-sm mb-2">Suites • Indoor Pool • Breakfast</div>
                </CardHeader>
                <CardContent>
                  <Button
                    size="sm"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => window.open('https://www.booking.com/hotel/us/best-western-plus-georgetown-corporate-center.html', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle className="text-amber-900 text-lg">Country Inn & Suites</CardTitle>
                  <div className="text-amber-700 text-sm mb-2">Indoor Pool • Fitness Center</div>
                </CardHeader>
                <CardContent>
                  <Button
                    size="sm"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => window.open('https://www.booking.com/hotel/us/country-inn-suites-georgetown-ky.html', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="text-amber-900 text-lg">Hampton Inn Lexington/Georgetown</CardTitle>
                  <div className="text-amber-700 text-sm mb-2">Modern Rooms • Express Check-in</div>
                </CardHeader>
                <CardContent>
                  <Button
                    size="sm"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => window.open('https://www.booking.com/hotel/us/hampton-inn-lexington-georgetown.html', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <CardTitle className="text-amber-900 text-lg">Holiday Inn Express</CardTitle>
                  <div className="text-amber-700 text-sm mb-2">Shuttle Service • Hot Breakfast</div>
                </CardHeader>
                <CardContent>
                  <Button
                    size="sm"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => window.open('https://www.booking.com/hotel/us/holiday-inn-express-georgetown.html', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover-lift scroll-reveal animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <CardTitle className="text-amber-900 text-lg">Super 8 by Wyndham</CardTitle>
                  <div className="text-amber-700 text-sm mb-2">Budget Friendly • Continental Breakfast</div>
                </CardHeader>
                <CardContent>
                  <Button
                    size="sm"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => window.open('https://www.booking.com/hotel/us/super-8-by-wyndham-georgetown-ky.html', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-300 bg-gradient-to-b from-amber-50 to-orange-50 shadow-lg hover-lift scroll-reveal animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <CardHeader>
                  <CardTitle className="text-amber-900 text-lg">Hilton Garden Inn</CardTitle>
                  <div className="text-amber-700 text-sm mb-2">Full Service • Restaurant</div>
                  <Badge className="w-fit bg-orange-500 text-white">Popular Choice</Badge>
                </CardHeader>
                <CardContent>
                  <Button
                    size="sm"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => window.open('https://www.booking.com/hotel/us/hilton-garden-inn-lexington-georgetown.html', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center scroll-reveal animate-fade-in">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-amber-900 mb-4">💡 Booking Tips</h4>
              <ul className="text-left text-amber-700 space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>All properties can accommodate stays for October 4th–5th, 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Book early as festival weekends fill up quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Check for festival attendee discounts and packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Many properties offer free cancellation up to 24-48 hours before arrival</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Festival Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img
              src="/assets/3d28ad39-a352-4d57-ac69-58f9012aea40.png"
              alt="Local brews and food trucks"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <img
              src="/assets/3a7559c0-da95-4334-9fed-4d05f3ee0eb6.png"
              alt="Festival atmosphere"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Venue Information</h3>
              <Card className="border-amber-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-900">Maiden City Brewing Company</p>
                        <p className="text-amber-700">272 Seabiscuit Way, Cynthiana, KY 41031</p>
                        <p className="text-sm text-amber-600">Spacious 4-acre field with gentle slopes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-900">Festival Hours</p>
                        <p className="text-amber-700">Gates: 11:00 AM • Music: 12:00 PM - 10:30 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Festival Location</h3>
            <Card className="border-amber-200 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9889!2d-84.3947!3d38.4028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8847c2b7c5c0a4b1%3A0x4b7c5c0a4b1c2b7!2s272%20Seabiscuit%20Way%2C%20Cynthiana%2C%20KY%2041031!5e0!3m2!1sen!2sus!4v1695322800000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Maiden City Brewing Company Location"
                  ></iframe>
                </div>
                <div className="p-4 bg-amber-50">
                  <div className="flex items-center justify-center gap-2 text-amber-700">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">272 Seabiscuit Way, Cynthiana, KY 41031</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-6">What to Bring</h3>
              <Card className="border-amber-200 shadow-lg">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Blankets or low-back chairs (preferred seating)
                    </li>
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Rain gear (no umbrellas allowed)
                    </li>
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Comfortable shoes for hilly terrain
                    </li>
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Cash and cards for vendors
                    </li>
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Water bottle to stay hydrated
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ballads & Brews 2025</h3>
          <p className="text-xl mb-4">Where the finest ballads meet the tastiest brews</p>

          <div className="mb-8">
            <p className="text-lg mb-4 text-amber-200 text-center">Presented by</p>
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/assets/ts.png"
                  alt="The Train Station Logo"
                  className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <p className="text-sm text-amber-300">The Train Station</p>
              </div>
              <div className="text-amber-200 text-2xl">&</div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/assets/tp.png"
                  alt="Maiden City Brewing Logo"
                  className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <p className="text-sm text-amber-300">Maiden City Brewing</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <span>October 4-5, 2025</span>
            <span>•</span>
            <span>Maiden City Brewing Company</span>
            <span>•</span>
            <span>Cynthiana, Kentucky</span>
          </div>

          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full shadow-lg hover-lift animate-glow transition-all duration-300"
            onClick={() => window.open('https://www.curtaincalltickets.com/events/buy-tickets/y40eeQzk0nFwo9vk5Lot', '_blank')}
          >
            <Ticket className="h-5 w-5 mr-2 animate-float" />
            Get Tickets Now
          </Button>

          <div className="mt-8 pt-8 border-t border-amber-800 text-center text-amber-300">
            <p>&copy; 2025 The Train Station & Ballads & Brews Music Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}