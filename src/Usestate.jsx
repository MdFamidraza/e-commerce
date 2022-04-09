import React, { useState } from "react";
function Usestate() {
    const data = [
        {
            name: "famid ", age: 22
        }, {
            name: "danish", age: 78
        }, {
            name: "meegdad", age: 28
        }
    ]

    const [adas, b] = useState(data);
    const Clear = () => {
        b(adas === [{}]);
    }
    return (
        <>
            {
                data.map((as) => {
                    return <h1 style={{ backgroundColor: 'black', color: 'white', borderRadius: '20px' }}>name:{as.name} age:{as.age} </h1>
                })
            }
            <button onClick={Clear}>click me ok</button>
        </>
    )
}
export default Usestate;