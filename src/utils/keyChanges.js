export const generateRandomKey = currentKeyset  => {
    return currentKeyset[Math.floor(Math.random() * currentKeyset.length)];
    // setUpcomingKey(newKey)
    // randomizeModIfEnabled();
  }