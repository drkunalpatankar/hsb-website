import React from 'react';
import '../styles/brochure.css';
import { Phone, MapPin, Mail, Globe, UserCheck, Sliders, Clock, Crown, Heart, Sparkles, Smile } from 'lucide-react';

const BrochurePreview = () => {
  return (
    <div className="brochure-container">
      {/* Controls for user (hidden in print) */}
      <div className="control-panel" style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        background: 'white',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}>
        <h3 style={{ margin: '0 0 10px 0' }}>Brochure Preview</h3>
        <button
          onClick={() => window.print()}
          style={{
            backgroundColor: 'var(--color-primary-action)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          Save as PDF / Print
        </button>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#666' }}>
          Settings: Landscape, No Margins, Background Graphics ON
        </p>
      </div>

      {/* Side 1: Outside (Back Cover, Inside Flap, Front Cover) */}
      <div className="brochure-page">
        {/* Debug Guides */}
        <div className="debug-guides">
          <div></div><div></div><div></div>
        </div>

        {/* Panel 1: Inside Flap (Benefits / Why Choose Us) */}
        <div className="brochure-panel panel-inside-flap">
          <h2 className="brochure-heading">The Heartstrings Standard</h2>
          <p className="brochure-text" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            We believe in Slow Dentistry. We take the time to listen, explain, and care, ensuring you never feel rushed.
          </p>

          <div className="feature-item" style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <UserCheck size={18} color="var(--color-primary-action)" />
              <h3 className="brochure-subheading" style={{ margin: 0 }}>Orthodontist-Led Care</h3>
            </div>
            <p className="brochure-text" style={{ margin: 0 }}>
              Direct care from a specialist, not assistants. Your smile is monitored by an expert at every visit.
            </p>
          </div>

          <div className="feature-item" style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Sliders size={18} color="var(--color-primary-action)" />
              <h3 className="brochure-subheading" style={{ margin: 0 }}>Individualised Planning</h3>
            </div>
            <p className="brochure-text" style={{ margin: 0 }}>
              No cookie-cutter approaches. We design treatment plans that respect your unique facial biology.
            </p>
          </div>

          <div className="feature-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <Clock size={18} color="var(--color-primary-action)" />
              <h3 className="brochure-subheading" style={{ margin: 0 }}>Focus on Stability</h3>
            </div>
            <p className="brochure-text" style={{ margin: 0 }}>
              We plan for long-term stability so your smile lasts a lifetime.
            </p>
          </div>
        </div>

        {/* Panel 2: Back Cover (Contact Info) */}
        <div className="brochure-panel panel-back-cover">
          <h2 className="brochure-heading" style={{ color: 'white', marginTop: '2rem' }}>Get in Touch</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginTop: '1.5rem', width: '100%' }}>

            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', textAlign: 'left', width: '80%' }}>
              <MapPin size={24} style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem' }}>
                <strong>Heartstrings & Braces</strong><br />
                123 Dental Avenue,<br />
                Mumbai, Maharashtra 400050
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', width: '80%' }}>
              <Phone size={20} />
              <div style={{ fontSize: '0.85rem' }}>+91 98765 43210</div>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', width: '80%' }}>
              <Mail size={20} />
              <div style={{ fontSize: '0.85rem' }}>hello@heartstrings.com</div>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', width: '80%' }}>
              <Globe size={20} />
              <div style={{ fontSize: '0.85rem' }}>www.heartstrings.com</div>
            </div>
          </div>

          <div style={{ marginTop: 'auto', marginBottom: '2rem', width: '80%' }}>
            <p style={{ fontSize: '0.75rem', opacity: 0.8, textAlign: 'center' }}>
              Scan to book your consultation
            </p>
            <div style={{ width: '100px', height: '100px', background: 'white', margin: '0.5rem auto' }}>
              {/* QR Code Placeholder */}
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: '0.6rem' }}>QR CODE</div>
            </div>
          </div>
        </div>

        {/* Panel 3: Front Cover */}
        <div className="brochure-panel panel-front-cover">
          <img src="/images/smile-1.png" alt="Beautiful Smile" className="brochure-img-full" />
          <div className="brochure-overlay"></div>

          <div className="front-cover-content">
            <img src="/logo.png" alt="Heartstrings & Braces Logo" style={{ width: '140px', margin: '0 auto 1.5rem auto' }} />

            <h1 className="brochure-title-large">
              Heartstrings<br />& Braces
            </h1>

            <div style={{ width: '40px', height: '2px', background: 'var(--color-primary-action)', margin: '1rem auto' }}></div>

            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.4'
            }}>
              "Because every smile has a story worth perfecting."
            </p>
          </div>
        </div>
      </div>

      {/* Side 2: Inside Content (Left, Center, Right) */}
      <div className="brochure-page">
        {/* Debug Guides */}
        <div className="debug-guides">
          <div></div><div></div><div></div>
        </div>

        {/* Panel 1: Left */}
        <div className="brochure-panel panel-inside-left">
          <h2 className="brochure-heading">Our Expertise</h2>

          <div style={{ marginTop: '0.5rem' }}>
            <h3 className="brochure-subheading" style={{ color: 'var(--color-primary-action)' }}>Orthodontics</h3>
            <p className="brochure-text">
              Evidence-based solutions for all ages.
            </p>
            <ul className="brochure-list">
              <li><strong>Metal & Ceramic Braces</strong>: Precision meets aesthetics.</li>
              <li><strong>Clear Aligners</strong>: Invisible, removable, and comfortable.</li>
              <li><strong>Growth Modulation</strong>: Guiding jaw development in children.</li>
            </ul>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h3 className="brochure-subheading" style={{ color: 'var(--color-primary-action)' }}>General Dentistry</h3>
            <p className="brochure-text">
              Keeping your oral health in perfect harmony.
            </p>
            <ul className="brochure-list">
              <li>Root Canal Treatments</li>
              <li>Cosmetic Fillings</li>
              <li>Teeth Whitening</li>
              <li>Preventive Care</li>
            </ul>
          </div>

          <img
            src="/images/smile-2.png"
            alt="Smile"
            style={{
              marginTop: 'auto',
              width: '100%',
              height: '140px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
        </div>

        {/* Panel 2: Center (Doctor Profile) */}
        <div className="brochure-panel panel-inside-center">

          <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', borderRadius: '100px 100px 0 0', marginBottom: '1.5rem' }}>
            <img
              src="/images/clinic/doctor.png"
              onError={(e) => { e.target.src = '/images/dr-krutika.png'; }} // Fallback
              alt="Dr. Krutika Patankar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 className="brochure-heading" style={{ fontSize: '1.4rem' }}>Dr. Krutika Patankar</h2>
            <p className="brochure-subheading" style={{ marginBottom: '1rem' }}>M.D.S. Orthodontics</p>

            <p className="brochure-text" style={{ textAlign: 'center', fontStyle: 'italic' }}>
              "I founded Heartstrings & Braces to bridge the gap between clinical excellence and compassionate care."
            </p>

            <p className="brochure-text" style={{ textAlign: 'center', marginTop: '1rem' }}>
              My goal is not just to straighten teeth, but to craft smiles that enhance your natural beauty.
            </p>

            <div style={{ marginTop: '1rem', display: 'inline-block', borderTop: '1px solid #ddd', paddingTop: '0.5rem' }}>
              <p className="brochure-subheading" style={{ fontSize: '0.7rem' }}>Certified Invisalign Provider</p>
            </div>
          </div>
        </div>

        {/* Panel 3: Right (Call to Action / Patient Experience) */}
        <div className="brochure-panel panel-inside-right">
          <div style={{ marginBottom: '1.5rem' }}>
            <Crown size={28} color="var(--color-primary-action)" style={{ marginBottom: '0.5rem' }} />
            <h3 className="brochure-heading">Your Experience</h3>
            <p className="brochure-text">
              We've designed our clinic to be an anxiety-free environment. From the moment you walk in, you'll notice the difference—calm, welcoming, and focused entirely on you.
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <Sparkles size={28} color="var(--color-primary-action)" style={{ marginBottom: '0.5rem' }} />
            <h3 className="brochure-heading">Technology</h3>
            <p className="brochure-text">
              We utilize the latest in dental technology to ensure your treatment is efficient, precise, and as comfortable as possible.
            </p>
          </div>

          <div style={{
            marginTop: 'auto',
            backgroundColor: 'var(--color-accent-mint)',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 className="brochure-heading" style={{ fontSize: '1.1rem' }}>Start Your Journey</h3>
            <p className="brochure-text" style={{ textAlign: 'center', marginBottom: '0' }}>
              Schedule your consultation today and discover the story behind your smile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochurePreview;
