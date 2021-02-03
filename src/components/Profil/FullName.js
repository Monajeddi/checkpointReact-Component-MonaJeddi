import React from "react";

let name = {firstname: "Mona", lastname: "Jeddi"}
const Name = () => {
    return (
        <div>
            <h2 className="title">Full Name</h2>
            <h2 className="text">{name.firstname}</h2>
            <h2 className="text">{name.lastname}</h2>
        </div>
    )
}
export default Name
       