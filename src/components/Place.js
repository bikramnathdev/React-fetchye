import React from 'react'

export default function Place({ country, name, domain }) {
    return (
        <div>
            <h1 >{country}</h1>
            <div>
                <span>{name}</span>
            </div>
            <div>
                <span>Domain: </span> <span>{domain}</span>
            </div>
            <hr/>
        </div>
    )
}
