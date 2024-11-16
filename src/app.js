//Progression 1 - create a Manager array and return it

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  let result=[managerName,managerAge,currentTeam,trophiesWon];
  return result;
}
//Write your function here


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
function createFormation(arr){
  if(arr.length==0){
    return null;
  }
  else{
  return {
    defender:arr[0],
    midfield:arr[1],
    forward:arr[2]
  }; 
}
}
//write your function here


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter(player=>player.debut==year);
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter(player=>player.position==position);
}

// //Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  return players.filter(player=>{
    for(i=0;i<player.awards.length;i++){
    if(player.awards[i].name==awardName){
      return player;
    }
  }
  });
}


//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  return players.filter(player=>{
    let count=0;
    for(let i=0;i<player.awards.length;i++){
    if(player.awards[i].name==awardName){
      count++;
    }
  }
  if(count==noOfTimes){
    return true;
  }
  });
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  return players.filter(player=>{
    if(player.country==country){
    for(let i=0;i<player.awards.length;i++){
    if(player.awards[i].name==awardName){
      return true;
    }
  }
}
});
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
  return players.filter(player=>{
    if(player.awards.length>=noOfAwards && player.team==team && player.age<=age){
      return true;
    }
    return false;
  })
}

//Challenge 1 - Sort players in descending order of their age
function SortByAge(){
  return players.sort((a,b)=>b.age-a.age);
}

//Challenge 2 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team)
{
  let sortplayers=[];
  for(let i=0;i<players.length;i++){
    if(players[i].team==team){
      sortplayers.push(players[i])
    }
  }
  for(let i=0;i<sortplayers.length;i++){
    for(let j=i+1;j<sortplayers.length;j++){
      if(sortplayers[i].awards<sortplayers[j].awards){
        let temp=sortplayers[i];
        sortplayers[i]=sortplayers[j];
        sortplayers[j]=temp;
      }
    }
  }
  return sortplayers;
}

//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName,noOfTimes,country){
  let sortplayers=players.filter(player=>{
    let count=0;
    for(let i=0;i<player.awards.length;i++){
    if(player.awards[i].name==awardName){
      count++;
    }
  }
  if(count==noOfTimes && player.country==country){
    return true;
  }
  });
  return sortplayers.sort((a,b)=> a.name.localeCompare(b.name));
}

//Judgement  2 - Sort players that are older than _____ years in alphabetical order
function SortByNamexOlderThan(age){
  let sortplayers=[];
  for(let i=0;i<players.length;i++){
    if(players[i].age>age){
      sortplayers.push(players[i])
    }}
  sortplayers.sort((a,b)=>a.name.localeCompare(b.name))
  for(let i=0;i<sortplayers.length;i++){
    sortplayers[i].awards.sort((a,b)=>b.year-a.year);
  }
  return sortplayers;
}
















