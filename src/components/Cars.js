import {useState, useEffect} from "react";
import {getCars, saveCarService, deleteCarService} from "../services/services";
import Car from "./Car";

export default function Cars () {
    //first render
    let [cars, setCars] = useState([])
    // console.log(cars)

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    },[])
    //end first render

    // add car
    let [formState, setFormstate] = useState({model:'', price:'', year:''});

    let formInputChange = (e) => {
        // console.log(e.target.name)
        setFormstate({...formState, [e.target.name]: e.target.value})
    }

    let saveCar = (e) => {
        e.preventDefault();
        saveCarService(formState)
            .then(newCar => setCars([...cars, newCar]))
    }
    // end add car

    //delete car
     let deleteCar = (carId) => {
         deleteCarService(carId).then(value => console.log(value));
         let filteredCarsArray = cars.filter(value => value.id !== carId);
         setCars([...filteredCarsArray]);
     };
    //end delete car

    return (
        // <div className={'carsMainWrapper'}> -- bug ???
        <div>
            <div className="formWrapper">
                <form onSubmit={saveCar}>
                    <input type="text" name={'model'} value={formState.model} placeholder={'Car model'} onChange={formInputChange}/>
                    <input type="number" name={'price'} value={formState.price} placeholder={'Price'} onChange={formInputChange}/>
                    <input type="number" name={'year'} value={formState.year} placeholder={'Year'} onChange={formInputChange}/>
                    <input type="submit" value={'save car'}/>
                </form>
            </div>
            <div className={'carsWrapper contentItemsWrapper'}>
                {
                    cars.map(value => <Car car={value} key={value.id} deleteCar={deleteCar}/>)
                }
            </div>
        </div>
    )
}