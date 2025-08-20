import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Помогаем родителям растить уверенных и любознательных детей
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Практические консультации, занятия и готовые материалы — от кризисов до сенсорной интеграции
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-accent text-white px-6 py-3 rounded-lg">
            Записаться на консультацию
          </button>
          <button className="bg-white text-primary px-6 py-3 rounded-lg">
            Смотреть короткое видео 0:45
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
