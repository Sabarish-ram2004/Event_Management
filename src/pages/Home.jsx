import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import hallIcon from '../assets/hall-icon.svg'
import cateringIcon from '../assets/catering-icon.svg'
import photographyIcon from '../assets/photography-icon.svg'
import djMusicIcon from '../assets/dj-music-icon.svg'
import decorationIcon from '../assets/decoration-icon.svg'
import transportIcon from '../assets/transport-icon.svg'
import invitationIcon from '../assets/invitation-icon.svg'
import consultantIcon from '../assets/consultant-icon.svg'

export default function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const services = [
    {
      id: 1,
      icon: hallIcon,
      title: 'Hall',
      description: 'Find and book the perfect venue for your event',
      isCustomIcon: true
    },
    {
      id: 2,
      icon: cateringIcon,
      title: 'Catering',
      description: 'Delicious food options for all types of events',
      isCustomIcon: true
    },
    {
      id: 3,
      icon: photographyIcon,
      title: 'Photography/Videography',
      description: 'Professional photographers and videographers to capture your moments',
      isCustomIcon: true
    },
    {
      id: 4,
      icon: djMusicIcon,
      title: 'DJ and Music',
      description: 'Book DJs and musicians for entertainment',
      isCustomIcon: true
    },
    {
      id: 5,
      icon: decorationIcon,
      title: 'Decoration',
      description: 'Beautiful decorations and floral arrangements for any occasion',
      isCustomIcon: true
    },
    {
      id: 6,
      icon: transportIcon,
      title: 'Transport',
      description: 'Reliable transportation services for your guests',
      isCustomIcon: true
    },
    {
      id: 7,
      icon: invitationIcon,
      title: 'Invitation Card',
      description: 'Custom designed invitation cards for your event',
      isCustomIcon: true
    },
    {
      id: 8,
      icon: consultantIcon,
      title: 'Event Consultant',
      description: 'Professional event planning and coordination services',
      isCustomIcon: true
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="home-nav">
        <div className="nav-container">
          <div className="nav-logo">EventHub</div>
          
          <form className="search-bar" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search services..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <button className="nav-login" onClick={() => navigate('/login')}>LOGIN</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Create • Customize • Manage
          </h1>
          <p className="hero-subtitle">
            Reach interested audience on good visualization
          </p>
          <button className="hero-btn" onClick={() => navigate('/signup')}>Reach Consultation</button>
        </div>
      </section>

      {/* Explore Services Section */}
      <section className="explore-services" id="features">
        <div className="services-container">
          <h2 className="section-title">Explore Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                {service.image ? (
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                ) : service.isCustomIcon ? (
                  <div className="service-icon-custom">
                    <img src={service.icon} alt={service.title} className="custom-icon" />
                  </div>
                ) : (
                  <div className="service-icon">{service.icon}</div>
                )}
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-btn">View More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <h2 className="about-title">About EventHub</h2>
          <div className="about-content">
            <p>
              <strong>EventHub</strong> is a revolutionary event management ecosystem that seamlessly integrates event organizers, 
              professional vendors, and engaged guests to orchestrate truly unforgettable experiences at scale.
            </p>
            <p>
              Powered by advanced analytics, AI-driven recommendations, and real-time coordination tools, our platform 
              streamlines every aspect of event planning—from vendor selection and budget management to guest engagement and 
              post-event analytics.
            </p>
            <p>
              With our extensive vetted vendor network, intelligent matching algorithms, and comprehensive event intelligence, 
              EventHub transforms complex event management into a streamlined, data-driven experience. Whether you're organizing 
              intimate gatherings or large-scale corporate events, our platform adapts to your needs with precision and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Plan Your Event?</h2>
          <p>Join thousands of successful event organizers today</p>
          <button className="cta-btn" onClick={() => navigate('/signup')}>Get Started Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2026 EventHub. All rights reserved.</p>
      </footer>
    </div>
  )
}
