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
export const nav=[['/','Home'],['/services','Services'],['/portfolio','Portfolio'],['/process','Process'],['/pricing','Pricing'],['/about','About'],['/blog','Blog']];
export const services=[{title:'Custom Gym Website Design',desc:'Brand-first websites engineered to convert trial members and PT leads.'},{title:'High Performance Development',desc:'Blazing-fast, secure builds that score high on Core Web Vitals.'},{title:'Booking & Class Scheduling',desc:'Integrated booking, waivers, automations, and CRM handoff.'},{title:'SEO & Growth Optimization',desc:'Local SEO + content strategy to rank for high-intent fitness searches.'}];
export const portfolio=[{slug:'ironpeak-fitness',name:'Ironpeak Fitness',img:imageVars.portfolioIronpeakImage,summary:'Membership growth site.',goals:'Increase qualified leads',results:'152% lift in leads in 90 days'},{slug:'beast-mode-training',name:'Beast Mode Training',img:imageVars.portfolioBeastModeImage,summary:'Personal training funnel.',goals:'Improve booking rate',results:'2.1x consultation bookings'},{slug:'elite-performance',name:'Elite Performance',img:imageVars.portfolioElitePerformanceImage,summary:'Athlete-centric brand refresh.',goals:'Premium positioning',results:'41% increase in avg package value'},{slug:'fitness-lab',name:'Fitness Lab',img:imageVars.portfolioFitnessLabImage,summary:'Multi-location SEO and classes.',goals:'Drive local search traffic',results:'Top-3 rankings for 12 keywords'}];
export const testimonials=[{name:'James Carter',role:'Owner, IronPeak Fitness',quote:'GYMDEV transformed our site and we saw a major increase in booked consultations.',avatar:imageVars.testimonialAvatar1},{name:'Sarah Mitchell',role:'Manager, Elite Training',quote:'The design, speed, and booking journey are exactly what our members needed.',avatar:imageVars.testimonialAvatar2},{name:'Mike Thompson',role:'Owner, Beast Mode Training',quote:'Fast, strategic, and focused on ROI. Best digital investment we made.',avatar:imageVars.testimonialAvatar3}];
export const pricing=[{name:'Starter Lift',price:'$2,900',items:['5-page website','Booking form integration','On-page SEO setup']},{name:'Pro Growth',price:'$5,900',items:['Custom design system','Advanced scheduling flows','Local SEO + analytics']},{name:'Elite Scale',price:'Custom',items:['Multi-location architecture','CRM/automation integration','Ongoing CRO + support']}];
export const posts=[1,2,3,4,5,6].map(i=>({slug:`gym-marketing-${i}`,title:['How Gyms Win Local SEO in 2026','Best Homepage Structure for Gym Conversions','Fixing Slow Gym Websites','How to Capture More Class Bookings','Branding Mistakes Fitness Studios Make','Landing Pages That Sell PT Packages'][i-1],excerpt:'Actionable tactics gym owners can deploy to grow online revenue.'}));
