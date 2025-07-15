import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Future Naval Officer',
    imgSrc: require('@site/static/img/carlVinson.jpg').default,
    alt: 'Ben on the USS Carl Vinson departing Pearl Harbor, HI',
    description: (
      <>
        Upon graduation from the US Naval Academy in May, 2026, I will comission as an
        active duty submarine officer in the US Navy.
      </>
    ),
  },
  {
    title: 'Engineer',
    imgSrc: require('@site/static/img/capstoneDay2025.jpg'),
    alt: 'Ben in front of his research poster on Astramiz in May, 2025',
    description: (
      <>
        I am currently studying Aerospace Engineering, but I have always held an affinity for 
        the ocean and hope to study Physical Oceanography in graduate school.
      </>
    ),
  },
  {
    title: 'Scholar',
    imgSrc: require('@site/static/img/waldenPond.jpg'),
    alt: 'A sign with a quote from Henry David Thoreau\'s Walden',
    description: (
      <>
        To be a successful scientest, engineer, and officer, I belive it is imparative to be
        well read and a skilled writer. I read a wide variety of works, but I particularly
        enjoy scientific memiors and transcendentalism works.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={alt} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
