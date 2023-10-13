import React, {useState} from 'react';

const App = () => {
    const [state,setState] = useState(0)
    const click =()=>setState(prevState => prevState +1)
    return (
        <div>
          Hello world
            Ти клікнула {state} разів
            <button onClick={click}>click me</button>
        </div>
    );
};

export default App;