import { useState, useEffect, useRef } from "react";
import { animate } from "framer-motion";


export default function TextoAlternado() {

    const [texts, setTexts] = useState({ 0: 'React Developer', 1: 'Web Designer', 2: 'Back-End Python' });
    const [roll, setRoll] = useState(0);
    const rolltext = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (roll < (Object.keys(texts).length) - 1) {
                setRoll(roll + 1);
            }
            else {
                setRoll(0);
            }
        }, 5000);

    }, [roll])

    useEffect(() => {
        const element = rolltext.current;

        // setComingAnimation(rolltext.current, { opacity: [0, 1], delay: 1 }, { duration: 2, delay: 0.2 }, { y: [-100, 0] }, { delay: 1 });
        // setOutAnimation(rolltext.current, { opacity: [1, 0], delay: 1 }, { duration: 2, delay: 0.2 }, { y: [-100, 0] }, { delay: 1 });

        const comingAnimation = {
            opacity: [0, 1],
            x: [-70, 0],
            delay: 0.2
        };

        const outAnimation = {
            opacity: [1, 0],
            x: [0, 70],
            delay: 0.2
        };

        const runAnimation = async () => {
            await animate(element, comingAnimation, { duration: 1 });
            await animate(element, outAnimation, { duration: 1, delay: 2 });
        };

        runAnimation();

    }, [roll])

    return (
        <h3 ref={rolltext}>{texts[roll]}</h3>
    )
}