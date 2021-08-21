import React, { useEffect, useState } from "react";

function App (){
    const [pic, setPic] = useState()

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(data => {
                setPic(data.message)
            })
    }, [])

        if(!pic) return <p>Loading...</p>

    return (
        <img src={pic} alt="A Random Dog" />
    )
}

export default App