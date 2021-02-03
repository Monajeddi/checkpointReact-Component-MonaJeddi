import React from "react";

let adress = {adresse: "1 Rue Saint Denis"}
const Adress = () => {
    return (
        <div>
            <h2 className="title">Adress</h2>
            <h2 className="text">{adress.adresse}</h2>
            
        </div>
    )
}
export default Adress