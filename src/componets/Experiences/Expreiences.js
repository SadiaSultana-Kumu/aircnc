import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
import Experience from './Experience/Experience';


const Experiences = () => {
    const [allExperience, setAllExperience] = useState([]);
    useEffect(() => {
        fetch("https://air-cnc-homes-api.herokuapp.com/experiences")
        .then(res=>res.json())
        .then(data=>setAllExperience(data))
    },[allExperience.length])
    console.log(allExperience)
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
 
    return (
        <section className="homes my-5">

            <div className="d-flex justify-content-between mb-3">
                <h5>Experiences</h5>
                <Link to="">See All &#8594;	</Link>
            </div>
            <div>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={4}
                    gutter={12}
                    leftChevron={<button class="left-indecator">{'<'}</button>}
                    rightChevron={<button className="right-indecator">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {
                        allExperience.map(experience => <Experience experience={experience}/>)
                    }
                    
                </ItemsCarousel>
                </div>
        </section>
        
    );
};

export default Experiences;