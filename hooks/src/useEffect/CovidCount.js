import React, {useEffect, useState} from 'react'

export default function CovidCount() {
    const [country, setCountry] = useState("");
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://covid19.mathdro.id/api/countries")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setData(result)
        });
    }, []);

    const handleChange = (e) => {
        setCountry(e.target.value)
    }


    return (
        <div>
            <label htmlFor="country">Enter your country name :</label>
            <input type="text" value={country} onChange={handleChange} />



            <p>{country}</p>

            <p>{data}</p>
        </div>
    )
}
