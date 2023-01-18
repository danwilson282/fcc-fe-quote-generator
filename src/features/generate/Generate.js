import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  generateRandom,
  selectRandom,
  selectQuote,
  selectFilm,
} from './generateSlice';
import styles from './Counter.module.css';

export function Random() {
  const count = useSelector(selectRandom);
  const quote = useSelector(selectQuote)
  const film = useSelector(selectFilm)
  const dispatch = useDispatch();
  
  return (
    <div id="quote-box">
      <figure>
        <blockquote id="text" className="blockquote">
          <p>"{quote}"</p>
        </blockquote>
        <figcaption id="author" className="blockquote-footer">
          <cite title="Source Title">{film}</cite>
        </figcaption>
      </figure>
      <div className={styles.row}>
        <button
          id="new-quote" 
          className={styles.button}
          onClick={() => dispatch(generateRandom())}
        >
          Generate New Quote
        </button>
        <div className={styles.row}>
        <p><a id="tweet-quote" href="http://twitter.com/intent/tweet" target="_blank">Tweet quote</a></p>
        </div>
        

      </div>

    </div>
  );
}
