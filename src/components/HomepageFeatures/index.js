import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Future Naval Officer',
    Svg: require('@site/static/img/carlVinzon.jpg').default,
    description: (
      <>
        Upon graduation from the US Naval Academy in May, 2026, I will comission as an
        active duty submarine officer in the US Navy.
      </>
    ),
  },
  {
    title: 'Engineer',
    Svg: require('@site/static/img/capstoneDay2025.jpg').default,
    description: (
      <>
        I am currently studying Aerospace Engineering, but I have always held an affinity for 
        the ocean and hope to study Physical Oceanography in graduate school.
      </>
    ),
  },
  {
    title: 'Scholar',
    Svg: require('@site/static/img/waldenPond.jpg').default,
    description: (
      <>
        To be a successful scientest, engineer, and officer, I belive it is imparative to be
        well read and a skilled writer. I read a wide variety of works, but I particularly
        enjoy scientific memiors and transcendentalism works.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
