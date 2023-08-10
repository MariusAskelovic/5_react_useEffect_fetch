import { useEffect, useState } from "react"

const usersUrl = 'https://dummyjson.com/users?limit=5'

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

    // useEffect(() => {
    //     // PRADZIA
    //     fetch(`${usersUrl}/2`, {
    //         method: 'DELETE',
    //     })
    //         .then(res => res.json())
    //         .then(console.log);
    //     // PABAIGA
    // }, [deleteUser])

    function deleteUser(idToDelete) {
        const newArr = usersArr.filter((userObj) => (
            userObj.id !== idToDelete
        ))
        setUsersArr(newArr);
    }
    console.table(usersArr);
    return (
        <div className="usersBlock">
            {usersArr.map(userObj => (
                <div className="userCard" key={userObj.id}>
                    <img className="userImg" src={userObj.image} alt={userObj.firstName} />
                    <div className="userInfoBlock">
                        <h3 className="userFullName">{userObj.firstName} {userObj.lastName}</h3>
                        <h4 className="userAge">Age: {userObj.age}</h4>
                        <h5 className="userEmail">Email: {userObj.email}</h5>
                        <p>Eyes Color: <span style={{ color: userObj.eyeColor }}>{userObj.eyeColor}</span></p>
                        <button key={userObj.id} onClick={() => deleteUser(userObj.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}