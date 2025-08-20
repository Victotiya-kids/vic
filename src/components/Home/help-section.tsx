import React from 'react';

const cards = [
  'Кризисы развития — что делать «здесь и сейчас»',
  'Поведение и границы — спокойные правила без крика',
  'Режим и развитие — рабочие ритмы семьи',
  'Сенсорная интеграция — упражнения дома',
];

const HelpSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">Чем поможем</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((text) => (
            <div key={text} className="bg-surface p-6 rounded-lg shadow-light-shadwo text-text">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
