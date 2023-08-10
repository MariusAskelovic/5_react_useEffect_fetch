// parsiunciam failus iskart po to kai susikuria komponentas
// (useEffect)
// kai parsiunciam, irasom i state (useState)
import { useEffect, useState } from "react"

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
            <ul>
                {postArr.map(pObj =>
                    <li key={pObj.id}>
                        <div className="postCard">
                            <h3>{pObj.title}</h3>
                            <p>{pObj.body.slice(0, 45)}...</p>
                            <p>{pObj.reactions} people liked this</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

