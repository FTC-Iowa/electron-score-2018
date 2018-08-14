const state = {
    list: {},
    // ids: []
}

const mutations = {
    // create_match(state, match) {
    //     // state.list[match.id] = match
    //     // state.ids.push(match.id);
    //     state.list.push(match)
    // },
    update_matches(state, matches) {
        state.list = matches;
        // for(var match in matches){
        //     var m = matches[match];
        //     m.id = match;

        // }

        console.log("update match: ", matches)
    }
}

const actions = {

}

const getters = {
    get_match: (state) => (matchid) => {
        // return state.list.find(match => match.id === matchid);
        return state.list[matchid]
    },
    get_match_by_number: (state) => (matchNumber) => {
        for(var i in state.list){
            if(state.list[i].number === matchNumber)
                return state.list[i]
        }
        return null;
    },
    get_match_list(state) {
        return state.list;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}