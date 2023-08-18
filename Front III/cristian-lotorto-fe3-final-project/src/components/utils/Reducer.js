const types = {
    changeTheme: 'CHANGE_THEME',
    fetchAll: 'FETCH_ALL',
    fetchById: 'FETCH_BY_ID',
    toLS: 'TO_LOCAL_STORAGE',
    deleteFromLS: 'DELETE_FROM_LOCAL_STORAGE'
}

const initialState = {
        isDark: true,
        data: [],
        dataById:{},
        favDentists: JSON.parse(localStorage.getItem('fav-dentists')) || [],
    }

const Reducer = (state, action) => {
    switch (action.type) {

        case types.changeTheme:
            return {
                ...state,
                isDark: !state.isDark
            }

        case types.fetchAll:
            return {
                ...state,
                data: [... action.payload]
            }

        case types.fetchById:
            return {
                ...state,
                dataById: {... action.payload}
            }

        case types.toLS:
            return {
                ...state,
                favDentists: [...state.favDentists, action.payload]
            }

        case types.deleteFromLS:
            return {
                ...state,
                favDentists: state.favDentists.filter((fav) => fav.id !== action.payload)
            }
        
        default:
            throw new Error("That action doesn't exists");
    }
}

export {initialState, types}
export default Reducer;