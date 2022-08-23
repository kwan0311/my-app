import React from "react";

export const Question = () =>{
    return(
        <div class="wrap">
            <p>Discrible Your Problem</p>
            <textarea type="text" name="problem" id="problem"/>
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