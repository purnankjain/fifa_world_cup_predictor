import Team from "../../library/Team";

describe('Team library tests', () => {
  it('should return true when a team is a winner', () => {
    var groupWinners = ['India', 'England', 'Pakistan'];
    var winningTeam = groupWinners[0];

    expect(Team.isWinner(groupWinners, winningTeam)).toEqual(true);
  });
  it('should add a new team to winners when number of current winners is less than maximum', () => {
    var groupWinners = [];
    var maximum = 1;
    var newTeam = 'India';

    var actualWinners = Team.updateGroupWinner(newTeam, groupWinners, maximum);

    expect(actualWinners.length).toEqual(1);
    expect(actualWinners).toEqual([newTeam]);
  });
  it('should not add a new team  to winners when number of current winners is equal than maximum', () => {
    var groupWinners = ['England'];
    var maximum = 1;
    var newTeam = 'India';

    var actualWinners = Team.updateGroupWinner(newTeam, groupWinners, maximum);

    expect(actualWinners.length).toEqual(1);
    expect(actualWinners).toEqual(groupWinners);
  });
  it('should remove existing team', () => {
    var groupWinners = ['England', 'India'];
    var maximum = 2;
    var newTeam = 'India';

    var actualWinners = Team.updateGroupWinner(newTeam, groupWinners, maximum);

    expect(actualWinners.length).toEqual(1);
    expect(actualWinners).toEqual(groupWinners);
  });
});