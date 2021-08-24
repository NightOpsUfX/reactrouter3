export default function Car ({car, deleteCar}) {
    console.log(car)
    //
    let carId = car.id

    let onClickDeleteCar = () => {
        // console.log(car.id)
        deleteCar(carId);
    };
    //
    return (
        <div className={'carItem contentItem'}>
            <h3>Car model: {car.model}</h3>
            <div>
                <p>Car price: {car.price}</p>
                <p>Car year: {car.year}</p>
            </div>
            <div>
                <button >Edit car</button>
                <button onClick={onClickDeleteCar}>Delete car</button>
            </div>
            <br/>
        </div>
    )
}

