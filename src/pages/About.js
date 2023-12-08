import car from '../assets/car.png';
import CarView from '../components/card/CarView';
import CardList from '../components/card/CardList';

import { MdCarRental } from "react-icons/md";

const About = () => {

    const carList = [
        {
            id: 1,
            name: 'BMW',
            image: car,
            joining: '12-12-23'
        },
        {
            id: 2,
            name: 'Range Rover',
            image: car,
            joining: '12-12-23'
        },
        {
            id: 3,
            name: 'Honda',
            image: car,
            joining: '12-12-23'
        },


    ]

    const carInfo = [
        {
            id:1,
            image:car,
        },
        {
            id:2,
            image:car,
        },
        {
            id:3,
            image:car,
        },
        {
            id:4,
            image:car,
        },
    ]

    return (
        <div className="block bg-white px-5 py-3">
            {/* part one */}
            <div className="block px-5 py-2">
                <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
                    Introduce with us
                </span>
                <p className="font-normal text-sm tracking-wide px-8 py-2 text-justify ">
                    Laborum tempor cupidatat reprehenderit aute magna ex elit aliqua aliquip et duis nostrud esse. Non ex nostrud incididunt sit. Adipisicing aliquip fugiat laborum ex nisi commodo commodo non pariatur. Fugiat esse incididunt nostrud eiusmod duis aliquip eiusmod. Incididunt est id labore nisi veniam consectetur Lorem exercitation. Velit quis occaecat ullamco aliqua consequat proident ex ullamco cupidatat reprehenderit. Nulla dolore pariatur velit enim velit ea non quis duis aute non.
                    Ipsum ipsum nulla velit pariatur labore exercitation laboris laboris. Sint aliquip ut labore occaecat anim ea. Nisi magna deserunt pariatur et laborum nisi laborum excepteur. Eiusmod et sunt nisi enim elit deserunt aute cupidatat excepteur ullamco aliqua occaecat nulla sit. Dolor duis occaecat pariatur laborum ea eu consequat. Sunt mollit ea aliqua tempor consequat duis proident nostrud ut sit ad quis minim.
                    Veniam officia ad in eu dolore et irure. Tempor qui ex non consectetur magna occaecat consectetur aute sint quis irure voluptate enim. Laborum sit aliquip consequat occaecat aliquip.
                </p>
            </div>
            {/* part two */}
            <div className="block px-5 py-2">
                <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
                    Car view
                </span>
                <div className='flex justify-center px-8 py-2 items-center gap-8'>
                    {
                        carList.map((car) => {
                            return (
                                <CarView key={car.id} car={car} />
                            )
                        })
                    }
                </div>
            </div>

            {/* part 3 */}
            <div className="block px-5 py-2">
                <span className="flex justify-center py-2 text-2xl font-bold text-center tracking-wide underline underline-offset-8 decoration-blue-800">
                    Frequintlly Ask Question
                </span>
                <div className='block px-8 py-2'>
                   {
                    carInfo.map((carI) => {
                        return (
                            <CardList key={carI.id} carI={carI} />
                        )
                    })
                   }
                </div>
            </div>
        </div>
    )
}

export default About;