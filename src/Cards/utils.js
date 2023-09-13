
// Helper functions

export const getWikiUrl = (firstName, lastName) => {
    return `https://en.wikipedia.org/wiki/${firstName}_${lastName}`;
}


export const getPlayerInformation = (playerName) => {
    const splitName = playerName.split(" ");
    window.open(getWikiUrl(splitName[0], splitName[1]), "_blank");
  };