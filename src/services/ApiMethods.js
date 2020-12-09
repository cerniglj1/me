/* eslint-disable no-console */
import Api from '@/services/Api'

function organizeGame(game) {
    var blueTeam = game.participants.filter(x => x.teamId == 100);
    var redTeam = game.participants.filter(x => x.teamId == 200);
    /**
     * Order: Top Jg Mid Adc Sup
     */
    var blueTop = null;
    var blueJungler = null;
    var blueMid = null;
    var blueAdc = null;
    var blueSupport = null;
    var redTop = null;
    var redJungler = null;
    var redMid = null;
    var redAdc = null;
    var redSupport = null;

    var blueTeamInOrder = [];
    var redTeamInOrder = [];

    if (game.gameMode == "CLASSIC") {
        //Lets do Top-jg-mid-adc-sup then red side top...
        blueTop = blueTeam.filter(
            x => x.timeline.lane == "TOP" && x.timeline.role == "SOLO"
        )[0];
        blueTop.profile = game.participantIdentities.filter(
            x => x.participantId == blueTop.participantId
        )[0].player;

        blueJungler = blueTeam.filter(x => x.timeline.lane == "JUNGLE")[0];

        blueJungler.profile = game.participantIdentities.filter(
            x => x.participantId == blueJungler.participantId
        )[0].player;

        blueMid = blueTeam.filter(x => x.timeline.lane == "MIDDLE")[0];
        blueMid.profile = game.participantIdentities.filter(
            x => x.participantId == blueMid.participantId
        )[0].player;

        blueAdc = blueTeam.filter(
            x => x.timeline.lane == "BOTTOM" && x.timeline.role == "DUO_CARRY"
        )[0];
        blueAdc.profile = game.participantIdentities.filter(
            x => x.participantId == blueAdc.participantId
        )[0].player;
        blueSupport = blueTeam.filter(
            x => x.timeline.lane == "BOTTOM" && x.timeline.role == "DUO_SUPPORT"
        )[0];
        blueSupport.profile = game.participantIdentities.filter(
            x => x.participantId == blueSupport.participantId
        )[0].player;

        redTop = redTeam.filter(
            x => x.timeline.lane == "TOP" && x.timeline.role == "SOLO"
        )[0];
        redTop.profile = game.participantIdentities.filter(
            x => x.participantId == redTop.participantId
        )[0].player;

        redJungler = redTeam.filter(x => x.timeline.lane == "JUNGLE")[0];
        redJungler.profile = game.participantIdentities.filter(
            x => x.participantId == redJungler.participantId
        )[0].player;

        redMid = redTeam.filter(x => x.timeline.lane == "MIDDLE")[0];
        redMid.profile = game.participantIdentities.filter(
            x => x.participantId == redMid.participantId
        )[0].player;

        redAdc = redTeam.filter(
            player =>
            player.timeline.lane == "BOTTOM" &&
            player.timeline.role == "DUO_CARRY"
        )[0];
        redAdc.profile = game.participantIdentities.filter(
            x => x.participantId == redAdc.participantId
        )[0].player;

        redSupport = redTeam.filter(
            player =>
            player.timeline.lane == "BOTTOM" &&
            player.timeline.role == "DUO_SUPPORT"
        )[0];
        redSupport.profile = game.participantIdentities.filter(
            x => x.participantId == redSupport.participantId
        )[0].player;
        blueTeamInOrder.push(blueTop);
        blueTeamInOrder.push(blueJungler);
        blueTeamInOrder.push(blueMid);
        blueTeamInOrder.push(blueAdc);
        blueTeamInOrder.push(blueSupport);
        redTeamInOrder.push(redTop);
        redTeamInOrder.push(redJungler);
        redTeamInOrder.push(redMid);
        redTeamInOrder.push(redAdc);
        redTeamInOrder.push(redSupport);
    } else if (game.gameMode == "ARAM") {
        blueTop = blueTeam[0];
        blueTop.profile = game.participantIdentities.filter(
            x => x.participantId == blueTop.participantId
        )[0].player;

        blueJungler = blueTeam[1];
        blueJungler.profile = game.participantIdentities.filter(
            x => x.participantId == blueJungler.participantId
        )[0].player;
        blueMid = blueTeam[2];
        blueMid.profile = game.participantIdentities.filter(
            x => x.participantId == blueMid.participantId
        )[0].player;
        blueAdc = blueTeam[3];
        blueAdc.profile = game.participantIdentities.filter(
            x => x.participantId == blueAdc.participantId
        )[0].player;
        blueSupport = blueTeam[4];
        blueSupport.profile = game.participantIdentities.filter(
            x => x.participantId == blueSupport.participantId
        )[0].player;

        redTop = redTeam[0];
        redTop.profile = game.participantIdentities.filter(
            x => x.participantId == redTop.participantId
        )[0].player;
        redJungler = redTeam[1];
        redJungler.profile = game.participantIdentities.filter(
            x => x.participantId == redJungler.participantId
        )[0].player;
        redMid = redTeam[2];
        redMid.profile = game.participantIdentities.filter(
            x => x.participantId == redMid.participantId
        )[0].player;
        redAdc = redTeam[3];
        redAdc.profile = game.participantIdentities.filter(
            x => x.participantId == redAdc.participantId
        )[0].player;
        redSupport = redTeam[4];
        redSupport.profile = game.participantIdentities.filter(
            x => x.participantId == redSupport.participantId
        )[0].player;
        blueTeamInOrder.push(blueTop);
        blueTeamInOrder.push(blueJungler);
        blueTeamInOrder.push(blueMid);
        blueTeamInOrder.push(blueAdc);
        blueTeamInOrder.push(blueSupport);
        redTeamInOrder.push(redTop);
        redTeamInOrder.push(redJungler);
        redTeamInOrder.push(redMid);
        redTeamInOrder.push(redAdc);
        redTeamInOrder.push(redSupport);
    }
    game.blueTeam = blueTeamInOrder;
    game.redTeam = redTeamInOrder;
    return game;
}

function getChampionNameFromId(id) {
    var champ = "";
    switch (id) {
        case 145:
            champ = "Kaisa";
            break;
        case 235:
            champ = "Senna";
            break;
        case 497:
            champ = "Rakan";
            break;
        case 266:
            champ = "Aatrox";
            break;
        case 412:
            champ = "Thresh";
            break;
        case 23:
            champ = "Tryndamere";
            break;
        case 79:
            champ = "Gragas";
            break;
        case 69:
            champ = "Cassiopeia";
            break;
        case 136:
            champ = "AurelionSol";
            break;
        case 13:
            champ = "Ryze";
            break;
        case 78:
            champ = "Poppy";
            break;
        case 14:
            champ = "Sion";
            break;
        case 1:
            champ = "Annie";
            break;
        case 202:
            champ = "Jhin";
            break;
        case 43:
            champ = "Karma";
            break;
        case 111:
            champ = "Nautilus";
            break;
        case 240:
            champ = "Kled";
            break;
        case 99:
            champ = "Lux";
            break;
        case 103:
            champ = "Ahri";
            break;
        case 2:
            champ = "Olaf";
            break;
        case 112:
            champ = "Viktor";
            break;
        case 34:
            champ = "Anivia";
            break;
        case 27:
            champ = "Singed";
            break;
        case 86:
            champ = "Garen";
            break;
        case 127:
            champ = "Lissandra";
            break;
        case 57:
            champ = "Maokai";
            break;
        case 25:
            champ = "Morgana";
            break;
        case 28:
            champ = "Evelynn";
            break;
        case 105:
            champ = "Fizz";
            break;
        case 74:
            champ = "Heimerdinger";
            break;
        case 238:
            champ = "Zed";
            break;
        case 68:
            champ = "Rumble";
            break;
        case 82:
            champ = "Mordekaiser";
            break;
        case 37:
            champ = "Sona";
            break;
        case 96:
            champ = "KogMaw";
            break;
        case 55:
            champ = "Katarina";
            break;
        case 117:
            champ = "Lulu";
            break;
        case 22:
            champ = "Ashe";
            break;
        case 30:
            champ = "Karthus";
            break;
        case 12:
            champ = "Alistar";
            break;
        case 122:
            champ = "Darius";
            break;
        case 67:
            champ = "Vayne";
            break;
        case 110:
            champ = "Varus";
            break;
        case 77:
            champ = "Udyr";
            break;
        case 89:
            champ = "Leona";
            break;
        case 126:
            champ = "Jayce";
            break;
        case 134:
            champ = "Syndra";
            break;
        case 80:
            champ = "Pantheon";
            break;
        case 92:
            champ = "Riven";
            break;
        case 121:
            champ = "Khazix";
            break;
        case 42:
            champ = "Corki";
            break;
        case 268:
            champ = "Azir";
            break;
        case 51:
            champ = "Caitlyn";
            break;
        case 76:
            champ = "Nidalee";
            break;
        case 85:
            champ = "Kennen";
            break;
        case 3:
            champ = "Galio";
            break;
        case 45:
            champ = "Veigar";
            break;
        case 432:
            champ = "Bard";
            break;
        case 150:
            champ = "Gnar";
            break;
        case 90:
            champ = "Malzahar";
            break;
        case 104:
            champ = "Graves";
            break;
        case 254:
            champ = "Vi";
            break;
        case 10:
            champ = "Kayle";
            break;
        case 39:
            champ = "Irelia";
            break;
        case 64:
            champ = "LeeSin";
            break;
        case 420:
            champ = "Illaoi";
            break;
        case 60:
            champ = "Elise";
            break;
        case 106:
            champ = "Volibear";
            break;
        case 20:
            champ = "Nunu";
            break;
        case 4:
            champ = "TwistedFate";
            break;
        case 24:
            champ = "Jax";
            break;
        case 102:
            champ = "Shyvana";
            break;
        case 429:
            champ = "Kalista";
            break;
        case 36:
            champ = "DrMundo";
            break;
        case 427:
            champ = "Ivern";
            break;
        case 131:
            champ = "Diana";
            break;
        case 223:
            champ = "TahmKench";
            break;
        case 63:
            champ = "Brand";
            break;
        case 113:
            champ = "Sejuani";
            break;
        case 8:
            champ = "Vladimir";
            break;
        case 154:
            champ = "Zac";
            break;
        case 421:
            champ = "RekSai";
            break;
        case 133:
            champ = "Quinn";
            break;
        case 84:
            champ = "Akali";
            break;
        case 163:
            champ = "Taliyah";
            break;
        case 18:
            champ = "Tristana";
            break;
        case 120:
            champ = "Hecarim";
            break;
        case 15:
            champ = "Sivir";
            break;
        case 236:
            champ = "Lucian";
            break;
        case 107:
            champ = "Rengar";
            break;
        case 19:
            champ = "Warwick";
            break;
        case 72:
            champ = "Skarner";
            break;
        case 54:
            champ = "Malphite";
            break;
        case 157:
            champ = "Yasuo";
            break;
        case 101:
            champ = "Xerath";
            break;
        case 17:
            champ = "Teemo";
            break;
        case 75:
            champ = "Nasus";
            break;
        case 58:
            champ = "Renekton";
            break;
        case 119:
            champ = "Draven";
            break;
        case 35:
            champ = "Shaco";
            break;
        case 50:
            champ = "Swain";
            break;
        case 91:
            champ = "Talon";
            break;
        case 40:
            champ = "Janna";
            break;
        case 115:
            champ = "Ziggs";
            break;
        case 245:
            champ = "Ekko";
            break;
        case 61:
            champ = "Orianna";
            break;
        case 114:
            champ = "Fiora";
            break;
        case 9:
            champ = "Fiddlesticks";
            break;
        case 31:
            champ = "Chogath";
            break;
        case 33:
            champ = "Rammus";
            break;
        case 7:
            champ = "LeBlanc";
            break;
        case 16:
            champ = "Soraka";
            break;
        case 26:
            champ = "Zilean";
            break;
        case 56:
            champ = "Nocturne";
            break;
        case 222:
            champ = "Jinx";
            break;
        case 83:
            champ = "Yorick";
            break;
        case 6:
            champ = "Urgot";
            break;
        case 203:
            champ = "Kindred";
            break;
        case 21:
            champ = "MissFortune";
            break;
        case 62:
            champ = "Wukong";
            break;
        case 53:
            champ = "Blitzcrank";
            break;
        case 98:
            champ = "Shen";
            break;
        case 201:
            champ = "Braum";
            break;
        case 5:
            champ = "XinZhao";
            break;
        case 29:
            champ = "Twitch";
            break;
        case 11:
            champ = "MasterYi";
            break;
        case 44:
            champ = "Taric";
            break;
        case 32:
            champ = "Amumu";
            break;
        case 41:
            champ = "Gangplank";
            break;
        case 48:
            champ = "Trundle";
            break;
        case 38:
            champ = "Kassadin";
            break;
        case 161:
            champ = "Velkoz";
            break;
        case 143:
            champ = "Zyra";
            break;
        case 267:
            champ = "Nami";
            break;
        case 59:
            champ = "JarvanIV";
            break;
        case 81:
            champ = "Ezreal";
            break;
        default:
            champ = "Draven";
    }
    return champ;
}
export default {
    async getOsrsUser(username) {
        return Api().get('/osrs/u/?username=' + username).catch(function (error) {
            return {
                name: error,
                code: 400,
                reason: "Failed to find a user: " + username
            }
        });
    },
    async updateOsrsUser(username) {
        return Api().get('/osrs/update/u/' + username)
    },
    async getOsrsSkillIcon(skillName) {
        return Api().get("/osrs/assets/skills/" + skillName.toLowerCase() + "_icon.png")
    },
    async getProjects() {
        return Api().get("/Portfolio/projects").catch(function (error) {
            return {
                name: error,
                code: 400,
                reason: "Failed to find projects"
            }
        });
    },
    async updateProjectLike(projectId,likes) {
        return Api().get("/Portfolio/projects/update/likes/?projectId="+projectId+"&likes="+likes).catch(function (error) {
            return {
                name: error,
                code: 400,
                reason: "Failed to find project:"+ projectId
            }
        });
    },
    async getLeagueOfLegendsProfile(leagueName) {
        return Api().get("LeagueOfLegends/user/" + leagueName);
    },
    getApiHome(x) {
        organizeGame(x);
        return Api().get('/')
    },
    async getProfileIcon(profileIconId) {

        return Api().get("LeagueOfLegends/assets/icons/" + profileIconId + ".png");
    },
    async getChampionPicture(id) {
        var champ = getChampionNameFromId(id)

        // eslint-disable-next-line no-console
        if (typeof champ == String) {
            champ = champ.replace(" ", "_");
        }
        Api().get("LeagueOfLegends/assets/champions/tiles/" + champ + "_0.jpg", {
            type: 'image/jpg'
        }).then((res) => {
            console.log(res);
        });
        return '';
    },
    async getChampionIcon(id) {
        var champ = getChampionNameFromId(id);
        // eslint-disable-next-line no-console
        // console.log(id);

        // eslint-disable-next-line no-console

        champ = champ.replace(" ", "_");
        return Api().get("LeagueOfLegends/assets/champions/tiles/" + champ + "_0.jpg");
    },
    async getMatchDetails(gameId) {
        return Api().get("LeagueOfLegends/matchDetails/" + gameId).then((res) => {


            return organizeGame(res.data);
        });
    },
    async getMatchHistory(accountId) {
        return Api()
            .get("LeagueOfLegends/" + accountId + "/matches")
            .then(response => {

                //Limit to 2 queries to start
                var matchHistory = response.data.matches.slice(0, 2);
                return matchHistory;
            });
    }

}