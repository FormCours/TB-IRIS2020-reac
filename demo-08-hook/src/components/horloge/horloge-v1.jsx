import React, { useEffect, useState } from 'react';

const Horloge = (props) => {

    const [now, setNow] = useState(new Date());


    useEffect(() => {
        // Effet lancer lors de la création et des mise a jours
        const timerId = setTimeout(() => {
            setNow(new Date());
            console.log('Tic');
        }, 1000);

        // Netoyage de l'effet
        return () => {
            clearTimeout(timerId)
        }
    });

    useEffect(() => {
        document.title = now.toLocaleTimeString('fr-FR')
    })

    return (
        <h3>{now.toLocaleTimeString('fr-FR')}</h3>
    )
}

export default Horloge;