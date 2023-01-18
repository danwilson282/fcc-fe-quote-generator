import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  quote: '',
  film: 'Generate a random quote...',
};

const quotes = [
  {quote: 'May the Force be with you.',
  film: 'Star Wars, 1977'},
  {quote: 'There\'s no place like home.',
  film: 'The Wizard of Oz, 1939'},
  {quote: 'I\'m the king of the world!',
  film: 'Titanic, 1997'},
  {quote: 'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
  film: 'Dead Poets Society, 1989'},
  {quote: 'Elementary, my dear Watson.',
  film: 'The Adventures of Sherlock Holmes, 1939'},
  {quote: 'It\'s alive! Its alive!',
  film: 'Frankenstein, 1931'},
  {quote: 'My mama always said life was like a box of chocolates. You never know what you\'re gonna get.',
  film: 'Forrest Gump, 1994'},
  {quote: 'I\'ll be back.',
  film: 'The Terminator, 1984'},
  {quote: 'You\'re gonna need a bigger boat.',
  film: 'Jaws, 1975'},
  {quote: 'Here\'s looking at you, kid.',
  film: 'Casablanca,1942'},
  {quote: 'My precious.',
  film: 'Two Towers, 2002'},
  {quote: 'Houston, we have a problem.',
  film: 'Apollo 13, 1995'},
  {quote: 'Theres no crying in baseball!',
  film: 'A League of Their Own, 1992'},
  {quote: 'E.T. phone home.',
  film: 'E.T. the Extra-Terrestrial, 1982'},
  {quote: 'You can\'t handle the truth!',
  film: 'A Few Good Men, 1992'},
  {quote: 'A martini. Shaken, not stirred.',
  film: 'Goldfinger, 1964'},
  {quote: 'Life is a banquet, and most poor suckers are starving to death!',
  film: 'Auntie Mame, 1958'},
  {quote: 'If you build it, he will come.',
  film: 'Field of Dreams, 1989'},
  {quote: 'The stuff that dreams are made of.',
  film: 'The Maltese Falcon, 1941'},
  {quote: 'Magic Mirror on the wall, who is the fairest one of all?',
  film: 'Snow White and the Seven Dwarfs, 1937'},
]

function generateQuote(){
  let q = Math.random()*quotes.length
  q = Math.floor(q)
  return q;
}

export const randomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {
    generateRandom: (state) => {
      state.value =generateQuote();
      state.film = quotes[state.value].film;
      state.quote = quotes[state.value].quote;
    },
  },
});

export const { generateRandom} = randomSlice.actions;
export const selectRandom = (state) => state.random.value;
export const selectQuote = (state) => state.random.quote;
export const selectFilm = (state) => state.random.film;
export default randomSlice.reducer;
