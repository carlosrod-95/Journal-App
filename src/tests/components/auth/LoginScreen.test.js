import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import '@testing-library/jest-dom';

import React from 'react';
import { LoginScreen } from "../../../components/auth/LoginScreen"
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import  {MemoryRouter} from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';
import { fn } from 'moment';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState= {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
}

let store = mockStore(initState)
store.dispatch = jest.fn();

const wrapper = mount(
    
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>
    </Provider>
    
)

describe('Pruebas en el LoginScreen', () => {

    beforeEach(() => {
        store = mockStore(initState)
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })

    test('debe de disparar la acción de startGoogleLogin', () => {
        
        wrapper.find('.google-btn').prop('onClick')();

        expect(startGoogleLogin).toHaveBeenCalled();

    })
    
    test('debe de disparar el startLogin con los respectivos argumentos', () => {
        
        wrapper.find('form').prop('onSubmit')(
            { preventDefault(){} }
        );

        expect(startLoginEmailPassword).toHaveBeenCalledWith('nando@gmail.com','123456')

    })
    
    

})
