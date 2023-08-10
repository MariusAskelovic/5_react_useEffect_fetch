import { useEffect, useState } from "react"

const usersUrl = 'https://dummyjson.com/users'

export default function UsersList() {
    const [usersArr, setUsersArr] = useState([])
    const [sortArrOption, setSortArrOption] = useState('byName')

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

    function sortUsers() {
        const newArr = [...usersArr]
        if (sortArrOption === 'byName') {
            newArr.sort((aObj, bObj) => aObj.firstName > bObj.firstName)
        }
        else if (sortArrOption === 'byNameReverse') {
            newArr.sort((aObj, bObj) => aObj.firstName < bObj.firstName)
        }
        else if (sortArrOption === 'byAge') {
            newArr.sort((aObj, bObj) => aObj.age > bObj.age)
        }
        else if (sortArrOption === 'byAgeReversed') {
            newArr.sort((aObj, bObj) => aObj.age < bObj.age)
        }
        setUsersArr(newArr);
    }
    useEffect(() => {
        sortUsers()
    }, [sortArrOption])

    // console.table(usersArr);
    return (
        <div>
            <div>
                <select
                    name="select"
                    id="select"
                    onChange={(selectOption) => setSortArrOption(selectOption.target.value)}
                >
                    <option value="byName">By Name</option>
                    <option value="byNameReverse">By Name (Reversed)</option>
                    <option value="byAge">By Age</option>
                    <option value="byAgeReversed">By Age (Reversed)</option>
                </select>
            </div>
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
        </div>
    )
}