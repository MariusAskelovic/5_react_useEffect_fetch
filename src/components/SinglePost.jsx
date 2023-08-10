import { useState } from "react";
import PostTags from "./PostTags";

export default function SinglePost(props) {
    const [isTextFull, setIsTextFull] = useState(false)
    const { title, body, reactions, tags } = props.item;
    function showTextFull() {
        setIsTextFull(!isTextFull)
    }
    const bodyText = isTextFull ? body : body.slice(0, 45)

    return (
        <li className="postCard">
            <div>
                <h3>{title}</h3>
                <p>{bodyText}</p>
                <button onClick={showTextFull}>read {isTextFull ? 'less' : 'more'}</button>
                <p>{reactions} people liked this</p>
                <PostTags propsTags={tags} />
            </div>
        </li>
    )
}
