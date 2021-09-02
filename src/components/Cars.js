// import {useState, useEffect} from "react";
// import {getCars, saveCarService, deleteCarService, editCarService} from "../services/services";
// import Car from "./Car";
//
// export default function Cars () {
//     //first render
//     let [cars, setCars] = useState([])
//
//     useEffect(() => {
//         getCars().then(value => setCars([...value]))
//     },[])
//     //end first render
//
//     // form Input Change
//     let [formState, setFormstate] = useState({model:'', price:'', year:''});
//
//     let formInputChange = (e) => {
//         setFormstate({...formState, [e.target.name]: e.target.value})
//     }
//     // end form Input Change
//
//     //  edit car to form
//     let carToForm = (carId) => {
//         let editedCar = cars.find(car => car.id == carId)
//         setFormstate(editedCar)
//     }
//     // end edit car to form
//
//     // car change
//     function carSaveOrEdit (e) {
//         e.preventDefault()
//
//         //save new car
//         if (formState.id === undefined) {
//             let saveCar = (e) => {
//                 e.preventDefault();
//                 saveCarService(formState)
//                     .then(newCar => setCars([...cars, newCar]))
//             }
//             saveCar(e)
//         }
//         // edit existing car
//         else {
//             let editCar = (e) => {
//                 e.preventDefault()
//                 editCarService(formState)
//                     .then(value => {
//                        let find = cars.find(car => car.id === value.id)
//                         Object.assign(find, value)
//                         // find.model = value.model
//                         setCars([...cars])
//                     })
//             }
//             editCar(e)
//         }
//     }
//     // end car change
//
//     //delete car
//      let deleteCar = (carId) => {
//          deleteCarService(carId).then(value => console.log(value));
//          let filteredCarsArray = cars.filter(value => value.id !== carId);
//          setCars([...filteredCarsArray]);
//      };
//     //end delete car
//
//     return (
//         <div className={'carsMainWrapper'}>
//             <div className="formWrapper">
//                 <form onSubmit={carSaveOrEdit}>
//                     <input type="text" name={'model'} value={formState.model} placeholder={'Car model'} onChange={formInputChange}/>
//                     <input type="number" name={'price'} value={formState.price} placeholder={'Price'} onChange={formInputChange}/>
//                     <input type="number" name={'year'} value={formState.year} placeholder={'Year'} onChange={formInputChange}/>
//                     <input type="submit" value={'save car'}/>
//                 </form>
//             </div>
//             <div className={'carsWrapper contentItemsWrapper'}>
//                 {
//                     cars.map(value => <Car car={value} key={value.id} deleteCar={deleteCar} carToForm={carToForm}/>)
//                 }
//             </div>
//         </div>
//     )
// }