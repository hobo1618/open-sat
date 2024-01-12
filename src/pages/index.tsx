import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                alignItems: 'center',
                // justifyContent: 'space-between',
                width: '100vw',
                gap: '4rem',
                padding: '4rem',
            }}>

            <h1
                style={{
                    fontFamily: 'Outfit',
                    fontWeight: 600,
                    fontSize: '2rem',
                    textAlign: 'center',
                    // letterSpacing: '1rem',
                    lineHeight: '1',

                }}
            >
                Open
                <br />
                SAT
            </h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '12rem',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}>
                <a>
                    <img src='/img/smiley.png' />
                </a>
                <div>
                    <h2
                        style={{
                            fontFamily: 'Outfit',
                            fontWeight: 600,
                            fontSize: '8rem',
                            letterSpacing: '-0.5rem',
                            lineHeight: '0.8',
                            background: 'linear-gradient(to right, #f12711, #f5af19)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            paddingRight: '0.5rem'
                        }}>
                        free
                        <br />
                        open-source
                        <br />
                        test prep
                        <br />
                        for everyone
                        <br />
                    </h2>
                </div>
            </div>
            <div className={styles.buttons} >
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/getting-started">
                    Get Started
                </Link>
            </div>
        </div>
    );
}


// <Layout
//             title={`Hello from ${siteConfig.title}`}
//             description="Description will go into a meta tag in <head />"
//         >
//             <div className="container">
//                 <h1 style={{
//                     fontFamily: 'Outfit',
//                     fontWeight: 600,
//                     fontSize: '8rem',
//                     letterSpacing: '-0.5rem',
//                     lineHeight: '1',
//
//                 }}>
//                     Free
//                     <br style={{
//
//                     }}/>
//                     open-source
//                     <br/>
//                     test prep
//                     <br/>
//                     for everyone
//                     <br/>
//                 </h1>
//                 <div className={styles.buttons}>
//                     <Link
//                         className="button button--secondary button--lg"
//                         to="/docs/intro">
//                         Get Started
//                     </Link>
//                 </div>
//             </div>
//         </Layout>
