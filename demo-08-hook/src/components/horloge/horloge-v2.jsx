import React, { useEffect, useState } from 'react';

const Horloge = (props) => {

    const [now, setNow] = useState(new Date());


    useEffect(() => {
        // Effet lancer lors de la création uniquement
        const timerId = setInterval(() => {
            setNow(new Date());
            console.log('Tic');
        }, 1000);

        console.log(timerId);

        // Netoyage de l'effet
        return () => {
            clearInterval(timerId)
        }
    }, []); // Utilisation d'un tableau vide pour simuler un 'componentDidMount'

    useEffect(() => {
        document.title = now.toLocaleTimeString('fr-FR')
    })

    return (
        <h3>{now.toLocaleTimeString('fr-FR')}</h3>
    )
}

export default Horloge;