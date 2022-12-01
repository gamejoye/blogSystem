import React from "react";
import ShowComponent from "../ShowComponent";
function Introduction({ edit, setEdit, aboutMe, setAboutMe, handleCancel, handleSubmit }) {
    return (
        <>
            <p>个人介绍：</p>
            {(!edit && <ShowComponent data={aboutMe} setEdit={setEdit}/>) || <div>
                <textarea
                    className="aboutMe"
                    defaultValue={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                /><br />
                <button onClick={() => handleSubmit()}>Submit</button>
                <button onClick={() => handleCancel()}>Cancel</button>
            </div>}
        </>
    )
}
export default Introduction;