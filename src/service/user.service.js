const URL = "https://reqres.in";

async function getUserList(id) {
    const res = await fetch(URL + '/api/users?page=2');
    return await res.json();;
}

const userService = {
    getUserList
}

export default userService;