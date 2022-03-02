import { buy_player } from "./ActionType"

const initial_state = {
    Amount_we_have : 500
}

const reducer = (state= initial_state, action) =>{
    switch(action.type){
        case buy_player : return{
            Amount_we_have : state.Amount_we_have - 100
        }

        // case Remove_player : return{
        //     Amount_we_have : state.Amount_we_have + player_Amount
        // }
        default : return state
    }
}

export default reducer;