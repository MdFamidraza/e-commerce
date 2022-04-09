import React, { useEffect, useState } from "react"
function App() {
    const [a, b] = useState(0)
    const [fake, setfake] = useState([]);
    useEffect(() => {

        const fakestore = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            /*console.log(response)*/
            const jsondata = await response.json();
            console.log(jsondata)
            setfake(jsondata)
        }
        fakestore()
    }, [])

    return (
        <>
            <h1 style={{ color: "white" }} id="ni">E-commerce store</h1>
            <div className="container">
                {
                    fake.map((value) => {
                        return (
                            <>
                                <div className="box">
                                    <p style={{ color: "white", marginBottom: "20px", backgroundColor: "red", borderRadius: "20px" }}>welcome to my online store</p><br />
                                    <div className="containt">
                                        <h5 >{value.title}</h5><br />

                                        <p style={{ color: "white" }}>{value.description}</p>
                                    </div>
                                    {/* <h1 >image</h1> */}
                                    <img src={value.image}></img>
                                    <h4>price:{value.price}</h4>
                                </div>
                            </>
                        )
                    })
                }

            </div>

        </>
    )
}

export default App;
