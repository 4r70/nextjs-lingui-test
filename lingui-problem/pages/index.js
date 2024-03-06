import Head from "next/head";
import Image from "next/image";
import Link from "next/link.js";
import { useEffect, useState } from "react";

import Layout from "../components/layout.js";
import { useTheme } from '../components/ThemeContext.js';

import UuriStyles from "../styles/Uuri.module.css";

import { loadCatalog } from "../translations/utils";
import { Trans, msg, t } from "@lingui/macro";
import { useLingui } from "@lingui/react";

export default function Uuri() {
    const { theme, toggleTheme } = useTheme();
    const { _ } = useLingui();

    const Arrow = (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={"100%"}
            height={"100%"}
            viewBox={"0 -960 960 960"}
            fill="#000"
            alt={_(msg`Uuri lähemalt`)}
            {...props}
        >
            <path
                fill={'#000'}
                d="m480-160-42-43 247-247H160v-60h525L438-757l42-43 320 320-320 320Z"
            />
        </svg>
    );

    const NoolAlla = (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            fill={"#fff"}
            alt=""
            {...props}
        >
            <path
                fill={theme === 'dark' ? "#fff" : "#000"}
                d="M24 40 8 24l2.1-2.1 12.4 12.4V8h3v26.3l12.4-12.4L40 24Z"
            />
        </svg>
    );

    // const words = [<Trans>Bolti?</Trans>, <Trans>Skype\'i?</Trans>, <Trans>Facebooki?</Trans>, <Trans>YouTube\'i?</Trans>, <Trans>Discordi?</Trans>, <Trans>Netflixi?</Trans>, <Trans>Amazoni?</Trans>];
    const words = ['Bolti?', 'Skype\'i?', 'Facebooki?', 'YouTube\'i?', 'Discordi?', 'Netflixi?', 'Amazoni?'];

    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        const word = words[wordIndex];
        let currentCharacterIndex = 0;
        let timer;

        const animateWord = () => {
            if (currentCharacterIndex < word.length) {
                setCurrentWord(word.substring(0, currentCharacterIndex + 1));
                currentCharacterIndex++;
                timer = setTimeout(animateWord, 100);
            } else {
                // Wait for a moment and then delete the word
                setTimeout(() => {
                    deleteWord();
                }, 2000);
            }
        };

        const deleteWord = () => {
            if (currentCharacterIndex >= 0) {
                setCurrentWord(word.substring(0, currentCharacterIndex));
                currentCharacterIndex--;
                timer = setTimeout(deleteWord, 50);
            } else {
                setTimeout(() => {
                    setWordIndex((wordIndex + 1) % words.length);
                }, 500);
            }
        };

        animateWord();

        return () => clearTimeout(timer);
    }, [wordIndex]);

    return (
        <>
            <Head>
                <title>{t`KOIT - Uuri lähemalt`}</title>
                <meta
                    property="og:title"
                    content="KOIT - Avasta proge ja unusta igavad õppematerjalid."
                />
                <meta
                    name="description"
                    content="KOIT on unikaalne programmeerimise õppekeskkond, mis sisaldab endas elulist ja interaktiivset õppematerjali."
                    key="desc"
                />
                <meta
                    property="og:description"
                    content="KOIT on unikaalne programmeerimise õppekeskkond, mis sisaldab endas elulist ja interaktiivset õppematerjali."
                />
                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/koodkadeemia.appspot.com/o/LOGO%202.png?alt=media&token=b78147f3-1f85-43ff-88e0-74a450e66548"
                />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    name="keywords"
                    content="koit, programmeerimine, programmeerimise õppimine, javascript, python, it, it-maailm, it maailm, õpi it, õpi programmeerimist, proge, progeõpe, platvorm, interaktiivne, õppematerjal"
                />
                <link rel="preload" as="image" href="/opipaneel.png"></link>
                <link rel="preload" as="image" href="/teooria.png"></link>
                <link rel="preload" as="image" href="/builder.png"></link>
                <link rel="preload" as="image" href="/meie.jpg"></link>
            </Head>
            <Layout>
                <div className={UuriStyles.main}>
                    <div className={UuriStyles.pealkiriWrapper}>
                        <h1 className={UuriStyles.pealkiri}>
                            <Trans>
                                Soovid luua järgmise
                            </Trans>
                            <br />
                            <span className={UuriStyles.changing}>{currentWord}<span className={UuriStyles.caret}>|</span></span>
                            <br />
                        </h1>
                        <h2 className={UuriStyles.alapealkiri}>
                            <Trans>
                                <em className={UuriStyles.em} style={{ "fontWeight": "800" }}>KOIT</em> on sinu esimene samm.
                            </Trans>
                        </h2>
                    </div>
                    <NoolAlla
                        className={UuriStyles.noolalla}
                    />
                    <section className={UuriStyles.uus}>
                        <h2 className={UuriStyles.title}>
                            <Trans>
                                Uus<em className={UuriStyles.em}> KOIT </em>
                                programmeerimise õppimise maastikul.
                            </Trans>
                        </h2>
                        <div className={UuriStyles.uusRowright}>
                            <section className={UuriStyles.uusTextright}>
                                <p>
                                    <Trans>Õpi teooriat</Trans>
                                    {" "}
                                    <Trans>
                                        <em className={UuriStyles.orange}>
                                            interaktiivselt
                                        </em>
                                        . Kõik koodilõigud on muudetavad, jooksutatavad
                                        ja <i>highlight</i>itud, ainult Sinu õppimiskogemuse
                                        parandamiseks.
                                    </Trans>
                                </p>
                                <br />
                                <a href={"/uuriveel/teooriaLisa"} className={UuriStyles.extraButtonRight}>
                                    <Trans>Teooriast lähemalt</Trans>
                                    <Arrow className={UuriStyles.nool} />
                                </a>
                            </section>
                            <Image
                                className={UuriStyles.picture}
                                src={"/teooria.png"}
                                width={960}
                                height={480}
                                alt={_(msg`Pilt Koidu õpilase kasutjaliidesest, millel on kuvatud teooriapeatükk`)}
                            />
                        </div>
                        <div className={UuriStyles.uusRowleft}>
                            <Image
                                className={UuriStyles.picture}
                                src={"/opipaneel.png"}
                                width={960}
                                height={480}
                                alt={_(msg`Pilt Koidu õpilase kasutjaliidesest, millel on kuvatud ülesanne`)}
                            />
                            <section className={UuriStyles.uusTextleft}>
                                <p>
                                    <Trans>
                                        Ülesandeid saab kirjutada
                                    </Trans>
                                    <em className={UuriStyles.orange}>
                                        {" "}
                                        <Trans>otse brauseris</Trans>{" "}
                                    </em>
                                    <Trans>asuvasse koodiredaktorisse, ning kõik ülesanded on</Trans>
                                    {" "}
                                    <Trans>
                                        <em className={UuriStyles.orange}>
                                            automaatkontrolliga.
                                        </em>
                                        Ühtki lisarakendust ei pea Koidu kasutamiseks
                                        alla laadima.
                                    </Trans>
                                </p>
                                <br />
                                <a href={"/uuriveel/ylesandedLisa"} className={UuriStyles.extraButtonLeft}>
                                    <Trans>Ülesannetest lähemalt</Trans>
                                    <Arrow className={UuriStyles.nool} />
                                </a>
                            </section>
                        </div>
                    </section>
                    <section className={UuriStyles.uus}>
                        <h2 className={UuriStyles.title}>
                            <Trans>
                                Uus<em className={UuriStyles.em}> KOIT </em>
                                programmeerimise õpetamise maastikul.
                            </Trans>
                        </h2>
                        <div className={UuriStyles.uusRowright}>
                            <section className={UuriStyles.uusTextright}>
                                <p>
                                    <em className={UuriStyles.orange}>
                                        <Trans>
                                            Õpetajatele
                                        </Trans>
                                    </em>{" "}
                                    <Trans>pakume oma</Trans>{" "}
                                    <Trans>
                                        <em className={UuriStyles.orange}>
                                            kursuse loomise võimalust
                                        </em>
                                        , kuid lähitulevikus ka Moodle’st jms
                                        praegustelt platvormidelt automaatset
                                        integratsiooni. Koiduga saad kõikidest
                                        õpilastest üldülevaate, kuid saad ka
                                        personaalselt jälgida kindlate õpilaste
                                        edenemisi ja probleeme.
                                    </Trans>
                                </p>
                                <br />
                                <a href={"/uuriveel/opetajaPaneelLisa"} className={UuriStyles.extraButtonLeft}>
                                    <Trans>Õpetajatepaneelist lähemalt</Trans>
                                    <Arrow className={UuriStyles.nool} />
                                </a>
                            </section>
                            <Image
                                className={UuriStyles.picture}
                                src={"/builder.png"}
                                width={960}
                                height={480}
                                alt={_(msg`Pilt Koidu õpetaja kasutjaliidesest, millel on kuvatud ülesandeehitaja`)}
                            />
                        </div>
                    </section>
                    <section className={UuriStyles.meie}>
                        <h2 className={UuriStyles.title}>
                            <Trans>
                                <em className={UuriStyles.em}>Noortelt </em>
                                noortele.
                            </Trans>
                        </h2>
                        <div className={UuriStyles.rowCenter}>
                            <div className={UuriStyles.listWrapper}>
                                <section className={UuriStyles.listLeft}>
                                    <Trans>
                                        <h3 className={UuriStyles.listName}>
                                            Kevin Akkermann
                                        </h3>
                                        <li>TÜ 1. kursus </li>
                                        <li>Äri ja programmeerimine</li>
                                        <li>Endine arendaja idufirmas Konnekt</li>
                                        <li>Rakett69 12. hooaeg</li>
                                    </Trans>
                                    <li>
                                        <Trans>Rahvusvahelised informaatikolümpiaadid</Trans>{" "}
                                    </li>
                                    <Trans>
                                        <li>Eraõpetaja</li>
                                        <li>Endine robootikaringi juhendaja </li>
                                        <li>
                                            CodeWeek’i raames endine progeõpetaja
                                        </li>
                                    </Trans>
                                </section>
                                <Image
                                    className={UuriStyles.picture}
                                    src={"/meie.jpg"}
                                    width={682.7}
                                    height={455}
                                    quality={100}
                                    alt={_(msg`Pilt Koidu kaasasutajatest, Artost ja Kevinist`)}
                                />
                                <section className={UuriStyles.listRight}>
                                    <Trans>
                                        <h3 className={UuriStyles.listName}>
                                            Arto Reinik
                                        </h3>
                                        <li>TTG 12. klass</li>
                                        <li>Disain ja programmeerimine</li>
                                        <li>Endine arendaja idufirmas Konnekt</li>
                                        <li>Rakett69 12.hooaeg</li>
                                        <li>Koolisisene tuutor </li>
                                        <li>IT-fanaatik</li>
                                    </Trans>
                                </section>
                            </div>
                            <span className={UuriStyles.rowTextCenter}>
                                <Trans>
                                    Võid unustada igavad matemaatilised
                                    õppematerjalid, oleme võimalikult palju teinud
                                    õppematerjali eluliseks. KOIT pakub
                                    õppematerjale
                                </Trans>
                                {" "}
                                <Trans>
                                    <em className={UuriStyles.orange}>
                                        noortelt noortele.
                                    </em>
                                    Me oleme kaks noort, kellel on olnud tahe
                                    aidata haridusmaastiku juba pikemat aega.
                                </Trans>
                            </span>
                        </div>
                    </section>
                    <section className={UuriStyles.koidab}>
                        <Trans>
                            <h2 className={UuriStyles.koidabTitle}>Hakkas <em className={UuriStyles.em}>KOIT</em>ma?</h2>
                            <span className={UuriStyles.contact}>
                                Võta meiega ühendust: <a className={UuriStyles.orange} href="mailto:kevin@ko-it.ee">info@ko-it.ee</a>
                            </span>
                        </Trans>
                        <span className={UuriStyles.contact}>
                            <Trans>Jälgi meie tegemisi ka</Trans>{" "}
                            <Link
                                href={"https://www.instagram.com/koit_ee/"}
                                className={UuriStyles.insta}
                            >
                                <Trans>Instagramis</Trans>
                            </Link>{" "}
                            <Trans>ja</Trans>{" "}
                            <Link
                                href={"https://www.linkedin.com/company/koit-ee/"}
                                className={UuriStyles.insta}
                            >
                                <Trans>LinkedInis</Trans>
                            </Link>
                            !
                        </span>
                    </section>

                </div>
                <style jsx global>{`
                    body {
                        background-color: rgb(var(--background-rgb));
                    }
                `}</style>
            </Layout>
        </>
    );
}

export async function getServerSideProps(ctx) {
    // console.log("#########");
    // console.log(await loadCatalog(ctx.locale));
    const translation = await loadCatalog(ctx.locale);
    return {
      props: {
        translation,
      },
    }
}
