import data from "../JSON/persona.json"
import data2 from "../JSON/persona2.json" 
import "../CSS/Persona.css"

export default function Persona() {

    return (
        <div>
            {/* tableau des evolutions des personas */}
            <h1>First Evolution</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Arcana</th>
                        <th>Strong</th>
                        <th>Weak</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,index) =>
                        <tr>
                            <td>{val.name}</td>
                            <td>{val.lvl}</td>
                            <td>{val.arcana}</td>
                            <td>{val.strong}</td>
                            <td>{val.weak}</td>
                            <td>{val.skills}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <h1>Second Evolution</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Arcana</th>
                        <th>Null</th>
                        <th>Weak</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data2.map((val,index) =>
                        <tr>
                            <td>{val.name}</td>
                            <td>{val.lvl}</td>
                            <td>{val.arcana}</td>
                            <td>{val.strong}</td>
                            <td>{val.weak}</td>
                            <td>{val.skills}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}