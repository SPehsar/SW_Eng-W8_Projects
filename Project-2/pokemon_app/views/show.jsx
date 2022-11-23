const React = require("react");
const pokemon = require("../models/pokemon"); // delete it later
// const Index = require("./Index"); // delete it later

class Show extends React.Component {
    render() {
        const { name, img } = this.props.pokemon // pokemon
        let styless={ fontSize: "40s", backgroundColor: '#0A0A08', color: "black"}
        let noUnderline = { textDecoration:"none", ontFamilly: "Comic Sans MS", color:"#FF10F0"}         

        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
        };
        
        // In the following we add on .jpg to the end of the pokemon's image data.
        return (
            <center>
                <div>
                    <h1 style={myStyle}>Gotta Catch 'Em All</h1>
                    <h2>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h2>
                    {/* <h2>{name}</h2>  */}
                    {/* <img src={img + ".jpg"} alt={name + " image"}></img> */}
                    <a href="/pokemon"><img src={`${img}.jpg`} alt={name}></img></a>
                    <p>
                        <a style={noUnderline}  href={"/pokemon"}>Back to Pokemon List Page</a>
                    </p>
                    <br></br>
                    <h1 style={styless}>.</h1>
                </div>
            </center>
        )
}
};

module.exports = Show;