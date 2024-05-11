import Card from "./Card.jsx";
// import Button from "./components/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Button from "./Button.jsx";
import MyComponent from "./hooks/MyComponent.jsx";
import Component from "./hooks/Component.jsx";
import Counter from "./hooks/Counter.jsx";
import ColorPicker from "./hooks/ColorPicker.jsx";
import ObjectComponent from './hooks/ObjectComponent.jsx'
import ArrayComponent from "./hooks/ArrayComponent.jsx";
import Component2 from "./hooks/Component2.jsx";

function App() {

  // const fruits = [{ id: 1, name: 'apple', calories: 95 },
  // { id: 2, name: 'banana', calories: 45 },
  // { id: 3, name: 'orange', calories: 105 },
  // { id: 4, name: 'coconut', calories: 159 },
  // { id: 5, name: 'pineapple', calories: 37 }];

  // const vegetables = [{ id: 6, name: 'potatoes', calories: 110 },
  // { id: 7, name: 'onion', calories: 15 },
  // { id: 8, name: 'corn', calories: 63 },
  // { id: 9, name: 'carrots', calories: 25 },
  // { id: 10, name: 'broccoli', calories: 50 }];

  return (
    <>
      {/* <Card /> */}

      {/* <Button /> */}
      {/* <Component key=value />*/}
      {/* <Student name="Spongebob" age={20} isStudent={true}/>
      <Student name="Patrick" age={25} isStudent={false}/>
      <Student name="Sandy Cheeks" age={30} isStudent={false}/>
      <Student /> */}

      {/* <UserGreeting isLoggedIn={false} username="BroCode"/> */}

     {/* {(fruits.length > 0) && <List items={fruits} calory="Fruits" /> };
     {(vegetables.length > 0) ? <List items={vegetables} calory="Vegetables" /> : null }; */}

     {/* <Button/> */}

     {/* <MyComponent/> */}

     {/* <Counter/> */}

     {/* <Component/> */}

     {/* <ColorPicker/> */}

     {/* <ObjectComponent/> */}
     
     {/* <ArrayComponent/> */}

     <Component2/>

    </>
  )
}

export default App
