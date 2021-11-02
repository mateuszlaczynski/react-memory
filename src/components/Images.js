import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import card from '../assets/images/card.png'
import checked from '../assets/images/checked.png'
import {Link} from "react-router-dom";

const data = [
    {
        id:1,
        src:'https://images.pexels.com/photos/1771338/pexels-photo-1771338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:2,
        src:'https://images.pexels.com/photos/1771338/pexels-photo-1771338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:3,
        src:'https://images.pexels.com/photos/5621455/pexels-photo-5621455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:4,
        src:'https://images.pexels.com/photos/5621455/pexels-photo-5621455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:5,
        src:'https://images.pexels.com/photos/4603275/pexels-photo-4603275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:6,
        src:'https://images.pexels.com/photos/4603275/pexels-photo-4603275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:7,
        src:'https://images.pexels.com/photos/6031550/pexels-photo-6031550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:8,
        src:'https://images.pexels.com/photos/6031550/pexels-photo-6031550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:9,
        src:'https://images.pexels.com/photos/4777687/pexels-photo-4777687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:10,
        src:'https://images.pexels.com/photos/4777687/pexels-photo-4777687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:11,
        src:'https://images.pexels.com/photos/7339653/pexels-photo-7339653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:12,
        src:'https://images.pexels.com/photos/7339653/pexels-photo-7339653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:13,
        src:'https://images.pexels.com/photos/7254512/pexels-photo-7254512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:14,
        src:'https://images.pexels.com/photos/7254512/pexels-photo-7254512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:15,
        src:'https://images.pexels.com/photos/9629527/pexels-photo-9629527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:16,
        src:'https://images.pexels.com/photos/9629527/pexels-photo-9629527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:17,
        src:'https://images.pexels.com/photos/4652070/pexels-photo-4652070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:18,
        src:'https://images.pexels.com/photos/4652070/pexels-photo-4652070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:19,
        src:'https://images.pexels.com/photos/5014154/pexels-photo-5014154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:20,
        src:'https://images.pexels.com/photos/5014154/pexels-photo-5014154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:21,
        src:'https://images.pexels.com/photos/9426901/pexels-photo-9426901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:22,
        src:'https://images.pexels.com/photos/9426901/pexels-photo-9426901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:23,
        src:'https://images.pexels.com/photos/9426902/pexels-photo-9426902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:24,
        src:'https://images.pexels.com/photos/9426902/pexels-photo-9426902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:25,
        src:'https://images.pexels.com/photos/1700656/pexels-photo-1700656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:26,
        src:'https://images.pexels.com/photos/1700656/pexels-photo-1700656.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:27,
        src:'https://images.pexels.com/photos/1551440/pexels-photo-1551440.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:28,
        src:'https://images.pexels.com/photos/1551440/pexels-photo-1551440.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:29,
        src:'https://images.pexels.com/photos/2966169/pexels-photo-2966169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:30,
        src:'https://images.pexels.com/photos/2966169/pexels-photo-2966169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:31,
        src:'https://images.pexels.com/photos/4498933/pexels-photo-4498933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id:32,
        src:'https://images.pexels.com/photos/4498933/pexels-photo-4498933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },

]



const Images = () => {
    const {number} = useParams()
    const [deck, setDeck] = useState(data);
    const [cardsLeft, setCardsLeft] = useState(1);
    const [cardDepo, setCardDepo] = useState([]);
    const [moves, setMoves] = useState(0);
    const [timer, setTimer] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [points, setPoints] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:3000/play/${number}`)
        .then(setCards(number));
    }, [number]);

    useEffect(() => {
        if (cardsLeft === 0 && moves > 1) {
            setTimerOn(false);
            let pointsEarned = points;
            let timeNeededToWin = timer;
            let movesNeededToWin = moves;
            pointsEarned = Math.floor(movesNeededToWin / timeNeededToWin * 1000);
            setPoints(pointsEarned);
        }
    }, [cardsLeft]);

    const setCards = (number) => {
        let tempDeck = [...deck];
        let tempCardsLeft = [...number]
        tempDeck.splice(number, deck.length);
        shuffle(tempDeck);
        setDeck(tempDeck);
        setTimerOn(true);
        setCardsLeft(tempCardsLeft)
    };


    useEffect(() => {
        if (cardDepo.length === 2) {
            if (cardDepo[0].src === cardDepo[1].src) {
                setTimeout(checkCards,500)
            } else {
                setTimeout(clearCards,500)
            }
        }
    }, [cardDepo])

    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1)
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn])

    const addMove = () => {
        let newMoves = moves;
        newMoves++;
        setMoves(newMoves);
    };

    //Shuffle data
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex],array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    }
 

    const showCard = (object) => {
        if (cardDepo.length < 2) {
            let img = document.getElementById(object.id);
            img.src = object.src;
            setCardDepo([...cardDepo, img]);
        } else {
            clearCards();
        }
    } 

    const clearCards = () => {
        let img1 = document.getElementById(cardDepo[0].id)
        let img2 = document.getElementById(cardDepo[1].id)
        img1.src = card
        img2.src = card
        setCardDepo([])
        addMove()
    }

    const checkCards = () => {
        let tempDeck = [...deck]
        tempDeck.map((object) => {
            if (object.src === cardDepo[0].src || object.src === cardDepo[1].src) {
                object.src = null
            }
        })
        let tempCardsLeft = cardsLeft
        tempCardsLeft = tempCardsLeft - 2
        setCardDepo([])
        setDeck(tempDeck)
        setCardsLeft(tempCardsLeft)
        addMove()
        console.log(tempCardsLeft)
    }

    return (
        <>
        <div className="game-header">
            {timerOn && <h1>Moves: {moves}</h1>}
        </div>

        <div className="img-container">
            {deck.length != number &&  moves < 1 && <h1 style={{textAlign:'center'}}>Loading...</h1>}
            {cardsLeft === 0 && moves > 0 && [
            <div className="home-page">
                <h1>
                    You have won!<br/>
                    You got: {points} points in {moves} moves! <br/>
                    It took you {Math.floor(timer/60)}:{timer%60}min
                </h1>
            </div>]}
           {timerOn && deck.map((object) => {
               return (
                        <>
                            {object.src === null && [
                                <div className="img-div" key={object.id}> 
                                    <img src={checked} alt=""/>
                                </div>
                            ]}
                            {object.src !== null && [
                                <div className="img-div" key={object.id}> 
                                    <img src={card} className="img-card" id={object.id} onClick={() => showCard(object)} alt=""/>
                                </div>
                            ]}

                        </>
                )
            })}
           

        </div>

        </>
    );
  }
  
  export default Images;
  