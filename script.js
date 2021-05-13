// setting the object and variables needed across several functions contained within

const baseball = {};

baseball.leftPlayer = [];
baseball.rightPlayer = [];

baseball.addCategories = false;

baseball.categoryList = ["<img src='./assets/empty.svg'>","Name", "Position", "ADP", "At Bats", "Hits", "Singles", "Doubles", "Triples", "Home Runs", "Stolen Bases", "Walks", "Strikeouts"];

// object containing information for styling relevant to each team
baseball.teamColours = {
DET : {bgcolor : "rgba(12,35,64,0.5)", hrcolor : "rgb(250,70,22)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/DET.SVG" alt='Detroit Tigers logo' />`},
MIL : {bgcolor : "rgba(255,197,47,0.5)", hrcolor : "rgb(18,40,75)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/MIL.SVG" alt='Milwaukee Brewers logo' />`},
MIA : {bgcolor : "rgba(0,163,224,0.5)", hrcolor : "rgb(239,51,64)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/MIA.SVG" alt='Miami Marlins logo' />`},
LAA : {bgcolor : "rgba(186,0,33,0.5)", hrcolor : "rgb(0,50,99)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/LAA.SVG" alt='Anaheim Angels logo' />`},
LAD : {bgcolor : "rgba(0,90,156,0.5)", hrcolor : "rgb(191,192,191)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/LAD.SVG" alt='Los Angeles Dodgers logo' />`},
KC : {bgcolor : "rgba(0,70,135,0.5)", hrcolor : "rgb(189,155,96)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/KC.SVG" alt='Kansas City Royals logo' />`},
HOU : {bgcolor : "rgba(0,45,98,0.5)", hrcolor : "rgb(244,145,30)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/HOU.SVG" alt='Houston Astros logo' />`},
COL : {bgcolor : "rgba(51,0,111,0.5)", hrcolor : "rgb(0,0,0)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/COL.SVG" alt='Colorado Rockies logo' />`},
CLE : {bgcolor : "rgba(12,35,64,0.5)", hrcolor : "rgb(227,25,55)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/CLE.SVG" alt='Cleveland logo' />`},
CHW : {bgcolor : "rgba(196,206,212,0.5)", hrcolor : "rgb(39,37,31)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/CHW.SVG" alt='Chicago White Sox logo' />`},
CHC : {bgcolor : "rgba(14,51,134,0.5)", hrcolor : "rgb(204,52,51)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/CHC.SVG" alt='Chicago Cubs logo' />`},
BOS : {bgcolor : "rgba(189, 48, 57,0.5)", hrcolor : "rgb(12,35,64)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/BOS.SVG" alt='Boston Red Sox logo' />`},
BAL : {bgcolor : "rgba(223,70,1,0.5)", hrcolor : "rgb(39,37,31)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/BAL.SVG" alt='Baltimore Orioles logo' />`},
ATL : {bgcolor : "rgba(19,39,79,0.5)", hrcolor : "rgb(206,17,65)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/ATL.SVG" alt='Atlanta Braves logo' />`},
ARI : {bgcolor : "rgba(227,212,173,0.6)", hrcolor : "rgb(167,25,48)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/ARI.SVG" alt='Arizona Diamondbacks logo' />`},
WSH : {bgcolor : "rgba(20,34,90,0.5)", hrcolor : "rgb(171,0,3)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/WSH.SVG" alt='Washington Nationals logo' />`},
TOR : {bgcolor : "rgba(19,74,142,0.5)", hrcolor : "rgb(255,255,255)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/TOR.SVG" alt='Toronto Blue Jays logo' />`},
TEX : {bgcolor : "rgba(0,50,120,0.5)", hrcolor : "rgb(192,17,31)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/TEX.SVG" alt='Texas Rangers logo' />`},
TB : {bgcolor : "rgba(143,188,230,0.5)", hrcolor : "rgb(9,44,92)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/TB.SVG" alt='Tampa Bay Rays logo' />`},
STL : {bgcolor : "rgba(196,30,58, 0.5)", hrcolor : "rgb(12,35,64)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/STL.SVG" alt='St. Luois Cardinals logo' />`},
SF : {bgcolor : "rgba(253,90,30,0.5)", hrcolor : "rgb(39,37,31)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/SF.SVG" alt='San Francisco Giants logo' />`},
SD : {bgcolor : "rgba(47,36,29,0.6)", hrcolor : "rgb(255,196,37)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/SD.SVG" alt='San Diego Padres logo' />`},
PIT : {bgcolor : "rgba(253,184,39,0.5)", hrcolor : "rgb(39,37,31)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/PIT.SVG" alt='Pittsburgh Pirates logo' />`},
PHI : {bgcolor : "rgba(111,38,61,0.5)", hrcolor : "rgb(107,172,228)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/PHI.SVG" alt='Philadelphia Phillies logo' />`},
OAK : {bgcolor : "rgba(0,56,49,0.5)", hrcolor : "rgb(239,178,30)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/OAK.SVG" alt='Oakland Athletics logo' />`},
NYY : {bgcolor : "rgba(12,35,64,0.5)", hrcolor : "rgb(255,255,255)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/NYY.SVG" alt='New York Yankees logo' />`},
NYM : {bgcolor : "rgba(0,45, 114,0.5)", hrcolor : "rgb(252,89,16)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/NYM.SVG" alt='New York Mets logo' />`},
MIN : {bgcolor : "rgba(0,43,92,0.5)", hrcolor : "rgb(211,17,69)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/MIN.SVG" alt='Minnesota Twins logo' />`},
SEA : {bgcolor : "rgba(0,92,92,0.5)", hrcolor : "rgb(12,44,86)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/SEA.SVG" alt='Seattle Mariners logo' />`},
CIN : {bgcolor : "rgba(198,1,31,0.5)", hrcolor : "rgb(0,0,0)", logo : `<img src="https://github.com/mmmccormack/fantasy-baseball/raw/gh-pages/CIN.SVG" alt='Cincinnati Reds logo' />`},
}


// this function calls the MLB API to retrieve all player data, and send it to formatting function
baseball.pullfromAPI = function(){
    const apiKey = '86dbbe3a5237492f840b1b7a5b40b151'
    const masterList = $.ajax({
        url: `https://api.sportsdata.io/v3/mlb/projections/json/PlayerSeasonProjectionStats/2021`,
        method: 'GET',
        dataType: 'json',
        data: {
            key: apiKey
        }
    }).then( (res) => {
        // added async function to let user know when they can select from dropdowns once the API has loaded. This will disappear after 4 seconds.
        $('h2').text('Ready');
        setTimeout(() => {	
            $('h2').css("visibility", "hidden");
        }, 5000)
        baseball.formatList(res);
    });
    
}
// this function removes all unnecessary objects from our API call, for a cleaner smaller list for user search
baseball.formatList = function(masterList) {
    //  filter out any entries of pitchers, because we will only focus on hitters (pitching data is too scattered and sabermetric based!)
    const newList = masterList.filter((player) => {
            return player.PositionCategory != "P"
        });
    // return only the top 500 entries out of a possible 1500 eligible players
    const playerList = newList.slice(0, 500);
    // send master player list to function that will populate dropdown lists
    baseball.appendToSelects(playerList);
}

// this function displays player names in each dropdown menu on the page
baseball.appendToSelects = (players) => {

    players.forEach((player) => {
        $('#playerList1').append(`<option value=${player.Name}>${player.Name}</option>`);
        $('#playerList2').append(`<option value=${player.Name}>${player.Name}</option>`);
    });
    // this sends the list of players to the following function so once a player is selected, their stats can be retrieved
    baseball.getSelectValue(players);
}

// this function allows an individual selection (a single player's stats) to be retrieved, and records which dropdown list it came from so those stats will be displayed beneath their respective dropdown.
baseball.getSelectValue = (players) => {

    $('#playerList1').change(function() {
        const listPick = `#playerList1`;
        baseball.getPlayerFromList(listPick, players);
    });
    
    $('#playerList2').change(function() {
        const listPick = `#playerList2`;
        baseball.getPlayerFromList(listPick, players)
    });
};

// this function takes the user's dropdown selection and the ID of the dropdown box they selected from, and sends those variables to the next function to be pushed to an array for future comparison.
baseball.getPlayerFromList = (list, players) => {

    const selection = $(`${list} option:selected`).text();
    players.filter((player) => {
        if (player.Name === selection) {
            baseball.catalogueStats(list, player);
        }
    });
}

// this function takes in the individual player object as well as the dropdown ID and places those values into an array to be compared with another player's stats in a following function, and then to be appended to the HTML.
baseball.catalogueStats = (list, player) => {

    let side;
    if (list === "#playerList1") {
        side = "leftPlayer";
    } else {
        side = "rightPlayer";
    }
        // clearing the baseball.leftPlayer or baseball.rightPlayer arrays so new stats can be pushed to them
        baseball[side].splice(0, baseball[side].length);
        // adding new stats to array from object (because there are so many values in each object and few are concurrent, they have to be taken individually by name), and adding the information for which side of the page to place the stats under
        const divPlacement = `.${side}Info`;
        baseball[side].push(player.Team, baseball.teamColours[player.Team].logo, player.Name, player.Position, player.AverageDraftPosition, player.AtBats, player.Hits, player.Singles, player.Doubles, player.Triples, player.HomeRuns, player.StolenBases, player.Walks, player.Strikeouts, divPlacement);
        // rounding any stats that require rounding to an integer
        for (i = 5; i < 14; i++) {
            baseball[side][i] = Math.round(baseball[side][i]);
        }
        // sends the array of information and the ID of the dropdown to be appended in the appropriate area on the page
        baseball.appendStats(baseball[side], side);
        // if there is a player selected on both sides, both arrays will be populated, and sent to be compared 
    if (baseball.leftPlayer.length !== 0 && baseball.rightPlayer.length !== 0) {
        baseball.comparePlayers(baseball.leftPlayer, baseball.rightPlayer);
        } 
}

// this function compares both arrays of player stats, and adjusts CSS properties to show which player has the better stats, and in which categories
baseball.comparePlayers = (list1, list2) => {
    // remove any additional CSS classes that may have been added while comparing stats previously
    for (i = 5; i < 14; i++) {
        $(`.rightPlayer${i}`).attr(`class`, `rightPlayer${i}`);
        $(`.leftPlayer${i}`).attr(`class`, `leftPlayer${i}`);
    }
    // this loop compares stats in the array from index 5 to 13, and the higher number between the two arrays is given a green border class (.betterStat) to highlight the higher number, while the lower number is given a transparent border class (.lesserStat) to match the spacing of the green border.
    for (i = 5; i < 13; i++) {
        if (list1[i] > list2[i]) {
            $(`.leftPlayer${i}`).addClass(`betterStat`);
            $(`.rightPlayer${i}`).addClass(`lesserStat`);
        } else if (list1[i] < list2[i]) {
            $(`.rightPlayer${i}`).addClass(`betterStat`);
            $(`.leftPlayer${i}`).addClass(`lesserStat`);
        } else {
            $(`.leftPlayer${i}`).addClass(`lesserStat`);
            $(`.rightPlayer${i}`).addClass(`lesserStat`);
        }
    }
    // this is to compare strikeout stats in reverse, because the lower number is ideal in this category.
    if (list1[13] > list2[13]) {
        $(`.rightPlayer${i}`).addClass(`betterStat`);
        $(`.leftPlayer${i}`).addClass(`lesserStat`);
    } else if (list1[13] < list2[13]) {
        $(`.leftPlayer${i}`).addClass(`betterStat`);
        $(`.rightPlayer${i}`).addClass(`lesserStat`);
    } else {
        $(`.leftPlayer${i}`).addClass(`lesserStat`);
        $(`.rightPlayer${i}`).addClass(`lesserStat`);
    }
}

// this function takes the generated arrays of stats and appends them to the HTML in the applicable section (left side or right side), with CSS styling and logo placement corresponding to each team's colours.
baseball.appendStats = (player, side) => {
    // this sets the background colour and line divider colour for each player
    const bgcolor = `${baseball.teamColours[player[0]].bgcolor}`;
    const hrcolor = `${baseball.teamColours[player[0]].hrcolor}`;
    // this empties the div of any previous styling and content
    $(player[14]).empty();
    // this loop appends HTML for the stats that do NOT require any comparison (team logo, name, position, and ADP)
    for (i = 1; i < 5; i++) {
        $(player[14]).append(
            `<div class="${side}${[i]} lesserStat">${player[i]}</div>
            <hr class="${side}Divider${player[0]}" />`
        ).css("background-color", bgcolor);
        $(`.${side}Divider${player[0]}`).css("color", hrcolor);  
        }
    // for styling and design purposes, if a player's name has 18 or more characters, it is given a class to slightly reduce the sizing of their name on the page
        if (player[2].length >= 18) {
            $(`.${side}2`).addClass(`reduceName`);
        }
    // this loop appends HTML for the stats that DO require comparison
    for (i = 5; i < player.length - 2; i++) {
        $(player[14]).append(
            `<div class="${side}${[i]}">${player[i]}</div>
            <hr class="${side}Divider${player[0]}" />`
        ).css("background-color", bgcolor);
        $(`.${side}Divider${player[0]}`).css("color", hrcolor);
    }
    // this is for appending the HTML for the final stat (strikeouts), which, unlike the stats before it, will not have a following <hr> tag
    $(player[14]).append(
        `<div class="${side}${[13]}">${player[13]}</div>`
    )
    // if nothing is currently displayed on the page, the legend for comparing stats that will appear in the center of the page between each player's stats will not be visible. Once a player is selected, the addCategories boolean becomes true and the function to display categories is called
    if (baseball.addCategories === false) {
        baseball.appendCategories();
        baseball.addCategories = true;
    }
}

// this function allows the categories for each stat to be displayed on the page, as well as the restart button
baseball.appendCategories = () => {
    for (i = 0; i < 13; i++) {
        $('.categories').append(
            `<div class="category">${baseball.categoryList[i]}</div>
            <hr class="transparentLine" />`
            )
        };
        $('.categories').append(`<button class="reset">Restart</button>`);

    $(`button`).on('click', () => {
        baseball.reset();
      })
}

// this removes all categories and player stats from the page, and resets all styles, arrays and boolean values as if the page were refreshed.
baseball.reset = () => {
    $('.categories').empty();
    $('.leftPlayerInfo').empty().css("padding-bottom", 0);
    $('.rightPlayerInfo').empty().css("padding-bottom", 0);
    baseball.leftPlayer = [];
    baseball.rightPlayer = [];
    baseball.addCategories = false;
    $('#playerList1').value("0");
    $('#playerList2').value("0");
}

// initializing functions for app

baseball.init = () => {
    baseball.pullfromAPI();
}

$(document).ready(function(){
    baseball.init();
});