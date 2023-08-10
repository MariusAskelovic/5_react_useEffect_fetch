import { useEffect, useState } from "react"

const usersUrl = 'https://dummyjson.com/users'

export default function UsersList() {
    const [usersArr, setUsersArr] = useState([])
    useEffect(() => {
        fetch(usersUrl)
            .then(get => get.json())
            .then(data => {
                setUsersArr(data.users)
                console.log(data.users)
            })
            .catch(console.warn)
    }, [])
    const [image, firstName, lastName] = usersArr;

    return (
        <div>
            {usersArr.map(userObj => (
                <div key={userObj.id}>
                    <h3>{userObj.firstName} </h3>
                </div>
            ))}
        </div>
    )
}