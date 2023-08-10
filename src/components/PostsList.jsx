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
    return (
        <div>
            <h2>PostsList</h2>
            <ul className="grid unlisted">
                {postArr.map(pObj =>
                    <SinglePost key={pObj.id} item={pObj} />
                )}
            </ul>
        </div>
    )
}

