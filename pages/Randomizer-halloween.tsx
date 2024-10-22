import React, { useEffect } from "react";
import { Layout } from "../components/layout";

const data = {
  platforms: [
    'comms platform',
    'task manager',
    'publishing medium',
    'social network',
    'dating app',
    'navigation',
    'services',
    'banking',
    'HR platform',
    'virtual assistant',
    'learning platform',
    'health and wellbeing',
    'travel',
    'news and entertainment',
    'collaboration tool',
    'marketplace',
    'food and drink',
    'technical support',
  ],
  audiences: [
    'kids',
    'ghosts',
  ],
};

const shuffle = (array) => array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

const prefix = process.env.prefix ?? '';

export default function Randomizer() {
  useEffect(function mount() {
    const [randomElement1, randomElement2] = document.querySelectorAll('.random');
    const innerElement1 = randomElement1.querySelector<HTMLElement>('.inner');
    const innerElement2 = randomElement2.querySelector<HTMLElement>('.inner');
    const params = new URLSearchParams(location.search);

    const selectedPlatform = params.get('platform') ?? data.platforms[Math.floor(Math.random() * data.platforms.length)];
    const randomisedPlatforms = [...shuffle(data.platforms.filter(a => a !== selectedPlatform)), selectedPlatform];

    ['&nbsp;', ...randomisedPlatforms, ...randomisedPlatforms].forEach((platform) => {
      const platformElement = document.createElement('div');
      platformElement.innerHTML = platform;
      platformElement.classList.add('invisible');
      innerElement1.appendChild(platformElement);
    });

    const selectedAudience = params.get('audience') ?? data.audiences[Math.floor(Math.random() * data.audiences.length)];
    const randomisedAudiences = [...shuffle(data.audiences.filter(a => a !== selectedAudience)), selectedAudience];

    ['&nbsp;', ...randomisedAudiences, ...randomisedAudiences].forEach((audience) => {
      const audienceElement = document.createElement('div');
      audienceElement.innerHTML = audience;
      audienceElement.classList.add('invisible');
      innerElement2.appendChild(audienceElement);
    });

    function runPlatform() {
      setTimeout(() => {
        [...innerElement1.children].forEach(c => c.classList.remove('invisible'));
        innerElement1.style.transform = `translateY(${-2 * (data.platforms.length)}em)`;
        const selectedElement = [...innerElement1.children].find((childElement: HTMLElement) => childElement.innerText === selectedPlatform) as HTMLElement;
        selectedElement.style.transition = 'color .2s 3s';
        selectedElement.classList.add('text-mimosa');
      }, 0);
    }

    function runAudience() {
      setTimeout(() => {
        [...innerElement2.children].forEach(c => c.classList.remove('invisible'));
        innerElement2.style.transform = `translateY(${-2 * data.audiences.length}em)`;
        const selectedElement = [...innerElement2.children].find((childElement: HTMLElement) => childElement.innerText === selectedAudience) as HTMLElement;
        selectedElement.style.transition = 'color .2s 3s';
        selectedElement.classList.add('text-mimosa');
      }, 3500);
    }

    setTimeout(() => {
      runPlatform();
      runAudience();
    }, 800);

    document.querySelector('.button.reset').addEventListener('click', () => {
      const selectedElement1 = [...innerElement1.children].find((childElement: HTMLElement) => childElement.innerText === selectedPlatform) as HTMLElement;
      const selectedElement2 = [...innerElement2.children].find((childElement: HTMLElement) => childElement.innerText === selectedAudience) as HTMLElement;
      innerElement1.style.transform = '';
      innerElement2.style.transform = '';
      selectedElement1.style.transition = 'color .2s';
      selectedElement2.style.transition = 'color .2s';
      selectedElement1.classList.remove('text-mimosa');
      selectedElement2.classList.remove('text-mimosa');
    });

    document.querySelector('.button.run').addEventListener('click', () => {
      runPlatform();
      runAudience();
    });

    document.querySelector('.button.overflow').addEventListener('click', () => {
      randomElement1.classList.toggle('overflow-hidden');
      randomElement2.classList.toggle('overflow-hidden');
      innerElement1.classList.toggle('text-smoke');
      innerElement2.classList.toggle('text-smoke');
    });
  });

  return (
    <Layout>
      <main className="min-h-[100dvh] grid">
        <div className="grid bg-mimosa px-6 py-14 max-tablet:pb-6 tablet:px-16 tablet:m-4 text-center">
          <div className="flex justify-center items-start">
            <a href={`${prefix}/`} aria-label="Home">
              <img className="mx-auto" src={`${prefix}/assets/manyhands-logo.svg`} alt="Many Hands" width="188px" height="34px"/>
            </a>
          </div>

          <div className="max-tablet:grid content-start justify-center whitespace-nowrap self-center">
            <span className="random inline-grid relative h-[2em] leading-loose text-xl mobile:text-2xl desktop:text-4xl font-semibold font-tiempos text-mimosa/75 bg-smoke/95 px-2 overflow-hidden tablet:text-right mx-2"><div className="inner transition-transform duration-[3s]"></div></span>
            <span className="max-w-[22rem] tablet:max-w-lg my-2 tablet:my-8 moile:text-xl desktop:text-2xl font-semibold mx-auto">for</span>
            <span className="random inline-grid relative h-[2em] leading-loose text-xl mobile:text-2xl desktop:text-4xl font-semibold font-tiempos text-mimosa/75 bg-smoke/95 px-2 overflow-hidden tablet:text-left mx-2"><div className="inner transition-transform duration-[3s]"></div></span>
          </div>

          <div className="flex flex-wrap items-end justify-end content-end gap-4 static z-10">
            <button className="button h-10 reset">◼</button>
            <button className="button h-10 run">▶</button>
            <button className="button h-10 overflow">±</button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
