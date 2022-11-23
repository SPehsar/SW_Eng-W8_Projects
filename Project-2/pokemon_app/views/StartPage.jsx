const React = require("react");
// const image = require("../models/image");
// const Index = require("./Index"); // delete it later

class StartPage extends React.Component {
    render() {
        const { name, img } = this.props
        let styless = { backgroundColor: '#0A0A08', color: "black" }
        let noUnderline = { textDecoration: "none", fontSize: "40px", fontFamilly: "Comic Sans MS", color: "yellow" }

        const myStyle = {
            color: '#FBFFFF',
            backgroundColor: '#0A0A08',
        };

        const bodyStyle = {
            backgroundColor: "#FF3131",
            color: "#FBFFFF",
            fontFamily: "Comic Sans MS"
        };

        return (

            <center>

                <div style={bodyStyle}>
                    <h1 style={myStyle}>Welcome to the Pokemon App!</h1>

                    <a style={noUnderline} href="/pokemon">Go to Pokedex</a> <br /><br />
                    <a style={noUnderline} href="/pokemon/new">Create a new Pokemon</a>
                    <br /><br />
                    <center><img src='https://static1.srcdn.com/wordpress/wp-content/uploads/landscape-1456483171-pokemon2.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5' width='800' height='400'></img></center>

                    <br /><br />

                    <h1 style={styless}>.</h1>

                </div>

            </center>

        )
    }
}

module.exports = StartPage;