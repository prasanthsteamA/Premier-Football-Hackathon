//Progression 1 - create a Manager array and return it

let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

const createManager=(managerName,managerAge,currentTeam,trophiesWon)=>{
  return [managerName,managerAge,currentTeam,trophiesWon];
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

const createFormation=(a)=>{
  if(a[0]||a[1]||a[2]){
    return{
        defender:a[0],
        midfield:a[1],
        forward:a[2]
    }
  }
  return null;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
const filterByDebut=(year)=>{
  return players.filter(ply=>{
     return ply.debut==year;
  })
}

//Progression 4 - Filter players that play at the position _______

const filterByPosition=(position)=>{
  return players.filter(ply=>{return ply.position===position});
}
// //Progression 5 - Filter players that have won ______ award

const filterByAward=(awardName)=>{
  let ar=players.reduce((acc,ply)=>{
    if(ply.awards
    .find(pl=>{
      return pl.name===awardName
    }))
    {
      acc.push(ply);
    }
    return acc;
    },[])
  return ar;
}

//Progression 6 - Filter players that won ______ award ____ times
const filterByAwardxTimes=(awardName,noOfTimes)=>{
  
  let ar= players.reduce((acc,ply)=>{
    let n=ply.awards
        .reduce((ac,pl)=>{
          if(pl.name===awardName){
            ac++;
          }
        return ac;
       },0);
    if(n===noOfTimes){
      acc.push(ply);
    }
    return acc;
    },[])
  return ar;
  

}

//Progression 7 - Filter players that won ______ award and belong to ______ country

const filterByAwardxCountry=(awardName,country)=>{
  if(awardName && country){
    let ar=[];
    ar=players.reduce((acc,player)=>{
      if(player.country===country && 
        player.awards.find(pl=>{
          return pl.name===awardName
        }))
      {
        acc.push(player);
      }
      return acc;
    },[])
    return ar;
  }
  return [];
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
const filterByNoOfAwardsxTeamxAge=(noOfAwards,team,age)=>{
  if(noOfAwards,team,age){
    let ar=[];
    ar=players.filter(player=>{
      return player.awards.length>=noOfAwards && player.team===team && player.age<age
    })
    return ar;
  }
  return [];
}


//Challenge 1 - Sort players in descending order of their age

const SortByAge=()=>{
  return players.sort((a,b)=>{
    if(a.age>b.age){
      return -1;
    }
    else if(a.age<b.age){
      return 1;
    }
    else{
      return 0;
    }
  })
}

//Challenge 2 - Sort players beloging to _____ team in descending order of awards won
const FilterByTeamxSortByNoOfAwards=(team)=>{
  if(team){
    let ar=[];
    ar=players.filter(player=>{
      return player.team===team && player.awards.length!=0;
    }).sort((a,b)=>{
      if(a.awards.length>b.awards.length){
        return -1;
      }
      else if(a.awards.length<b.awards.length){
        return 1;
      }
      else{
        if(a.debut>b.debut){
          return 1;
        }
        else{
          return-1;
        }
      }
    })
    return ar;
  }
  return [];
}

//Judgement 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

const SortByNamexAwardxTimes=(awardName, noOfTimes, country)=>{
  if(awardName && noOfTimes && country){
    let ar=[];
    ar=players.filter(player=>{
      return player.country===country;
    });
    ar=ar.reduce((acc,ply)=>{
      let n=ply.awards
        .reduce((ac,pl)=>{
          if(pl.name===awardName){
            ac++;
          }
          return ac;
        },0);
      if(n===noOfTimes){
        acc.push(ply);
      }
      return acc;
    },[]);
  ar=ar.sort((a,b)=>{
      return a.name.localeCompare(b.name)
    })
    return ar;
    
  }
  return [];
}
//Judgement  2 - Sort players that are older than _____ years in alphabetical order
const SortByNamexOlderThan=(age)=>{
  if(age){
    let ar=[];
    ar=players.filter(player=>{
      return (player.age>age);
    }).sort((a,b)=>{
      return a.name.localeCompare(b.name);
    });
    ar=ar.map(ar1=>{
      ar1.awards.sort((a,b)=>{
        return b.name.localeCompare(a.name);
      })
      return ar1;
    })
    return ar;
    
  }
  return [];
}