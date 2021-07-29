import React, { useEffect, useRef, useState } from 'react'

// https://blog.logrocket.com/patterns-for-data-fetching-in-react-981ced7e5c56/
// https://blog.logrocket.com/axios-or-fetch-api/
// https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
// https://javascript.info/xmlhttprequest
// https://www.youtube.com/watch?v=DHvZLI7Db8E
// https://www.youtube.com/watch?v=4K33w-0-p2c
// https://www.youtube.com/watch?v=Ka8vG5miErk
// https://www.youtube.com/watch?v=hxyp_LkKDdk
// https://www.youtube.com/watch?v=tcLW5d0KAYE
// https://www.youtube.com/watch?v=9fr7ytpvybY

// Redux - https://www.taniarascia.com/redux-react-guide/

export default function RecipieFinder() {

    const API_KEY = "cf6ebfdcf5cbd02bde7f24df44ae3c41";

    const APP_ID = "3a6bab34"
    const inputRef = useRef(null)

    const [ingredientList, updatedIngredientList] = useState([])

    const [loading, setLoading] = useState(false);


    const search = () => {
        searchIngridient(inputRef.current.value)

    }

    const searchIngridient = query => {
        setLoading(true)
        let url = `search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`

        fetch(url, { mode: "cors" })
            .then(response => {
                console.log(response.json())
var response1 = response.json()

document.write(response1)

                return response1;
            }).then(res => {
                document.write()
                console.log("final response", res.hits)
                updatedIngredientList(res.hits)
                setLoading(false)
            })
            .catch(err => {
                console.log("error", err)
                setLoading(false)

            })
    }

    useEffect(() => {
        //    searchIngridient("eggs")

    })

    return (
        <div>

            <input
                ref={inputRef}
                placeholder="Search for Recipie"
                type="text"
            />

            <button onClick={search}>Search</button>

            {loading && <p>Loading...</p>}


<div className="json-data">
   
    {updatedIngredientList}
</div>

            <div className="Wrapper">

                {ingredientList.map((item) => {
                    return (
                        <div className="Ingredient">
                            <span>{item.recipe.label}</span>
                            <img src={item.recipe.image} alt="" />

                            {item.recipe.ingredientLines.map((step) => {
                                return <p>{step}</p>

                            })}

                        </div>
                    )
                })}


            </div>
        </div>
    )
}
