import { types } from "../../types/types"

describe('Pruebas en types.js', () => {

    test('debe de tener estos types', () => {
        
        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout',

            uiSetError: '[UI] set error',
            uiRemoveError: '[UI] remove error',

            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Updated note',
            notesFileUrl: '[Notes] Updated image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout cleaning'
        })

    })
    
})