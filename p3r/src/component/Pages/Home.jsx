
import { useEffect,useRef } from "react"
import { Link } from 'react-router-dom'
import {motion, useInView, useAnimation} from "framer-motion"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../CSS/Home.css"
import ImgIntro from "../Images/persona3.jpg"
import ImgCombat from "../Images/combat.jpg"
import McImage from "../Images/MC.webp"
import YukaImage from "../Images/Yukari.webp"
import JunpeiImage from "../Images/Junpei.webp"
import MitsuruImage from "../Images/Mitsuru.webp"
import AkiImage from "../Images/Akihiko.webp"
import FuukaImage from "../Images/Fuuka.webp"
import KoromaruImage from "../Images/Koromaru.webp"
import AigisImage from "../Images/Aigis.webp"
import KenImage from "../Images/Ken.webp"
import ShinjiImage from "../Images/Shinjiro.webp"
import Evoker from "../Images/evoker.jpg"

export default function Home() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const mainControls = useAnimation();

    useEffect(() => {      
       if (isInView) {
        console.log(isInView)
       }
    },[isInView]);

    return (    
        <>
           {/*  animation des images  */}
            <motion.div
            variants={{
                hidden: {opacity: 0, y: -100},
                visible: {opacity: 1, y : 0}
            }}
            initial= "hidden"
            animate="visible"
            transition={{duration: 1, delay: 0.25}}
              className="bg-img" 
              />
            <div className="introbg">
                <h1 className="titre">PERSONA 3 RELOAD</h1>
                <div className="introduction">                   
                    <motion.img 
                    variants={{
                            hidden: {opacity: 0, y: -75},
                            visible: {opacity: 1, y : 0}
                        }}
                        initial= "hidden"
                        animate="visible"
                        transition={{duration: 2, delay: 0.25}} className="introImg" src={ImgIntro} alt="Persona 3" 
                        />
                        <motion.div
                        variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y : 0}
                        }}
                        initial= "hidden"
                        animate="visible"
                        transition={{duration: 2, delay: 0.25}}
                        className="text">
                            {/* text avec button pour rediriger */}
                            <h1 className="introTitre">Introduction</h1>
                            <p className="textIntro">Life doesn't always go as planned, and you—as the protagonist—transfer into Gekkoukan High School, located at the center of the man-made Tatsumi Port Island only for a terrifying creature to attack your dorm.</p>
                            <br />
                            <p className="textIntro">In the midst of chaos, you awaken to your Persona—a powerful force that can be used to fight back.</p>
                            <br />
                            <p className="textIntro">A group of others who share this power recruit you into their Specialized Extracurricular Excecution Squad (S.E.E.S.), and so begins your journey to uncover the mysteries behind these incidents...</p>
                            <Link to="/Story" style={{ textDecoration: 'none' }}>
                                <button className="btn">Story &#8594;</button>
                            </Link>
                        </motion.div>   
                </div>
                <div className="combat">
                <motion.img 
                variants={{
                    hidden: {opacity: 0, y: -75},
                    visible: {opacity: 1, y : 0}
                }}
                initial= "hidden"
                animate="visible"
                transition={{duration: 2, delay: 0.75}} className="combatImg" src={ImgCombat} alt="Combat" 
                />
                        <motion.div
                         variants={{
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y : 0}
                        }}
                        initial= "hidden"
                        animate="visible"
                        transition={{duration: 2, delay: 0.75}} className="text"
                         >
                            <h1 className="introTitre">Combat</h1>
                            <p className="textIntro">The Persona 3 experience becomes even more enjoyable while retaining its originality.</p>
                            <br />
                            <p className="textIntro">A more exhilarating battle system and new graphics and gimmicks make Tartarus easier to explore. Dormitory life and community have also legitimately evolved!</p>
                            <Link to="/Gameplay" style={{ textDecoration: 'none' }}>
                                <button className="btn">Gameplay &#8594;</button>
                            </Link>
                            
                        </motion.div>
                </div>
                <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y : 0}
                }}
                initial= "hidden"
                animate="visible"
                transition={{duration: 2, delay: 1.25}} 
                className="SEES"
                >
                    <h1 className="sees">S.E.E.S</h1>
                    {/* caroussel d'image */}
                    <Carousel className="main-slide">
                        <div>
                            <img src={McImage} />
                            <p className="legend">Main Character</p>
                        </div>
                        <div>
                            <img src={YukaImage} />
                            <p className="legend">Yukari</p>
                        </div>
                        <div>
                            <img src={JunpeiImage} />
                            <p className="legend">Junpei</p>
                        </div>
                        <div>
                            <img src={AkiImage} />
                            <p className="legend">Akihiko</p>
                        </div>
                        <div>
                            <img src={MitsuruImage} />
                            <p className="legend">Mitsuru</p>
                        </div>
                        <div>
                            <img src={FuukaImage} />
                            <p className="legend">Fuuka</p>
                        </div>
                        <div>
                            <img src={KoromaruImage} />
                            <p className="legend">Koromaru</p>
                        </div>
                        <div>
                            <img src={AigisImage} />
                            <p className="legend">Aigis</p>
                        </div>
                        <div>
                            <img src={KenImage} />
                            <p className="legend">Ken</p>
                        </div>
                        <div>
                            <img src={ShinjiImage} />
                            <p className="legend">Shinjiro</p>
                        </div>
                    </Carousel>
                </motion.div>
                <div className="persona">
                    <motion.img
                    variants={{
                        hidden: {opacity: 0, y: -75},
                        visible: {opacity: 1, y : 0}
                    }}
                    initial= "hidden"
                    animate="visible"
                    transition={{duration: 2, delay: 2}} 
                    className="evoker" src={Evoker} alt="Evoker" 
                    />
                    <motion.div
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y : 0}
                    }}
                    initial= "hidden"
                    animate="visible"
                    transition={{duration: 2, delay: 2}}
                    >
                        <h1 className="introTitre">Persona</h1>
                        <p>A defining aspect of the series is the use of the "Persona", which are physical manifestations of a person's psyche and subconscious used for combat. The main Personas for the cast used up to Persona 3 were inspired by Greco-Roman mythology.</p>
                        <br />
                        <p>The summoning ritual for Personas in battle varies throughout the series: in early games, the party gains the ability to summon through a short ritual after playing a parlor game</p>
                        <br />
                        <p>In Persona 3 Reload, they fire a gun-like device called an Evoker at their head to overcome their cowardice</p>
                        <Link to="/Persona" style={{ textDecoration: 'none' }}>
                                <button className="btn">Persona &#8594;</button>
                        </Link>
                    </motion.div>
                </div>
            </div>     
        </>      
    )
}