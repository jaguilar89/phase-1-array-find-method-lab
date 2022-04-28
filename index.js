// code your solution here
const superbowlWin = (record) => {
    const winningGame = record.find(game => game.result === 'W');
    if (winningGame) {
        return winningGame.year
    }
    return undefined;
}