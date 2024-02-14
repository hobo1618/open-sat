import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
// import ColorModeToggle from '../theme/ColorModeToggle';

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
                position: 'relative',
                // justifyContent: 'space-between',
                width: '100vw',
                gap: '4rem',
                padding: '4rem',
            }}>

            {

                // TODO: #darkmode doesn/'t work probably due to SSR or related
                // <span style={{
                //     position: 'absolute',
                //     padding: '1rem',
                //     top: '0',
                //     right: '0',
                // }}>
                //     <ColorModeToggle />
                // </span>
            }
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
                <a className={styles.landingLink} href="/docs/getting-started">Open</a>
                <br />
                <a href="/docs/getting-started">SAT(R)</a>
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
                <a href="/docs/getting-started">
                    <img src='/img/smiley.png' />
                </a>
                <div>
                    <h2
                        style={{
                            fontFamily: 'Outfit',
                            fontWeight: 600,
                            fontSize: '4rem',
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

                    <div className={styles.buttons} style={{
                        width: "100%",
                        display: 'flex',
                        justifyContent: 'flex-end',

                    }} >
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/getting-started">
                            Get Started
                        </Link>
                    </div>
                </div>
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
