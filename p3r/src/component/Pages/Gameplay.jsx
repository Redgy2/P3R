import "../CSS/Gameplay.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BattleImage1 from "../Images/battle4.webp"
import BattleImage2 from "../Images/combat.jpg"
import BattleImage3 from "../Images/battle1.webp"
import BattleImage4 from "../Images/battle2.webp"
import BattleImage5 from "../Images/battle3.webp"
import DLife1 from "../Images/dlife1.webp"
import DLife2 from "../Images/dlife2.webp"
import DLife3 from "../Images/dlife3.webp"
import DLife4 from "../Images/dlife4.webp"
import Tar1 from "../Images/tar1.webp"
import Tar2 from "../Images/tar2.webp"
import Tar3 from "../Images/tar3.webp"
import Tar4 from "../Images/tar4.webp"
import Tar5 from "../Images/tar5.webp"
import Tar6 from "../Images/tar6.webp"
import VelvetRoom1 from "../Images/vr1.webp"
import VelvetRoom2 from "../Images/vr2.webp"
import VelvetRoom3 from "../Images/vr3.webp"
import VelvetRoom4 from "../Images/vr4.webp"
import VelvetRoom5 from "../Images/vr5.webp"


export default function Gameplay() {
    return (
        <>
        {/* caroussel d'image in-game avec du texte */}
        <div className="gameplay">
            <div className="imgCaroussel">
                <Carousel className="caroussel" 
                autoPlay={true} 
                infiniteLoop={true} 
                showArrows={false} 
                interval={4000}
                stopOnHover={false} 
                showThumbs={false}
                showStatus={false}            
                >
                <div>
                    <img src={BattleImage1} alt="battle image 1" height={400}/>
                </div>
                <div>
                    <img src={BattleImage2} alt="battle image 2" height={400}/>
                </div>
                <div>
                    <img src={BattleImage3} alt="battle image 3" height={400}/>
                </div>
                <div>
                    <img src={BattleImage4} alt="battle image 4"  height={400}/>
                </div>
                <div>
                    <img src={BattleImage5} alt="battle image 5" height={400} />
                </div>             
                </Carousel>
            </div>      
        <br/>
            <div className="gameplayText">
                <h1 className="combatTitre">Combat</h1>
                <p className="combatText">
                1MORE occurs when you down an enemy by striking their weaknesses. You can use an All-out Attack once you down all the enemies.
                </p>
                <br /> 
                <p className="combatText">
                The Direct Commands and Assist functions that were also popular in "Persona 5" are featured.
                </p>
                <br />
                <p className="combatText">
                Baton touch, which allowed players to entrust their actions to their allies during 1MORE, will be added as a shift in this title! Adding new strategies, unique skill Theurgy can be used to unleash powerful techniques.   
                </p>               
            </div>        
        </div>
        <div className="dlife">
            <div className="dlifeText">
                <h1 className="combatTitre">Daily Life</h1>
                <p className="combatText">
                The characters will often be required to demonstrate three different "Social Stats": Academics, Charm, and Courage. Enhance them through study and part-time work, they can be used for facilities and building a community.
                </p>
                <br /> 
                <p className="combatText">
                By spending time with your friends in the dormitory, you may acquire passive skills called Traits that are useful in battle. Actively spend time with your friends, to utilize these useful battle features.
                </p> 
            </div>
            <div className="imgDroite">
                <Carousel className="carousselDroite" 
                autoPlay={true} 
                infiniteLoop={true} 
                showArrows={true} 
                interval={4000}
                stopOnHover={false} 
                showThumbs={false}
                showStatus={false}         
                >
                    <div>
                        <img src={DLife1} alt="battle image 1" height={400}/>
                    </div>
                    <div>
                        <img src={DLife2} alt="battle image 2" height={400}/>
                    </div>
                    <div>
                        <img src={DLife3} alt="battle image 3" height={400}/>
                    </div>
                    <div>
                        <img src={DLife4} alt="battle image 4"  height={400}/>
                    </div>  
                </Carousel>
                <div className="marginTop"></div>
            </div>
        </div>
        <div className="tartarus">
            <div className="imgCaroussel">
                <Carousel className="caroussel" 
                autoPlay={true} 
                infiniteLoop={true} 
                showArrows={false} 
                interval={4000}
                stopOnHover={false} 
                showThumbs={false}
                showStatus={false}            
                >
                    <div>
                        <img src={Tar1} alt="battle image 1" height={400}/>
                    </div>
                    <div>
                        <img src={Tar2} alt="battle image 2" height={400}/>
                    </div>
                    <div>
                        <img src={Tar3} alt="battle image 3" height={400}/>
                    </div>
                    <div>
                        <img src={Tar4} alt="battle image 4"  height={400}/>
                    </div>
                    <div>
                        <img src={Tar5} alt="battle image 5" height={400} />
                    </div>
                    <div>
                        <img src={Tar6} alt="battle image 6" height={400} />
                    </div>  
                </Carousel> 
            </div>
            <br />
            <div className="gameplayText">
                <h1 className="combatTitre">Tartarus</h1>
                <p className="combatText">
                The Dark Hour,The Dark Hour is a period of time hidden between each day that most people cannot perceive. Tartarus is a looming tower that appears during the Dark Hour.
                </p>
                <br /> 
                <p className="combatText">
                Countless shadows roam within Tartarus and attack the protagonists.
                </p>
                <br />
                <p className="combatText">
                The title offers new graphics and some new gimmicks, making it easier to explore.  
                </p>            
            </div> 
        </div>
        <div className="velvet">
            <div className="dlifeText">
                    <h1 className="combatTitre">Velvet Room</h1>
                    <p className="combatText">
                    The "Velvet Room" is a special space that only the main character can enter.
                    </p>
                    <br /> 
                    <p className="combatText">
                    In this room, you can combine yourPersonas with Persona Fusion to create a new Persona or register the Personas you have developed in the Persona Compendium.
                    </p>
                    <br />
                    <p className="combatText">
                    Proactively complete the requests from Elizabeth, a resideont fo the Velvet Room, to receive rewards.
                    </p> 
            </div>
            <div className="imgDroite">
                    <Carousel className="carousselDroite" 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    showArrows={true} 
                    interval={4000}
                    stopOnHover={false} 
                    showThumbs={false}
                    showStatus={false}         
                    >
                        <div>
                            <img src={VelvetRoom1} alt="battle image 1" height={400}/>
                        </div>
                        <div>
                            <img src={VelvetRoom2} alt="battle image 2" height={400}/>
                        </div>
                        <div>
                            <img src={VelvetRoom3} alt="battle image 3" height={400}/>
                        </div>
                        <div>
                            <img src={VelvetRoom4} alt="battle image 4"  height={400}/>
                        </div> 
                        <div>
                            <img src={VelvetRoom5} alt="battle image 4"  height={400}/>
                        </div> 
                    </Carousel>
                    <div className="marginTop"></div>
            </div>
        </div>
        </>
    )
}