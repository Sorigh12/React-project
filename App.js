import React from "react"
import Contact from "./Contact"

function App() {
    return (
        <div className="contacts">
        
            <Contact 
                img="./images/mr-whiskerson.png" 
                price= "$ 250"
                name="Mr. Dalton"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                price= "$ 300"
                name="Oreo"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                price= "$ 280"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                price= "$ 400"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@sgmail.com"
            />
        </div>
    )
}

export default App