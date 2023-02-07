

function gameObject() {
  const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        'Alan Anderson': {
          number: '0',
          shoe: '16',
          points: '22',
          rebounds: '12',
          assists: '12',
          steals: '3',
          blocks: '1',
          slamDunks: '1'
        },

        'Reggie Evans': {
          number: '30',
          shoe: '14',
          points: '12',
          rebounds: '12',
          assists: '12',
          steals: '12',
          blocks: '12',
          slamDunks: '7'

        },
        'Brook Lopez': {
          number: '11',
          shoe: '17',
          points: '17',
          rebounds: '19',
          assists: '10',
          steals: '3',
          blocks: '1',
          slamDunks: '15'
        },
        'Mason Plumlee': {
          number: '1',
          shoe: '19',
          points: '26',
          rebounds: '12',
          assists: '6',
          steals: '3',
          blocks: '8',
          slamDunks: '5'
        },
        'Jason Terry': {
          number: '31',
          shoe: '15',
          points: '19',
          rebounds: '2',
          assists: '2',
          steals: '4',
          blocks: '11',
          slamDunks: '1'
        }
      }


    },

    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        'Jeff Adrien': {
          number: '4',
          shoe: '18',
          points: '10',
          rebounds: '1',
          assists: '1',
          steals: '2',
          blocks: '7',
          slamDunks: '2'
        },

        'Bismak Biyombo': {
          number: '0',
          shoe: '16',
          points: '12',
          rebounds: '4',
          assists: '7',
          steals: '7',
          blocks: '15',
          slamDunks: '10'
        }
        ,
        'DeSagna Diop': {
          number: '2',
          shoe: '14',
          points: '24',
          rebounds: '12',
          assists: '12',
          steals: '4',
          blocks: '5',
          slamDunks: '5'

        },

        'Ben Gordon': {
          number: '8',
          shoe: '15',
          points: '33',
          rebounds: '3',
          assists: '2',
          steals: '1',
          blocks: '1',
          slamDunks: '0'

        },

        'Brendan Haywood': {
          number: '33',
          shoe: '15',
          points: '6',
          rebounds: '12',
          assists: '12',
          steals: '22',
          blocks: '5',
          slamDunks: '12'

        }
      }

    }

  }
  return game
}

// const awayTeamPlayersVar = awayTeamPlayers()


function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}
function awayTeamName() {
  let object = gameObject();
  return object["away"]["teamName"];
}

function getTeamPlayers(str) {
  let game = gameObject()[str]
  let teamPlayersData;
  for (let teamKey in game) {
    if (teamKey === "players") {
      teamPlayersData = game[teamKey];
    }

  } return teamPlayersData

}

function playerStats(playerName) {
  let game = gameObject()
  let stats;
  for (let gameKey in game) {
    let gameObj = game[gameKey];
    for (let teamKey in gameObj) {
      if (teamKey === "players") {
        let playersShown = gameObj[teamKey];
        for (nameKey in playersShown) {
          if (nameKey === playerName) {
            stats = playersShown[nameKey]
          }
        }
      }
    }
  } return stats;
}

function numPointsScored(playerName) {
  let playerStatList = playerStats(playerName)
  let pointsScored;
  for (let stat in playerStatList) {
    if (stat === "points") {
      pointsScored = playerStatList[stat];
    }
  } return pointsScored;
}

function shoeSize(playerName) {
  let playerStatList = playerStats(playerName);
  let shoeSize;
  for (let stat in playerStatList) {
    if (stat === "shoe") {
      shoeSize = playerStatList[stat];
    }
  } return shoeSize
}

function teamColors(teamName) {
  let game = gameObject();
  let teamColors;
  for (gameObj in game) {
    let gameHoA = game[gameObj];
    for (key in gameHoA) {
      let keyName = gameHoA[key]
      if (keyName === teamName) {
        teamColors = gameHoA.colors
      }
    }
  } return teamColors
}


function teamNames() {
  let game = gameObject()
  let playerNames = [];
  for (let gameKey in game) {
    let gameObj = game[gameKey];
    for (let teamKey in gameObj) {
      if (teamKey === "players") {
        let playersShown = gameObj[teamKey];
        for (player in playersShown) {
          playerNames.push(player)

        }
      }
    }
  } return playerNames
}



function playerNumbers(teamNameCheck) {
  let game = gameObject()
  let playersNumbers = []
  if (homeTeamName() === teamNameCheck) {
    let gamePlayers = gameObject().home.players;
    debugger
    for (player in gamePlayers) {
      let eachPlayer = gamePlayers[player]
      for (key in eachPlayer) {
        if (key === "number") {
          debugger
          let numberKey = eachPlayer[key];
          playersNumbers.push(numberKey)
        }
      }
    }
  } else if (awayTeamName() === teamNameCheck) {
    let gamePlayers = gameObject().away.players;
    for (player in gamePlayers) {
      let eachPlayer = gamePlayers[player]
      for (key in eachPlayer) {
        if (key === "number") {
          let numberKey = eachPlayer[key];
          playersNumbers.push(numberKey)
        }
      }
    }

  } return playersNumbers
}


function bigShoeRebounds() {
  let gameObj = gameObject();
  let playerShoeRebound = [];
  let numberOfRebounds
  for (key in gameObj) {
    let HomeAwayKey = gameObj[key];
    for (key2 in HomeAwayKey) {
      if (key2 === "players") {
        let playerList = HomeAwayKey[key2];
        for (key3 in playerList) {
          let playerStatList = playerList[key3]
          if ("shoe" in playerStatList) {
            playerShoeRebound.push([playerStatList["shoe"], playerStatList["rebounds"]])
            if (playerShoeRebound.length > 9) {
              debugger
              let i = 0;
              let winningNumber = [];
              while (i < playerShoeRebound.length) {
                let smallArrayInPSR = playerShoeRebound[i]
                let checkNumber = smallArrayInPSR[0]
                if (checkNumber > winningNumber || winningNumber === undefined) {
                  winningNumber = smallArrayInPSR;
                } else {
                  winningNumber == winningNumber
                }

                i++
              } numberOfRebounds = winningNumber[1]
            }
          }

        }
      }

    }

  } return numberOfRebounds
}

function mostPoints() {
  let gameObj = gameObject();
  let pointsPlayers = [];
  let mostPoints;
  for (key in gameObj) {
    let HomeAwayKey = gameObj[key];
    for (key2 in HomeAwayKey) {
      if (key2 === "players") {
        let playerList = HomeAwayKey[key2];
        for (key3 in playerList) {
          let playerStatList = playerList[key3]
          if ("shoe" in playerStatList) {
            pointsPlayers.push([playerStatList["points"], key3])
            if (pointsPlayers.length > 9) {
              let i = 0;
              let winningNumber = [0]
              while (i < pointsPlayers.length) {
                let smallArrayInPP = pointsPlayers[i]
                let checkNumber = parseInt(smallArrayInPP[0])
                if (checkNumber > parseInt(winningNumber[0])) {
                  winningNumber = smallArrayInPP;
                } else if (checkNumber <= parseInt(winningNumber[0])) {
                  winningNumber;
                }

                i++
              } mostPoints = winningNumber[1]
            }
          }
        }
      }
    }
  } return mostPoints
}

function winningTeam() {
  let gameObj = gameObject();
  let awayTeamPoints = [];
  let homeTeamPoints = [];
  let homeTeamSum = 0;
  let awayTeamSum = 0;

  for (key in gameObj) {
    let HomeAwayKey = gameObj[key];
    for (key2 in HomeAwayKey) {
      if (key2 === "players") {
        let playerList = HomeAwayKey[key2];
        for (key3 in playerList) {
          let playerStatList = playerList[key3]
          if ("points" in playerStatList) {
            if (homeTeamPoints.length < 5) {
              homeTeamPoints.push(playerStatList["points"])
            } else {
              awayTeamPoints.push(playerStatList["points"])
            }
          }

        }
      }
    }
  } for (i = 0; i < homeTeamPoints.length; i++) {
    let points = parseInt(homeTeamPoints[i])
    homeTeamSum = homeTeamSum + points
  } for (i = 0; i < awayTeamPoints.length; i++) {
    let points = parseInt(awayTeamPoints[i])
    awayTeamSum = awayTeamSum + points
  } if (homeTeamSum > awayTeamSum) {
    return "Home Team";
  } else {
    return "Away Team";
  }
}

function longestPlayerName() {
  let allPlayers = teamNames();
  let i = 0;;
  let winningNumber = 0;
  let winningName;
  while (i < allPlayers.length) {
    let smallArrayInAP = allPlayers[i]
    let x = 0;
    while (x < smallArrayInAP.length) {
      let count = 0;
      for (char in smallArrayInAP) {
        let character = smallArrayInAP[char]
        count = count + 1;
        x++;
      } if (count > winningNumber) {
        winningNumber = count;
        winningName = allPlayers[i]
      } else {
        winningNumber;
        winningName
      }
    }
    i++
  } return winningName
}


function doesLongNameStealATon() {
  let statToCompare = playerStats(longestPlayerName())["steals"];
  let gameObj = gameObject();
  debugger
  for (key in gameObj) {
    let HomeAwayKey = gameObj[key];
    for (key2 in HomeAwayKey) {
      if (key2 === "players") {
        let playerList = HomeAwayKey[key2];
        for (key3 in playerList) {
          let playerStatList = playerList[key3]
          if ("steals" in playerStatList) {
            if (parseInt(statToCompare) < parseInt(playerStatList["steals"])) {
              return false;

            } else {
              continue;

            }
          }
        }
      }
    }
  } return true
}

