/**
 * @jest-environment node
 */

 import configureStore from 'redux-mock-store';
 import thunk from 'redux-thunk'
 import { startUploading } from '../../actions/notes';
 import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
 import { types } from '../../types/types';

 jest.mock('../../helpers/fileUpload', () => {
  return {
    fileUpload: () => {
      return Promise.resolve(
        "https://hola.com/cosa.jpg"
      );
    },
  };
});

 global.scrollTo = jest.fn(); 
  
 const middlewares = [thunk];
 const mockStore = configureStore(middlewares);
 
 const initState= {
     auth: {
         uid: 'TESTING'
     },
     notes: {
         active: {
             id: '2NSmh8necfC8cAqk8Hxq',
             title: 'Hola',
             body: 'Mundo'
         }
     }
 }
 
 let store = mockStore(initState)
 
 describe('Pruebas en notes-action', () => {
 
     beforeEach(() => {
         store = mockStore(initState)
     })
     
     
     test('startUploading debe de actualizar el url del entry', async() => {
         
         const file = []
 
         await store.dispatch(startUploading(file));

         const docRef = await db.doc(`/TESTING/journal/notes/2NSmh8necfC8cAqk8Hxq`).get();

         expect(docRef.data().url).toBe('https://hola.com/cosa.jpg')
 
 
     })
     
     
 })
 