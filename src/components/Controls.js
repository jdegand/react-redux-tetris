import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveDown, moveLeft, moveRight, rotate } from '../actions/index';

export default function Controls(props) {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver) 

    const handleKeyPress = (event) => {
        if (!isRunning || gameOver) { return }
    
        switch (event.keyCode) {
           case 38: { // up
            event.preventDefault();
            dispatch(rotate());
            break; 
           }
           case 40: { // down
            event.preventDefault();
            dispatch(moveDown());
            break;
           }
           case 37: { // left
            event.preventDefault();
            dispatch(moveLeft());
            break;
           }
           case 39: { //right 
            event.preventDefault();
            dispatch(moveRight());
            break;
           }
           case 32: { // spacebar
             event.preventDefault();
             dispatch(rotate());
             break;
           }
        }
    };

    React.useEffect(()=> {
        document.addEventListener('keydown', handleKeyPress);

        return function cleanup(){
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [])

    return (
        <div className={`controls`}>
            {/* left */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveLeft())
                }}>Left</button>

            {/* right */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveRight())
                }}>Right</button>

            {/* rotate */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(rotate())
                }}>Rotate</button>

            {/* down */}
            <button 
                disabled={!isRunning || gameOver}
                className="control-button" 
                onClick={(e) => {
                    if (!isRunning || gameOver) { return } 
                    dispatch(moveDown())
                }}>Down</button>

        </div>
    )
}