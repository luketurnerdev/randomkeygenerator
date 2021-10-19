export const generateRandomKey = currentKeyset  => {
    return currentKeyset[Math.floor(Math.random() * currentKeyset.length)];
  }

export const generateSequentialKey = (currentKey, currentKeyset) => {
  let index = currentKeyset.indexOf(currentKey);
  let newKey;
  (index >= currentKeyset.length-1) ? newKey = currentKeyset[0] : newKey = currentKeyset[index+1]
  return newKey;
}