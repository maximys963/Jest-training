import React     from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents;
    if(props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret world!
            </span>
        )
    }
    return(
        <div data-test="component-guessed-words">
            { contents }
        </div>
    )
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWords : PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;
