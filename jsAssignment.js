players = [
    {playerCode:1031, playerName:"Smith", innings:120, totalRuns:1400, grade:'India-A'},
    {playerCode:1010, playerName:"Peter", innings:110, totalRuns:1600, grade:'UK-A'},
    {playerCode:1836, playerName:"Nitin", innings:119, totalRuns:1250, grade:'India-B'},
    {playerCode:1841, playerName:"Kang", innings:170, totalRuns:1100, grade:'Austrellia-A'},
    {playerCode:9931, playerName:"John", innings:111, totalRuns:1730, grade:'Austrellia-B'},
    {playerCode:8481, playerName:"Smith", innings:109, totalRuns:1450, grade:'India-C'}
];


//Q1. define arrow function to print gradewise count of players
//    sample output: { A: 3, B: 2, C: 1 }

function groupByGrades(){
    let groups = {}

    players.forEach(ele => {
        let grade = ele.grade
        if(!groups[grade]){
            groups[grade]=1
        }
        else{
            groups[grade]+=1
        }
    });
    return groups 
}

// console.log(groupByGrades())



// *****************************************************************************************

//Q2. define function to print name of players in ascending orders
//	sample output : [ 'John', 'Kang', 'Nitin', 'Peter', 'Smith', 'Smith' ]

function print_name(){
    return players.map((item)=>item.playerName).sort((a,b)=>a.localeCompare(b))
}

// console.log(print_name())


// *****************************************************************************************

//Q3. define function to print player-name who scored max runs and player-name who scored min runs

function print_PlayerName(){
    let maxi = players.reduce((prev, curr)=>curr.totalRuns > prev.totalRuns? curr: prev)
    let mini = players.reduce((prev, curr)=>curr.totalRuns < prev.totalRuns? curr: prev)

    return [maxi.playerName, mini.playerName]
}
// console.log(print_PlayerName())


// *****************************************************************************************

//Q4. define function to filter players whose innings are between 111 and 130

function filterPlayers(){
    return players.filter(item=>item.innings>=111 && item.innings<=130)
}
// console.log(filterPlayers())

// *****************************************************************************************

//Q5. define arrow function to create array which collects players whose grades are from 'india'

function filterGrades(){
    return players.filter(item => item.grade.toLowerCase().includes('india'));
}
// console.log(filterGrades())

// *****************************************************************************************

//Q6. define function to find duplicates by name of player.

function findDuplicates(){
    let seen = {}
    let duplicates = []

    players.forEach(ele=>{
        let name = ele.playerName;
        if(seen[name]){
            seen[name]+=1
        }
        else{
            seen[name]=1
        }
    })

    for(player in seen){
        if(seen[player]>1){
            duplicates.push(player)
        }
    } 
    return duplicates
}

console.log(findDuplicates())