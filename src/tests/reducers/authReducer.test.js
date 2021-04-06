import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('debe de realizar el login ', () => {
        
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Carlos'
            }
        }

        const state = authReducer(initState, action)

        expect(state).toEqual({
            uid: 'abc',
            name: 'Carlos'
        })

    })

    test('debe de realizar el logout ', () => {
        
        const initState = {
            uid: 'nuaisdnas',
            name: 'Fernando'
        };

        const action = {
            type: types.logout
        }

        const state = authReducer(initState, action)

        expect(state).toEqual({})

    })

    test('debe de retornar el state sin cambios', () => {
        
        const initState = {};

        const action = {
            type: 'adasfas'
        }

        const state = authReducer(initState, action)

        expect(state).toEqual(initState)

    })
    

})
