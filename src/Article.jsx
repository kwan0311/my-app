import React from "react";

export const Article = () =>{
    return(
        <div class="wrap">
            <p>Abstract</p>
            <textarea type="text" name="problem" id="Abstract"/>
            <p>Article Text</p>
            <textarea type="text" name="problem" id="Text"/>
            <div className="tag">
                <div className="tagname">
                    <p>Tag: </p>
                </div>
                <div className="taginput">
                    <input type="text" id="tag"/>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button className="button-post">Post</button>
        </div>
    )
}