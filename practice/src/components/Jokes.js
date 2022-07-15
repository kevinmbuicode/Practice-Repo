import React from 'react';

export default function Jokes({setup, punchline, number}) {
    return (
        <div>
            <h3>{setup}</h3>
            <p>{punchline}</p>
            <p>{number}</p>
            <hr/>
        </div>
    )
}