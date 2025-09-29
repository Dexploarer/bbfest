'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)'
    }}>
      {/* Festival Lodging Section */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(to bottom, #fef3c7, #fde68a)'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#92400e',
              marginBottom: '1rem'
            }}>
              Festival Lodging
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#78350f',
              maxWidth: '50rem',
              margin: '0 auto 1rem auto'
            }}>
              Convenient accommodation options within a 30-minute drive of Cynthiana, Kentucky
            </p>
            <p style={{ color: '#92400e', fontWeight: '500' }}>
              All properties available for October 4th–5th, 2025
            </p>
          </div>

          <div style={{ display: 'grid', gap: '3rem' }}>
            {/* Cynthiana Lodging */}
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#92400e',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                📍 Lodging in Cynthiana, KY
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  border: '1px solid #f59e0b',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
                >
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#92400e',
                    marginBottom: '0.5rem'
                  }}>
                    Ashford Acres Inn
                  </h4>
                  <p style={{
                    color: '#78350f',
                    fontSize: '0.875rem',
                    marginBottom: '1rem'
                  }}>
                    Historic Ambiance & Modern Comfort
                  </p>
                  <p style={{
                    color: '#92400e',
                    fontSize: '0.875rem',
                    marginBottom: '1.5rem'
                  }}>
                    Five finely decorated suites with en suite bathrooms, complimentary breakfast, free parking, and countryside access. Just minutes from the event site.
                  </p>
                  <button
                    style={{
                      backgroundColor: '#92400e',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      width: '100%'
                    }}
                    onClick={() => window.open('https://www.ashfordacresinn.com/stays', '_blank')}
                  >
                    Reserve at Ashford Acres Inn
                  </button>
                </div>

                <div style={{
                  background: 'white',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  border: '1px solid #f59e0b',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
                >
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#92400e',
                    marginBottom: '0.5rem'
                  }}>
                    BBQ Ready Retreat on Rice
                  </h4>
                  <p style={{
                    color: '#78350f',
                    fontSize: '0.875rem',
                    marginBottom: '1rem'
                  }}>
                    Private Riverside Retreat
                  </p>
                  <p style={{
                    color: '#92400e',
                    fontSize: '0.875rem',
                    marginBottom: '1.5rem'
                  }}>
                    Self-catering holiday home near Licking River with full kitchen and scenic views. Perfect for a private festival getaway.
                  </p>
                  <button
                    style={{
                      backgroundColor: '#92400e',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      width: '100%'
                    }}
                    onClick={() => window.open('https://www.booking.com/hotel/us/hike-and-fish-nature-escape-near-licking-river.html', '_blank')}
                  >
                    Reserve on Booking.com
                  </button>
                </div>
              </div>
            </div>

            {/* Paris Lodging */}
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#92400e',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                📍 Lodging in Paris, KY
                <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#78350f' }}>
                  (12 miles west, ~20 min drive)
                </span>
              </h3>

              <div style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                border: '1px solid #f59e0b',
                maxWidth: '40rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              >
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#92400e',
                  marginBottom: '0.5rem'
                }}>
                  Best Western Paris Inn
                </h4>
                <p style={{
                  color: '#78350f',
                  fontSize: '0.875rem',
                  marginBottom: '1rem'
                }}>
                  Reliable Brand-Standard Lodging
                </p>
                <p style={{
                  color: '#92400e',
                  fontSize: '0.875rem',
                  marginBottom: '1.5rem'
                }}>
                  Full breakfast buffet, free parking, and easy access to local restaurants, historic downtown Paris, and Bourbon Trail wineries.
                </p>
                <button
                  style={{
                    backgroundColor: '#92400e',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}
                  onClick={() => window.open('https://www.booking.com/hotel/us/best-western-paris-inn.html', '_blank')}
                >
                  Reserve at Best Western Paris Inn
                </button>
              </div>
            </div>

            {/* Georgetown Chain Hotels */}
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#92400e',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                📍 Chain Hotels in Georgetown, KY
                <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#78350f' }}>
                  (I-75, ~20 min north)
                </span>
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  { name: 'Best Western Plus Georgetown', desc: 'Suites & Indoor Pool', url: 'https://www.booking.com/hotel/us/best-western-plus-georgetown-corporate-center.html' },
                  { name: 'Country Inn & Suites', desc: 'Indoor Pool & Fitness', url: 'https://www.booking.com/hotel/us/country-inn-suites-georgetown-ky.html' },
                  { name: 'Hampton Inn Lexington/Georgetown', desc: 'Modern & Convenient', url: 'https://www.booking.com/hotel/us/hampton-inn-lexington-georgetown.html' },
                  { name: 'Holiday Inn Express', desc: 'Free Hot Breakfast', url: 'https://www.booking.com/hotel/us/holiday-inn-express-georgetown.html' },
                  { name: 'Super 8 by Wyndham', desc: 'Budget-Friendly', url: 'https://www.booking.com/hotel/us/super-8-by-wyndham-georgetown-ky.html' }
                ].map((hotel, index) => (
                  <div key={index} style={{
                    background: 'white',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    border: '1px solid #f59e0b',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                  }}
                  >
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: '#92400e',
                      marginBottom: '0.25rem'
                    }}>
                      {hotel.name}
                    </h4>
                    <p style={{
                      color: '#78350f',
                      fontSize: '0.75rem',
                      marginBottom: '1rem'
                    }}>
                      {hotel.desc}
                    </p>
                    <button
                      style={{
                        backgroundColor: '#92400e',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        width: '100%'
                      }}
                      onClick={() => window.open(hotel.url, '_blank')}
                    >
                      Reserve
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255,255,255,0.5)',
            borderRadius: '1rem',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              color: '#92400e',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              fontSize: '1.125rem'
            }}>
              💡 Pro Tip: Book early as festival dates fill up quickly!
            </p>
            <p style={{
              color: '#78350f',
              fontSize: '0.875rem'
            }}>
              All properties are within a 30-minute drive of Maiden City Brewing Company.
              Check individual websites for cancellation policies and current availability.
            </p>
          </div>
        </div>
      </section>

      {/* Festival Location Map */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(to bottom, #fde68a, #fcd34d)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#92400e',
            marginBottom: '1rem'
          }}>
            Festival Location
          </h2>

          <div style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              borderRadius: '0.75rem',
              overflow: 'hidden'
            }}>
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
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '0.75rem',
            padding: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '1.25rem' }}>📍</span>
            <span style={{
              color: '#92400e',
              fontWeight: 'medium',
              fontSize: '1rem'
            }}>
              272 Seabiscuit Way, Cynthiana, KY 41031
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
