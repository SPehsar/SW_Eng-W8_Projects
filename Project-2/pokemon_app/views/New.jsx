const React = require("react");
let noUnderline = { textDecoration:"none", ontFamilly: "Comic Sans MS", color:"yellow"} 

class New extends React.Component {
    render() {
        let styless={ fontSize: "40s", backgroundColor: '#0A0A08', color: "black"}
        let capitalizeIt = {textTransform: "capitalize"} 

        const myStyle = {
            color: '#FBFFFF',
            backgroundColor: '#0A0A08',
        };
        const bodyStyle = {
            backgroundColor: "#FF3131",
            color: "#FBFFFF"
        }

        return (
            <center>
                <div style={bodyStyle}>
                    <h1 style={myStyle}>Create a New Pokemon!</h1>
                    <form action="/pokemon" method="POST">
                        Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input style={capitalizeIt} type="text" name="name" placeholder="Pokemon / (Only Alphabet)" />
                        <br /><br />
                        
                        Image: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="url"  name="img" placeholder="Pokemon image URL" /><br /><br />
                        Time to use your Pokeee Ball:&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="submit" value="Throw your Pokeee Ball to Catch One!" />
                    </form>
                    <br></br>
                    <nav>
                    <a style={noUnderline} href="/pokemon">Pokemon List Page</a>
                    </nav>
                    <br></br>
                    <h1 style={styless}>.</h1>
                </div>
            </center>
        )
    }
};

module.exports = New;