import React, { useEffect, useState } from 'react'
import { useFetchye } from 'fetchye';
import Place from './Place';


export default function Places() {
    const {
        data
    } = useFetchye('http://universities.hipolabs.com/search?country=United+States', {
        method: 'GET',
        headers: {
        }
    });
    const [places, setPlaces] = useState(undefined);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   if (data) {
    //       setPlaces(data.body);
    //       setLoading(false);
    //   }
    // }, [data])
    // if (loading) {
    //     return (
    //         <>
    //             <div>Loading...</div>
    //         </>
    //     )
    // }
    return (
        <div>
            {data ? data.body.map((r, i) => (
                <Place key={i} country={r.country} name={r.name} domain={r.domains[0]}/>
            )) : null}
        </div>
    )
}
