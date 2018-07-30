import { length, substr } from './strings';

export default function isPalindrome(word) {
  if( length(word) < 2){
    return true;
  };

  for(let i = 0; i < length(word); i++ ) {
    if( substr( word, i, 1 ) !== substr( word, -1-i, 1 )){
      return false;
    }
   }
   return true;
};

