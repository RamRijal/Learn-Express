import { useState } from 'react';
import './App.css';
import LearnCleanup from './practiceComponent/UseEffect/LearnCleanup.jsx';
import UseEffectPractice from './practiceComponent/UseEffect/UseEffectPractice.jsx';
import Mylinks from './practiceComponent/Mylinks.jsx';
import MyRoutes from './practiceComponent/MyRoutes.jsx';
import ReadSpecificProduct from './practiceComponent/Product/ReadSpecificProduct.jsx';
import Form1 from './practiceComponent/Form/form1.jsx';
import Form2 from './practiceComponent/Form/form2.jsx';
import ReactLink from './practiceComponent/ReactLink.jsx';
import ReactRouter from './practiceComponent/ReactRouter.jsx';
import Form3 from './practiceComponent/Form/form3.jsx';
import UseRef1 from './practiceComponent/UseRefHook/UseRef1.jsx';
import AddToLocalStorage from './practiceComponent/LocalStorage/AddToLocalStorage.jsx';
import GetLocalStorage from './practiceComponent/LocalStorage/GetLocalStorage.jsx';
import RemoveLocalStorage from './practiceComponent/LocalStorage/RemoveLocalStorage.jsx';
import AddtoSessionStorarge from './practiceComponent/SessionStorage/AddtoSessionStorarge.jsx';
import GetSessionStorage from './practiceComponent/SessionStorage/GetSessionStorage.jsx';
import RemoveFromSessionStorage from './practiceComponent/SessionStorage/RemoveFromSessionStorage.jsx';

function App() {
    let [show, setShow] = useState(true)
    let name = <div className='success'>I am Batman</div>
    return (
        <div>
            {name}
            {/* <UseEffectPractice />
            {show ? <LearnCleanup /> : null}
            <button onClick={() => {
                setShow(true)
            }}>Show</button>
            <button onClick={() => {
                setShow(false)
            }}>Hide</button>

            <Mylinks/> */}
            {/* <MyRoutes/> */}

            {/* <Form1/> */}
            {/* <Form2/> */}

            {/* <ReactLink/> */}
            {/* <ReactRouter /> */}

            {/* <Form3 /> */}

            <UseRef1/>
            {/* <AddToLocalStorage/> */}
            <GetLocalStorage/>
            <RemoveLocalStorage/>
            <AddtoSessionStorarge/>
            <GetSessionStorage/>
            <RemoveFromSessionStorage/>
        </div>

    )
}

export default App;
