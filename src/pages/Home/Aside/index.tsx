import React from "react";
import ClassificationBar from "./ClassificationBar";
import SelfCard from "./SelfCard";
import { useSelector } from "react-redux";
import { selectAllTags } from "../../../redux/selectors/blogSelector";

const Aside = () => {
    const tags = useSelector(selectAllTags);
    return (
        <>
            <SelfCard />
            <ClassificationBar tags={tags} />
        </>
    )
}

export default Aside;