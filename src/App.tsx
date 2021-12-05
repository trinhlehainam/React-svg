import React from 'react';
import './App.css';
import MenuButton from './components/menubutton';

const styles: React.CSSProperties = {
    backgroundImage: `url(/background.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

function App() {
  return (
    <div
    className="h-screen w-screen fixed min-h-screen"
    style={styles}>
        <div
        className="container grid grid-cols-1 justify-center mx-auto h-full">
            <div className="justify-center h-1/4 my-auto">
                <MenuButton classname="fill-current w-full"/>
            </div>
            <div className=" relative justify-center grid grid-cols-1 mx-auto my-auto h-3/4">
                <MenuButton classname="fill-current w-full mb-8"/>
                <MenuButton classname="fill-current w-full mb-8"/>
                <MenuButton classname="fill-current w-full mb-8"/>
            </div>
        </div>
    </div>
  );
}

export default App;
