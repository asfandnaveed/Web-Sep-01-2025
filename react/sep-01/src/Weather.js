import { useEffect, useState } from 'react';
import './Weather.css';

function Weather() {

  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  const [city, setCity] = useState('Lahore');

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=API&q=${city}`)
      .then(res => res.json())
      .then(weather => {
        setData(weather);
        setLoading(false);
      })

  }, [city]);


  if (loading) {
    return (
      <h2>Loading . . . </h2>
    );
  }


  return (
    < div className="wx-root" >
      {/* Left (Now) Panel */}
      < aside className="wx-now" >
        <div className="wx-search">
          <span className="wx-search-icon" aria-hidden="true">
            {/* magnifier */}
            <svg viewBox="0 0 24 24"><path d="M21 21l-4.5-4.5M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </span>
          <input
            placeholder="Search city…"
            aria-label="Search city"
            onChange={inp => setCity(inp.target.value) }
            value={city}
          />
        </div>

        <div className="wx-hero">
          {/* Sun + Cloud + Rain icon */}
          <svg className="wx-hero-icon" viewBox="0 0 160 110" aria-hidden="true">
            <defs>
              <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFD26F" />
                <stop offset="100%" stopColor="#FCA311" />
              </linearGradient>
              <linearGradient id="cloudGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#AFC7F8" />
                <stop offset="100%" stopColor="#8EA8E6" />
              </linearGradient>
            </defs>
            {/* sun */}
            <circle cx="44" cy="34" r="22" fill="url(#sunGrad)" />
            {/* sun rays */}
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i * Math.PI) / 4;
              const x1 = 44 + Math.cos(a) * 30;
              const y1 = 34 + Math.sin(a) * 30;
              const x2 = 44 + Math.cos(a) * 38;
              const y2 = 34 + Math.sin(a) * 38;
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#FFC145" strokeWidth="4" strokeLinecap="round" />
              );
            })}
            {/* cloud */}
            <g transform="translate(40,40)">
              <path d="M25 35c-8 0-14-6-14-14 0-9 7-15 16-15 6 0 11 3 13 8 1-1 3-1 4-1 8 0 14 6 14 14s-6 14-14 14H25z"
                fill="url(#cloudGrad)" />
            </g>
            {/* rain drops */}
            <g stroke="#B9D6F3" strokeWidth="6" strokeLinecap="round">
              <line x1="78" y1="92" x2="72" y2="104" />
              <line x1="98" y1="92" x2="92" y2="104" />
              <line x1="118" y1="92" x2="112" y2="104" />
            </g>
          </svg>

          <div className="wx-temp"> {data.current.temp_c}<span>°C</span></div>

          <div className="wx-place">
            <div className="wx-city">Kuala Lumpur</div>
            <div className="wx-day">Monday</div>
          </div>

          <div className="wx-conditions">
            <div className="wx-cond">
              <span className="wx-dot" />
              Light Rain
            </div>
            <div className="wx-cond">
              <svg viewBox="0 0 24 24" className="wx-mini" aria-hidden="true"><path d="M6 16a6 6 0 1 1 4-10m6 2a4 4 0 1 1 0 8H6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              Min Temperature – 28°C
            </div>
            <div className="wx-cond">
              <svg viewBox="0 0 24 24" className="wx-mini" aria-hidden="true"><path d="M6 16a6 6 0 1 1 4-10m6 2a4 4 0 1 1 0 8H6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              Max Temperature – 31°C
            </div>
          </div>

          <div className="wx-pills">
            <div className="wx-pill">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M5 7v10m14-6v2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <div>
                <div className="wx-pill-label">Humidity</div>
                <div className="wx-pill-value">83%</div>
              </div>
            </div>
            <div className="wx-pill">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18M8 8l-3 4 3 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <div>
                <div className="wx-pill-label">Wind Speed</div>
                <div className="wx-pill-value">6km/h</div>
              </div>
            </div>
          </div>
        </div>
      </aside >

      {/* Divider */}
      < div className="wx-divider" />

      {/* Right Panel */}
      < main className="wx-dash" >
        <div className="wx-tabs">
          <button className="wx-tab">Today</button>
          <button className="wx-tab active">Week</button>
        </div>

        <section className="wx-week">
          {[
            { d: "Sun", t: "32°", icon: "wind-sun" },
            { d: "Mon", t: "31°", icon: "sun" },
            { d: "Tue", t: "27°", icon: "cloud" },
            { d: "Wed", t: "31°", icon: "rain-sun" },
            { d: "Thu", t: "25°", icon: "rain" },
            { d: "Fri", t: "26°", icon: "rain" },
            { d: "Sat", t: "30°", icon: "rain-sun" },
          ].map(({ d, t, icon }) => (
            <article key={d} className="wx-week-card">
              <div className="wx-week-day">{d}</div>
              <div className="wx-week-icon">{getIcon(icon)}</div>
              <div className="wx-week-temp">{t}</div>
            </article>
          ))}
        </section>

        <h3 className="wx-section-title">Today’s Overview</h3>
        <section className="wx-overview">
          <OverviewCard
            title="Air Quality Index"
            value="53"
            subtitle="Good"
            rightIcon={
              <span className="wx-badge neutral" title="Pollen Advisory">🌼</span>
            }
          />
          <OverviewCard
            title="UV Index"
            value="3"
            subtitle="Moderate"
            rightIcon={<span className="wx-badge warn" title="UV Advisory">UV</span>}
          />
          <OverviewCard
            title="Pressure (hpa)"
            value="1006"
            subtitle="Normal"
            rightIcon={<span className="wx-badge rain" title="Rainy">🌧️</span>}
          />
        </section>

        <section className="wx-bottom">
          <div className="wx-card wx-precip">
            <div className="wx-card-title">Precipitation</div>
            {/* tiny sparkline-style chart (hard-coded) */}
            <svg viewBox="0 0 600 160" className="wx-chart" aria-label="Precipitation chart">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
                points="10,110 80,95 150,100 220,85 290,90 360,120 430,105 500,130 590,80"
                opacity="0.9"
              />
              <g opacity="0.25">
                {[...Array(5)].map((_, i) => (
                  <line key={i} x1="0" x2="600" y1={30 + i * 26} y2={30 + i * 26} />
                ))}
              </g>
            </svg>
            <div className="wx-xaxis">
              {["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="wx-card wx-sun">
            <div className="wx-card-title">Sunrise & Sunset</div>
            <div className="wx-sun-rows">
              <div className="wx-sun-row">
                <div className="wx-sun-icon" aria-hidden="true">{getIcon("sunrise")}</div>
                <div>
                  <div className="wx-sun-label">Sunrise</div>
                  <div className="wx-sun-time">7:06 AM</div>
                </div>
              </div>
              <div className="wx-sun-row">
                <div className="wx-sun-icon" aria-hidden="true">{getIcon("sunset")}</div>
                <div>
                  <div className="wx-sun-label">Sunset</div>
                  <div className="wx-sun-time">7:03 PM</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
    </div >
  );
}

/* ---------- Small Components ---------- */

function OverviewCard({ title, value, subtitle, rightIcon }) {
  return (
    <div className="wx-card wx-overview-card">
      <div className="wx-card-title">{title}</div>
      <div className="wx-overview-row">
        <div className="wx-overview-value">{value}</div>
        <div className="wx-overview-aside">
          {rightIcon}
        </div>
      </div>
      <div className="wx-overview-sub">{subtitle}</div>
    </div>
  );
}

function getIcon(name) {
  switch (name) {
    case "sun":
      return (
        <svg viewBox="0 0 24 24" className="wx-ico">
          <circle cx="12" cy="12" r="5" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i * Math.PI) / 4;
            const x1 = 12 + Math.cos(a) * 8;
            const y1 = 12 + Math.sin(a) * 8;
            const x2 = 12 + Math.cos(a) * 11.5;
            const y2 = 12 + Math.sin(a) * 11.5;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className="wx-ico">
          <path d="M7 17a5 5 0 0 1 0-10 6 6 0 0 1 11.5 2H19a4 4 0 1 1 0 8H7z" />
        </svg>
      );
    case "rain":
      return (
        <svg viewBox="0 0 24 24" className="wx-ico">
          <path d="M7 14a5 5 0 0 1 0-10 6 6 0 0 1 11.5 2H19a4 4 0 1 1 0 8H7z" />
          <g strokeWidth="1.8" strokeLinecap="round" fill="none">
            <line x1="8" y1="17" x2="6.5" y2="20" />
            <line x1="12" y1="17" x2="10.5" y2="20" />
            <line x1="16" y1="17" x2="14.5" y2="20" />
          </g>
        </svg>
      );
    case "rain-sun":
      return (
        <div className="wx-ico-stack">
          {getIcon("sun")}
          {getIcon("rain")}
        </div>
      );
    case "wind-sun":
      return (
        <div className="wx-ico-stack">
          {getIcon("sun")}
          <svg viewBox="0 0 24 24" className="wx-ico">
            <path d="M4 10h9a3 3 0 1 0-3-3" fill="none" strokeWidth="1.8" />
            <path d="M3 14h12a3 3 0 1 1-3 3" fill="none" strokeWidth="1.8" />
          </svg>
        </div>
      );
    case "sunrise":
      return (
        <svg viewBox="0 0 24 24" className="wx-ico">
          <path d="M4 18h16M6 15a6 6 0 0 1 12 0" fill="none" strokeWidth="1.8" />
          <path d="M12 7V3m0 0l-3 3m3-3 3 3" fill="none" strokeWidth="1.8" />
        </svg>
      );
    case "sunset":
      return (
        <svg viewBox="0 0 24 24" className="wx-ico">
          <path d="M4 18h16M6 15a6 6 0 0 1 12 0" fill="none" strokeWidth="1.8" />
          <path d="M12 11v4m0 0l-3-3m3 3 3-3" fill="none" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
}

export default Weather;