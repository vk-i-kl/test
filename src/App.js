import React, {useState} from 'react';

const App = () => {
    const [state,setState] = useState(0)
    const click =()=>setState(prevState => prevState +1)
    return (
        <div>
          Hello world
            You clicked {state} time
            <button onClick={click}>click me</button>
        </div>
    );
};

export default App;