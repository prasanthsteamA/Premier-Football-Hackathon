//Progression 1 - create a Manager array and return it

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  let managerArray=[managerName,managerAge,currentTeam,trophiesWon];
  return managerArray
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
function createFormation(array){
  // console.log(array)
  if (array.length==0) return null;

  let teamFormationObj = {
  "defender":undefined,
   "midfield":undefined,
   "forward":undefined
  }
  
  let i = 0;

  for(let form in teamFormationObj){
    teamFormationObj[form]=array[i]
    i+=1
  }

  //  console.log(teamFormationObj)
  return teamFormationObj

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let filteredplayers = players.filter((player)=>{if (player.debut==year) return player})
    return filteredplayers
}



//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  let filteredplayers = players.filter((player)=>{if (player.position==position) return player})
  return filteredplayers;
} 


// //Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let filteredplayers = players.filter((player)=>{
    let eachPlayerAward = player.awards
    for(award of eachPlayerAward){
      // console.log(award.name)
      if (award.name==awardName){
        return player
      }
    }
   
  })
  return filteredplayers;
} 


//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){

  let res=[]
 
   res = players.filter((player)=>{
    let awardsofThatPlayer = player.awards;
    // console.log(awardsofThatPlayer)

    let awardsMap  = {}
    for (let award of awardsofThatPlayer){
    //  console.log(award)
     if (award.name in awardsMap){
      awardsMap[award.name]=awardsMap[award.name]+ 1;
     }
     else{
      awardsMap[award.name]=1;
     }
    }

    // console.log(awardsMap)

    for(let award in awardsMap){
      // console.log(award,awardName)
      if (award==awardName && awardsMap[award]==noOfTimes){
        return player
      }
    }

   })
// console.log(res)
  return res

}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry (awardName, country){

  let res=[]
  res = players.filter((player)=>{
    if (player.country== country ){
      let eachPlayerAward = player.awards
    for(let award of eachPlayerAward){
      // console.log(award)
      if (award.name == awardName){
        return player
      }
    } 
  }
  })
  // console.log(res);
  

  return res

}



//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let res=[];
  
  res=players.filter((player)=>{
    // console.log(player.awards.length<=noOfAwards,player.team==team,player.age<age)
    if (player.awards.length>=noOfAwards && player.team==team && player.age<age){
      return player;
    }

  })

  return res;

}




// console.log(arr)






//Challenge 1 - Sort players in descending order of their age
function SortByAge(){

}




//Challenge 2 - Sort players beloging to _____ team in descending order of awards won

function helperforFilterByTeamxSortByNoOfAwards(arr,low,high){
  let pivot = arr[low];
  // console.log(pivot)
  let i=low
  let j = high
  while(i<j)
    {
  while (arr[i].awards.length>pivot.awards.length && i<=high-1){
    i+=1;
  }
  while (arr[j].awards.length<=pivot.awards.length && j>=low+1){
    j-=1;
  }
  if(i<j){
  [arr[i],arr[j]] = [arr[j],arr[i]]
  }
  }
 [arr[j],arr[low]] = [arr[low],arr[j]]

 return j

}

function SortByNoOfAwards(arr,low,high){
  if(low<high){
    let partition  = helperforFilterByTeamxSortByNoOfAwards(arr,low,high)
    SortByNoOfAwards(arr,low,partition-1)
    SortByNoOfAwards(arr,partition+1,high)

  }
  return arr
}
function FilterByTeamxSortByNoOfAwards(team){

  let res=[]

  let filteredPlayers = players.filter((player)=>{
    if (player.team ==team){
      return player
    }
  })

  for(let i = 0 ; i<filteredPlayers.length;i++)
    // console.log(filteredPlayers[i].awards.length,filteredPlayers[i].name)
 

  res=SortByNoOfAwards(filteredPlayers,0,filteredPlayers.length-1)

  return  res
 

}

//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function helperforquickSortByNamexAwardxTimes(arr,low,high){
  let pivot = arr[low];
  // console.log(pivot)
  let i=low
  let j = high
  while(i<j)
    {
  while (arr[i].name>pivot.name && i<=high-1){
    i+=1;
  }
  while (arr[j].name<=pivot.name && j>=low+1){
    j-=1;
  }
  if(i<j){
  [arr[i],arr[j]] = [arr[j],arr[i]]
  }
  }
 [arr[j],arr[low]] = [arr[low],arr[j]]

 return j

}

function quickSortByNamexAwardxTimes(arr,low,high){
  if(low<high){
    let partition  = helperforquickSortByNamexAwardxTimes(arr,low,high)
    quickSortByNamexAwardxTimes(arr,low,partition-1)
    quickSortByNamexAwardxTimes(arr,partition+1,high)

  }
  return arr
}




function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  
  
  let res=[]
 
   let filteredArray = players.filter((player)=>{
    let awardsofThatPlayer = player.awards;
    // console.log(awardsofThatPlayer)

    let awardsMap  = {}
    for (let award of awardsofThatPlayer){
    //  console.log(award)
     if (award.name in awardsMap){
      awardsMap[award.name]=awardsMap[award.name]+ 1;
     }
     else{
      awardsMap[award.name]=1;
     }
    }

    // console.log(awardsMap)

    for(let award in awardsMap){
      // console.log(award,awardName)
      if (award==awardName && awardsMap[award]==noOfTimes && player.country == country){
        return player
      }
    }

   })
res = quickSortByNamexAwardxTimes(filteredArray,0,filteredArray.length-1)
// console.log(res)
 
return  res


}


//Judgement  2 - Sort players that are older than _____ years in alphabetical order



function helperforquickSortByNamexOlderThan(arr,low,high){
  let pivot = arr[low];
  // console.log(pivot)
  let i=low
  let j = high
  while(i<j)
    {
  while (arr[i].name>pivot.name && i<=high-1){
    i+=1;
  }
  while (arr[j].name<=pivot.name && j>=low+1){
    j-=1;
  }
  if(i<j){
  [arr[i],arr[j]] = [arr[j],arr[i]]
  }
  }
 [arr[j],arr[low]] = [arr[low],arr[j]]

 return j

}

function quickSortByNamexOlderThan(arr,low,high){
  if(low<high){
    let partition  = helperforquickSortByNamexOlderThan(arr,low,high)
    quickSortByNamexOlderThan(arr,low,partition-1)
    quickSortByNamexOlderThan(arr,partition+1,high)

  }
  return arr
}

function helperforquickSortAwardsByCO(arr,low,high){
    let pivot = arr[low];
    // console.log("Pivot",pivot)
    let i=low
    let j = high
    while(i<j)
      {
    while (arr[i].year>pivot.year && i<=high-1){
      i+=1;
    }
    while (arr[j].year<=pivot.year && j>=low+1){
      j-=1;
    }
    if(i<j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    }
   [arr[j],arr[low]] = [arr[low],arr[j]]
  
   return j
  
  }
  



function quickSortAwardsByCO(arr,low,high){
    if(low<high){
      let partition  = helperforquickSortAwardsByCO(arr,low,high)
      quickSortAwardsByCO(arr,low,partition-1)
      quickSortAwardsByCO(arr,partition+1,high)
  
    }
    return arr
  }
  



  function SortByNamexOlderThan(age){
    let res=[]
  
    let filterbyAgeArray = players.filter((player)=>{
      if (player.age > age ){
        return player;
      }
    }) 
  
    // console.log(filterbyAgeArray)
    
    res = quickSortByNamexOlderThan(filterbyAgeArray,0,filterbyAgeArray.length-1)
  //  console.log(res)
  // console.log(" before awards : ",res[1])

    res.forEach((player)=>{
    //   console.log(player.awards)
      quickSortAwardsByCO(player.awards,0,player.awards.length-1)
  
    })
    // console.log("After sorted awards : ",res)
    return res
  }
  