import * as gameStates from '../consts/gameStates'

export default {
    login: {
        isBusy: false,
        isLoggedOn: false,
        isFailed: false,
        uid: null,
        username: null,
        token: null,        
        tokenValidUntil: null
    },
    ui: {
        theme: 'light',
        borderless: false
    },
    game: {
        state: gameStates.GAMESTATE_INITIALIZING,
        isBusy: true,
        playerParticipation: {
            name: '',
            isBanned: false,
            collectionCount: 0,
            scoreboardRank: 1,
            recentlyCollected: []            
        },
        lastCollectionSuccess: {
            fursuitBadgeId: null,
            fursuitCollectionCount: 0,
            name: null,
            species: null,
            gender: null
        },
        lastCollectionError: {
            code: "",
            message: ""
        }
    },
    scoreboard: {
        isBusy: false,
        playerParticipations: [],
        fursuitParticipations: []
    }
};