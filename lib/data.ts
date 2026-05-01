export const imageVars = {
  heroAthleteImage: 'heroAthleteImage',
  ctaAthleteImage: 'ctaAthleteImage',
  portfolioIronpeakImage: 'portfolioIronpeakImage',
  portfolioBeastModeImage: 'portfolioBeastModeImage',
  portfolioElitePerformanceImage: 'portfolioElitePerformanceImage',
  portfolioFitnessLabImage: 'portfolioFitnessLabImage',
  aboutFounderImage: 'aboutFounderImage',
  testimonialAvatar1: 'testimonialAvatar1',
  testimonialAvatar2: 'testimonialAvatar2',
  testimonialAvatar3: 'testimonialAvatar3',
  ogHomeImage: 'ogHomeImage',
};

export const nav=[['/','Home'],['/services','Services'],['/portfolio','Portfolio'],['/process','Process'],['/about','About'],['/blog','Blog']];

export const services=[
  {title:'Custom Gym Website Design',desc:'Brand-first websites built to convert visitors into trial members and paying clients.',icon:'🎨'},
  {title:'High Performance Development',desc:'Blazing-fast builds that score on Core Web Vitals and load under 1.5s on mobile.',icon:'⚡'},
  {title:'Booking & Class Scheduling',desc:'Integrated booking flows, waivers, and CRM handoff so leads never fall through the cracks.',icon:'📅'},
  {title:'SEO & Growth Optimization',desc:'Local SEO and content strategy to rank for high-intent fitness searches in your city.',icon:'📈'},
  {title:'Maintenance & Support',desc:'Need changes after launch? We handle it. One-off fixes or structured plans — we sort it out.',icon:'🔧'},
];

export const portfolio=[{slug:'ironpeak-fitness',name:'Ironpeak Fitness',img:imageVars.portfolioIronpeakImage,summary:'Membership growth site.',goals:'Increase qualified leads',results:'152% lift in leads in 90 days'},{slug:'beast-mode-training',name:'Beast Mode Training',img:imageVars.portfolioBeastModeImage,summary:'Personal training funnel.',goals:'Improve booking rate',results:'2.1x consultation bookings'},{slug:'elite-performance',name:'Elite Performance',img:imageVars.portfolioElitePerformanceImage,summary:'Athlete-centric brand refresh.',goals:'Premium positioning',results:'41% increase in avg package value'},{slug:'fitness-lab',name:'Fitness Lab',img:imageVars.portfolioFitnessLabImage,summary:'Multi-location SEO and classes.',goals:'Drive local search traffic',results:'Top-3 rankings for 12 keywords'}];

export const testimonials=[
  {quote:'Our trial signups went from 2-3 a month to 14 in the first month live. The site paid for itself week one.',industry:'Boutique fitness studio, Brisbane'},
  {quote:'The design, load speed, and booking flow are exactly what our members needed. Inquiries doubled.',industry:'CrossFit box, Melbourne'},
  {quote:'Fast, strategic, and focused on results. Best investment we made for the business.',industry:'Personal training studio, Sydney'},
];

export const posts=[1,2,3,4,5,6].map(i=>({slug:`gym-marketing-${i}`,title:['How Gyms Win Local SEO in 2026','Best Homepage Structure for Gym Conversions','Fixing Slow Gym Websites','How to Capture More Class Bookings','Branding Mistakes Fitness Studios Make','Landing Pages That Sell PT Packages'][i-1],excerpt:'Actionable tactics gym owners can deploy to grow online revenue.'}));
