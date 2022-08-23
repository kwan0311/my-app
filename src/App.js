import { useState } from "react";
import{Question} from "./question"
import{Article} from "./Article"


function App(){
    const[isToggled, setIsToggled] = useState(true)
    return (
        
        
        <div className="wrap">  
        <div className="newpost">
            <p>New Post</p>

        </div>

        <div className="aradio">
            <p>Select Post Type</p>

        </div>
        
        <div className="radio">
        <input type="radio"  name="gender" onClick={() => setIsToggled(true)}/> Question
        <input type="radio" name="gender" onClick={() => setIsToggled (false)}/> Article
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="newpost">
            <p>What do you want to ask or share</p>
        </div>
        <div className="tag">
                <div className="tagname">
                    <p>Title</p>
                </div>
                <div className="taginput">
                    <input type="text" id="tag"/>
                </div>
            </div>

            {isToggled ? <Question/> : <Article/>}
            
        </div>
    );
}

export default App