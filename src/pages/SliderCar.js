import { useParams } from 'react-router-dom';

const SliderCar = ()=>{

    const { id } = useParams();
    return (
        <div>
            new page {{id}}
        </div>
    )
}

export default SliderCar;