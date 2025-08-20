import React from 'react';

const values = [
  'доказательность',
  'персональные планы',
  '«малые шаги»',
  'уважение к семье',
];

const ValuesSection = () => {
  return (
    <section className="bg-background">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">Ценности и подход</h2>
        <ul className="max-w-md mx-auto list-disc space-y-2 text-text">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ValuesSection;
