import React, { useState } from 'react';
import ResourceCard from '../Resource/ResourceCard';

const Resources = [
  {
    title: 'Managing High Blood Pressure',
    description: 'Practical steps for everyday heart health.',
    type: 'Article',
    link: 'https://www.everydayhealth.com/fitness/guide/',
  },
  {
    title: 'Daily Heart Health Habits',
    description: 'Easy daily habits to boost your wellness.',
    type: 'Article',
    link: 'https://www.helpguide.org/wellness/fitness/the-mental-health-benefits-of-exercise',
  },
  {
    title: 'Healthy Day, Every Day',
    description: 'Healthy lifestyle made simple.',
    type: 'Article',
    link: 'https://www.health.harvard.edu/topics/exercise-and-fitness'
  },
   {
    title: 'Eating for a Smarter Brain',
    description: 'Learn how your diet impacts brain health and performance.',
    type: 'Video',
    link: 'https://youtu.be/xyQY8a-ng6g?si=by5CocOZUQDbFDGz',
  },
  {
    title: 'Healthcare: Right or Privilege?',
    description: 'Is healthcare a right or privilege?"',
    type: 'Video',
    link: 'https://youtu.be/jCVmY1iOJQs?si=_yB10Ww1DRKSp2uQ',
  },
  {
    title: 'What Makes Us Healthy?',
    description: 'How life factors shape health.',
    type: 'Video',
    link: 'https://youtu.be/8PH4JYfF4Ns?si=RkiO30g1xUJYwDPs'
  },
   {
    title: 'Quick Health Boosts',
    description: 'Fast, simple tips for daily wellness.',
    type: 'Tips',
    link: 'https://lifeandhealth.org/topics/lifestyle/healthy-habits?gad_source=1&gad_campaignid=22424464928&gbraid=0AAAAAC7gUNecLg_-wDgcqVSykUfxFqlGH&gclid=CjwKCAjwhuHEBhBHEiwAZrvdcodyDn733VYoVGoCq9y__4mkG7SSfC5WaahJh5CWP8eVKx5TkEkxmRoCS5QQAvD_BwE',
  },
  {
    title: 'Everyday Wellness Tips',
    description: 'Small changes for a healthier you.',
    type: 'Tips',
    link: 'https://www.who.int/westernpacific/newsroom/feature-stories/item/10-health-tips-for-2025',
  },
  {
    title: 'Simple Daily Health Tips',
    description: 'Easy habits for better health and energy.',
    type: 'Tips',
    link: 'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/'
  },
];

const ResourceCenter = () => {
  const [filter, setFilter] = useState('All');

  const filteredResources = filter === 'All'
    ? Resources
    : Resources.filter(item => item.type === filter);

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{color:"brown",fontWeight:"bold",margin:"20px 20px"}}>Resource Center</h2>

      {/* Filter Buttons */}
      <div style={{ marginBottom: '20px' }}>
        {['All', 'Article', 'Video', 'Tips'].map(f => (
          <button
            key={f}
            style={{
              marginRight: '10px',
              backgroundColor: filter === f ? '#EAEBD0' : '#EAEBD0',
              color: filter === f ? 'white' : 'black',
              padding: '9px 19px',
              borderRadius: '5px',
              color:"brown",
              border: "2px solid brown",
            }}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Resources List */}
      <div style={{ display: 'flex', flexWrap: 'wrap'  }}>
        {filteredResources.map((res, index) => (
          <ResourceCard key={index} {...res} />
        ))}
      </div>
    </div>
  );
};

export default ResourceCenter;