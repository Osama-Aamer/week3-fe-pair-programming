import {tours} from '../data'
import Title from './Title';
import Tour from './Tour';
import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";

const tourImages = [tour1,tour2, tour3, tour4]
//basically creating an array overhere so that it matches with the data in tour
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"/>

      <div className="section-center featured-center">
        {tours.map((tour, index) => {
          //over here we are basically adding the images which we imported from our array to tour object
          const tourWithImage= { ...tour, image: tourImages[index]};
          return <Tour key={tour.id} {...tourWithImage} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
