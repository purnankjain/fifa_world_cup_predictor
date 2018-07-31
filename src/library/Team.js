export default class Team {
  static isWinner(groupWinners, teamName) {
    return groupWinners.includes(teamName);
  }
  static updateGroupWinner(teamName, groupWinners, maximum) {
    if(groupWinners.includes(teamName)) {
      let index = groupWinners.indexOf(teamName);
      groupWinners.splice(index, 1);
    } else {
      if(groupWinners.length < maximum) {
        groupWinners.push(teamName);
      }
    }
    return groupWinners;
  }
}