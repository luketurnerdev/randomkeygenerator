export const generateRandomKey = currentKeyset  => {
    return currentKeyset[Math.floor(Math.random() * currentKeyset.length)];
  }

export const generateSequentialKey = (currentKey, currentKeyset) => {
  let index = currentKeyset.indexOf(currentKey);
  let newKey;
  (index >= currentKeyset.length-1) ? newKey = currentKeyset[0] : newKey = currentKeyset[index+1]
  return newKey;
}
export const generateFifthsKey = (currentKey, currentKeyset) => {
  let index = currentKeyset.indexOf(currentKey);
  let newPos = index+7;
  // Reset to the start if exceeding array
  if (newPos > (currentKeyset.length-1)) {
    newPos = (newPos-currentKeyset.length);
  }
  return currentKeyset[newPos]
}
export const generateFourthsKey = (currentKey, currentKeyset) => {
  let index = currentKeyset.indexOf(currentKey);
  let newPos = index+5;
  // Reset to the start if exceeding array
  if (newPos > (currentKeyset.length-1)) {
    newPos = (newPos-currentKeyset.length);
  }
  return currentKeyset[newPos]
}

export const decideUpcomingKey = (chordMovement, upcomingKey, currentKeyset) => {
  console.log('deciding upcoming based on key order of ', chordMovement);
  console.log('upcoming key is');
  switch (chordMovement) {
    case "Random": 
      return (generateRandomKey(currentKeyset));
    case "Sequential":
      // We pass in upcoming so it starts from correct key
      return (generateSequentialKey(upcomingKey, currentKeyset));
    case "Fifths": 
      return (generateFifthsKey(upcomingKey, currentKeyset));
    default: {
      break;
    }
  }
} 