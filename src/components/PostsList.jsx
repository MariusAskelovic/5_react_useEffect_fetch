// parsiunciam failus iskart po to kai susikuria komponentas
// (useEffect)
// kai parsiunciam, irasom i state (useState)
import { useEffect, useState } from "react"
import SinglePost from "./SinglePost";

const postsUrl = 'https://dummyjson.com/posts';

export default function PostsList() {
    const [postArr, setPostArr] = useState([])
    useEffect(() => {
        fetch(postsUrl)
            .then(resp => resp.json())
            .then(dataBack => {
                setPostArr(dataBack.posts)
            })
            .catch(console.warn)
    }, [])

    // useEffect(() => {

    // }, [postArr])

    function howManyLikes() {
        let likesCount = 0;
        postArr.map(pObj => {
            likesCount += pObj.reactions;
        })
        console.log(likesCount);
        return likesCount;
    }
    // howManyLikes(postArr)
    return (
        <div>
            <h4>We do have {postArr.length} posts</h4>
            <h4>Total: {howManyLikes(postArr)} reactions</h4>
            <h2>PostsList</h2>
            <ul className="grid unlisted">
                {postArr.map(pObj =>
                    <SinglePost key={pObj.id} item={pObj} />
                )}
            </ul>
        </div>
    )
}

