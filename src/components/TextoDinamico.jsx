import React, { useState, useEffect } from 'react';

const TextoDinamico = ({ textos }) => {
    const [textoActual, setTextoActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTextoActual((actual) => (actual + 1) % textos.length);
        }, 3000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="wrapper">
            <ul className="texto-dinamico">
                <li className="visible">
                    <span>{textos[textoActual]}</span>
                </li>
            </ul>
        </div>
    );
};

export default TextoDinamico; 