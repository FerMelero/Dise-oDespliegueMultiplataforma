function Loops () {
    const friends = [
        {name: "John Doe", age: 34},
        {name: "Gandalf", age: 1432},
        {name: "Aragorn", age: 442}
    ];

    return (
        <div>
            <h1>My Friends</h1>
            <ul>
            {
                friends.map (function (f) {
                    return (
                        <li key={f.name}><b>{f.name}</b>: {f.age} years</li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Loops;