import "../CSS/Story.css"
import McTrain from "../Images/makoto.gif"
import SEES from "../Images/sees.jpg"
import VelvetRoom from "../Images/velvetroom.gif"
import DarkHour from "../Images/tartarus.jpg"

export default function Story() {
    return (
        <>
        {/* texte expliquant le story avec des images centrer */}
        <div className="story">
            <h1 className="storyTitle">Story</h1>
            <br />
            <p className="storyText">
            Set in 2009, Persona 3 begins with the protagonist returning to the city of Tatsumi Port Island ten years after his parents died from an accident. He is introduced as a transfer student that has just moved into the Iwatodai Dormitory, but arrives late. A mysterious boy, calling himself Pharos, introduces himself to the protagonist and asks him to sign a contract that states he will accept full responsibility for his own actions.
            </p>
            <img className="imgTrain" src={McTrain} alt="Makoto in a train" />
            <br />
            <p className="storyText">
            He is quickly brought into SEES (Special Extracurricular Execution Squad), a club at Gekkoukan High School which disguises itself as a completely normal after school club, when his awareness of the Shadows and the Dark Hour is revealed. The Dark Hour is a secret hour which only a select few with the "potential" are aware of; the rest "transmogrify" into coffins. Shadows are also causing many people to become victims of Apathy Syndrome, a mysterious condition that puts them into a vegetative trance-like state in which they lose the will to live; victims are referred to as "the Lost." 
            </p>
            <img className="seesImg" src={SEES} alt="SEES" />
            <br />
            <p className="storyText"> 
            The protagonist discovers that he can summon multiple Personas into battle. After awakening to his Persona ability, the protagonist is transported to the Velvet Room, which its proprietor, Igor, says is a realm between "dream and reality." Igor explains to him that his Persona ability is special: he is the only member of SEES capable of wielding multiple Personas in battle due to possessing the Wild Card. In-game, the Velvet Room is where the protagonist may fuse two or more Personas to create a new one. Igor also encourages the protagonist to meet people and form bonds with them, which are known as Social Links. According to Igor, the power of his Social Links will determine his potential in combat.
            </p>
            <img className="imgTrain" src={VelvetRoom} alt="Velvet Room" />
            <br />
            <p className="storyText">
            With the help of their Personas, SEES is able to explore a mysterious tower called Tartarus, which mysteriously manifests during the Dark Hour at Gekkoukan High School. They must also defeat Greater Shadows that appear every full moon and attack the city, believing that by killing all twelve of them, they will be able to end the appearance of the Dark Hour. SEES summons Personas using gun-shaped items called Evokers by shooting themselves in the head, an action reminiscent of suicide. 
            </p>
            <img className="darkHourImg" src={DarkHour} alt="Dark Hour" />
            <br />
        </div>
        </>
    )
}