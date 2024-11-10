let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
const createManager=(managerName, managerAge, currentTeam, trophiesWon) => {
  const manager=[]
  manager.push(managerName,managerAge,currentTeam,trophiesWon);
  return manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
const createFormation=(form) => {
  if(form.length===0){
    return null;
  }
  else{
    return {
      defender: form[0],
      midfield: form[1],
      forward: form[2]
    }
  }
  

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
  const filterByDebut=(year) => {
    let filteredPlayers=[];
    if(year){
      year=parseInt(year);
    filteredPlayers=players.filter((player) => {
          return player.debut===year;
    })
  }
    return filteredPlayers;

  }


//Progression 4 - Filter players that play at the position _______
const filterByPosition=(position) =>{
  let filteredPlayers=[]; 
  if(position){
   filteredPlayers=players.filter((player) =>{
      return player.position===position;
    })
      
  }
    return filteredPlayers;

}


// //Progression 5 - Filter players that have won ______ award
 const filterByAward=(awardName) =>{
  let filteredPlayers=[];
  if(awardName){
    filteredPlayers=players.filter((player) =>{
      let awards=[];

      awards=player.awards.filter((award) =>{
            return award.name===awardName;
      })
      if(awards.length){
        return player;
      }
    })
  }
    return filteredPlayers;

 }


//Progression 6 - Filter players that won ______ award ____ times

const filterByAwardxTimes=(awardName, noOfTimes) =>{
  let filteredPlayers=[];
  if(awardName){
    filteredPlayers=players.filter((player) =>{
      let awards=[];

      awards=player.awards.filter((award) =>{
            return award.name===awardName;
      })
      if(awards.length==noOfTimes){
        return player;
      }
    })
  }
    return filteredPlayers;


}

//Progression 7 - Filter players that won ______ award and belong to ______ country
const filterByAwardxCountry=(awardName, country) =>{
  let filteredPlayers=[];
  if(awardName){
    filteredPlayers=players.filter((player) =>{
      let awards=[];

      awards=player.awards.filter((award) =>{
            return award.name===awardName;
      })
      if(awards.length && player.country===country){
        return player;
      }
    })
  }
  return filteredPlayers;

}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
const filterByNoOfAwardsxTeamxAge=(noOfAwards, team, age) =>{
  let filteredPlayers=[];
  if(noOfAwards){
    filteredPlayers=players.filter((player) =>{
      
      if(player.awards.length>=noOfAwards && player.team===team && player.age<age){
        return player;
      }
    })
  }
  return filteredPlayers;

}

//Challenge 1 - Sort players in descending order of their age
const SortByAge=() => {
  const copyplayers=[...players];

  for(let i=0;i<copyplayers.length-1;i++){
    for(let j=0;j<copyplayers.length-i-1;j++){
      if(copyplayers[j].age<copyplayers[j+1].age){
        let temp=copyplayers[j];
        copyplayers[j]=copyplayers[j+1];
        copyplayers[j+1]=temp;

      }
    }
  }
  return copyplayers;

}

//Challenge 2 - Sort players beloging to _____ team in descending order of awards won
const FilterByTeamxSortByNoOfAwards=(team) =>{
  let copyplayers=players.filter((player) => {
         return player.team===team;
  });
  
  for(let i=0;i<copyplayers.length-1;i++){
    for(let j=0;j<copyplayers.length-i-1;j++){
      if(copyplayers[j].awards.length<copyplayers[j+1].awards.length){
        let temp=copyplayers[j];
        copyplayers[j]=copyplayers[j+1];
        copyplayers[j+1]=temp;

      }
      else if(copyplayers[j].awards.length===copyplayers[j+1].awards.length &&copyplayers[j].awards[0].year<copyplayers[j+1].awards[0].year ){
        let temp=copyplayers[j];
        copyplayers[j]=copyplayers[j+1];
        copyplayers[j+1]=temp;
      }
    }
  }
  return copyplayers;

}


//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
const SortByNamexAwardxTimes=(awardName, noOfTimes, country) =>{
  let filteredPlayers=[];
  if(awardName){
    filteredPlayers=players.filter((player) =>{
      let awards=[];

      awards=player.awards.filter((award) =>{
            return award.name===awardName;
      })
      if(awards.length===noOfTimes && player.country===country){
        return player;
      }
    })
  }
  filteredPlayers.sort((a,b) => a.name.localeCompare(b.name));
  return filteredPlayers;


}


//Judgement  2 - Sort players that are older than _____ years in alphabetical order
const SortByNamexOlderThan=(age) => {
  let filteredPlayers=[]
  if(age){
  filteredPlayers=players.filter((player) =>{
    return player.age>age;
  });

  filteredPlayers.sort((a,b) => a.name.localeCompare(b.name));
  
}
return filteredPlayers;

}

















