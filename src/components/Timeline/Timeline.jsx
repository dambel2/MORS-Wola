import  { useEffect } from 'react';
import timelineData from '../../data/timelineData';
import './timeline.css';

const Timeline = () => {
    useEffect(() => {
        const containers = document.querySelectorAll('.container');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.transitionDelay = `${index * 0.5}s`; // Ustawienie opóźnienia
                    observer.unobserve(entry.target); // Stop observing once element is visible
                }
            });
        }, {
            threshold: 0.1
        });

        containers.forEach(container => {
            observer.observe(container);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
            <div className='timeline'>
                {timelineData && timelineData.map((element) => (
                    <div 
                        className="container" 
                        key={element.id}
                    >
                        <div className='container-dot'></div>
                        <h4 className='text-[#e18a33] text-2xl font-semibold mb-8'>{element.time}</h4>
                        <div className='border-4 border-[#e18a33] px-[20px] sm:px-[50px] py-[30px] rounded-3xl hover:bg-gray-100'>
                            <h5 className='text-xl font-semibold mb-2'>{element.title}</h5>
                            <p>{element.description}</p>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default Timeline;