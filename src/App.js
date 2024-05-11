import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

// class App extends React.Component {
//   // JSX
//   render() {
//     return (
//       <div>
//         Hello &amp; Trường
//         <MyComponent />
//       </div>
//     );
//   };
// }

const App = () => {
  return (
    <>
      Hello &amp; Trường
      <MyComponent />
    </>
  );
}

export default App;
