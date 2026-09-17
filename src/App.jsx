import ImageSlider from './components/ImageSlider.jsx';
import BMW from './assets/BMW.jpg';
import Ferrari from './assets/Ferrari.jpg';
import Lambo from './assets/Mercedez.jpg';
import Mercedez from './assets/Mercedez.jpg';
import Range_rover from './assets/Range_rover.jpg';
import RT_car from './assets/RT_car.jpg';
import Top_view_parking from './assets/Top_view_parking.jpg';

const ImageData = [
    { id: 1, src: BMW, alt: 'BMW Car'},
    { id: 2, src: Ferrari, alt: 'Ferrari Car'},
    { id: 3, src: Lambo, alt: 'Lambo Car'},
    { id: 4, src: Range_rover, alt: 'Range Rover'},
    { id: 5, src: RT_car, alt: 'RT Car'},
    { id: 6, src: Top_view_parking, alt: 'Top view of Car(s)'},
    { id: 7, src: Mercedez, alt: 'Mercedez Car'},
];


function App(){
    return (
        <main>
            <ImageSlider images={ImageData}/>
        </main>
    )
}

export default App