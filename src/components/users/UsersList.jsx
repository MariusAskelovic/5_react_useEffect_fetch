import { useEffect } from "react"

export default function UsersList() {
    const usersUrl = 'https://dummyjson.com/users'
    useEffect(() => {
        fetch(usersUrl)
            .then(get => get.json())
            .then(data => {
                console.log(data.users);
            })
            .catch(console.warn)
    }, [])

    return (
        <div></div>
    )
}