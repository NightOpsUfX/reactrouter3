// const getUsers = () => {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
// }
//
// const getPosts = () => {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(value => value.json())
// }
//
// const getComments = () => {
//     return fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(value => value.json())
// }
//
// const getCars = () => {
//     return fetch('http://91.201.233.14/api/v1/cars')
//         .then((response) => response.json())
//         // .then((json) => json)
// }
//
// const saveCarService = (formState) => {
//     // console.log(formState)
//
//     return fetch('http://91.201.233.14/api/v1/cars',
//         {
//             method: 'POST',
//             body: JSON.stringify(formState),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         }).then((response) => response.json())
// }
//
// const deleteCarService = (carId) => {
//     // console.log(carId)  // test
//     return fetch('http://91.201.233.14/api/v1/cars/' + carId,{
//             method: 'DELETE'
//         }).then((response) => response.json())
// }
//
// const editCarService = (formState) => {
//
//     // console.log(formState)
//
//     return fetch('http://91.201.233.14/api/v1/cars/' + formState.id,
//         {
//             method: 'PATCH',
//             body: JSON.stringify(formState),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         }).then((response) => response.json())
// }
//
// export {getUsers, getPosts, getComments, getCars, saveCarService, deleteCarService, editCarService}
//

////////////////////////////
const getUser = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users' + '/' + id)
        .then(value => value.json())
}

const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}

const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

 export {getPosts, getUsers, getUser}
