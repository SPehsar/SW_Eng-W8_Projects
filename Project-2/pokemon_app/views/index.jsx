const React = require("react");


class Index extends React.Component {
    render() {
        let styless={ backgroundColor: '#0A0A08', color: "black" }
        let textDecorate={ color: "#FF3131", fontSize: "20px", lineHeight:"180%"} 
        let noUnderline = { textDecoration:"none",  color:"yellow"}
         const { pokemon } = this.props; 

        const myStyle = {
            color: '#FBFFFF',
            backgroundColor: '#0A0A08',
            textDecoration:"none",
        };
        const bodyStyle = {
            backgroundColor: "#FF3131",
            color: "#FBFFFF"
        }


        return (
            <center>
                <div style={bodyStyle}>

                    <h1 style={myStyle}>See All The Pokemon!</h1>
                    <ul style={textDecorate}>

                        {
                            /* For each pokemon, adding an <a>tag that will have an href that goes to the route /pokemon/x, 
                             where x is the array position of the pokemonin the data array. In here we trim spaces from string.
                             in additio, we check that for adding elements, the entry is not blank or number. 
                            */
                        
                            pokemon.map((pokemonEl, i) => {
                                let pokemanEntry = pokemonEl.name.trim()
                                
                                if ((/^[a-zA-Z]+$/.test(pokemanEntry))) {
                                    return (
                                        <li key={i}>
                                            <a style={noUnderline} href={`/pokemon/${pokemonEl._id}`}>{pokemanEntry.charAt(0).toUpperCase() + pokemanEntry.slice(1).toLowerCase()}</a>
                                        </li>
                                    )

                                }

                            })
                        }
                    </ul>

                    <a style={noUnderline} href="/pokemon/new"><h2> ---|| Click to Create a new Pokemon ||---</h2></a>
                    <br></br>
                    
                    <h1 style={styless}>.</h1>
                </div>
            </center>
        )
    }
};

module.exports = Index;