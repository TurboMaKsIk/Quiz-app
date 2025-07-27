import React from 'react';

const FinalGame = ({ allQuest, trueQuest, onClick, procentTitle }) => {

    return (
        <div className='final-block'>
            <h1>{procentTitle()}</h1>
            <h2>{`${trueQuest}/${allQuest}`}</h2>
            <button className='quiz-blocks-title quiz-blocks' onClick={onClick}>Заново</button>
        </div>
    );
}

export default FinalGame;
