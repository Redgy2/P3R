import data from "../JSON/char.json"
import "../CSS/Char.css"

export default function Characters() {
    return (
        <div>
            {data.map( item => {
                return(
                    <>
                        {/* image de tous les membres */}
                        <div key={item.id} className="imageChar">
                            <img src={item.image} alt="image" className="charImage" height = {800} style={{ alignSelf: 'center' }} />    
                        </div>
                        {/* table avec les caracteristiques */}
                        <div className="tableDroite">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Affiliation</th>
                                            <th>School</th>
                                            <th>Persona</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
                                            <td>{item.affiliation}</td>
                                            <td>{item.school}</td>
                                            <td>{item.persona}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                    </> 
                )
            })
        }
        </div>
    )
}