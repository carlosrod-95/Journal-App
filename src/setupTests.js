import {createSerializer} from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


// const noScroll = () => {};

// Object.defineProperty(window, 'scrollTo', {value: noScroll, writable: true});