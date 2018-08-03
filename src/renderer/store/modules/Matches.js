const state = {
    list: [],
    // ids: []
}

const mutations = {
    create_match(state, match) {
        // state.list[match.id] = match
        // state.ids.push(match.id);
        state.list.push(match)
    }
}

const actions = {

}

const getters = {
    get_match: (state) => (matchid) => {
        return state.list.find(match => match.id === matchid);
    },
    get_match_list(state) {
        // var rv = [];
        // for (var id in state.ids) {
        //     rv.push(state.list[id])
        // }
        return state.list;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}