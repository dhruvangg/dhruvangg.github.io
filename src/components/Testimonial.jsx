'use client';

import { useGSAP } from '@gsap/react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Testimonial() {
    const reviews = [{
        "name": "Parth Kothari",
        "designation": "Scrum Master",
        "comment": "Dhruvang is one of the best coders I have known. He is genuinely a coding wizard with whom I had a pleasure working on several projects. His logical reasoning and problem solving skills are exceptional.\n I would definitely recommend Dhruvang for complex coding projects."
    }, {
        "name": "Vraj Shah",
        "designation": "Software Engineer @ Infosys",
        "comment": "Dhruvang is one of the best among all the people I have ever worked with. Dhruvang is a very productive person, hardworking, broad-minded , Hubspot ninja , JavaScript Champ and forward thinking individual. Intelligent, ambitious, energetic and proactive perfectionist. \n Desire for proficiency and education makes Dhruvang a valuable asset to the team. Working with Dhruvang is a signature of success."
    }, {
        "name": "Kunal Singh",
        "designation": "Software Engineer @Freshworks",
        "comment": "Dhruvang is an exceptional problem solver with a can do attitude. His dedication towards his craft is admirable and it&apos;s a joy and privilege to work alongside such an awesome talent."
    }, {
        "name": "Jainish Patel",
        "designation": "QA Analyst",
        "comment": "He&apos;s committed to quality, growth, and progress, and he inspires his team members to strive for the same. In short, Champ is a person with vision. Dhruvang&apos;s fun and friendly personality are just icing on the cake of his many other qualifications.<br />As a team member or a leader, Dhruvang earns my highest recommendation."
    }]

    const headRef = useRef()

    useGSAP(() => {
        gsap.to(headRef.current, { x: -2500, duration: 100 });
    }, { scope: headRef })
    
    return (
        <section className="py-24 overflow-hidden">
            <h3 className="text-8xl o-big-title font-light">
                <span ref={headRef} className="flex-none flex flex-row flex-nowrap justify-start items-start" style={{ transform: 'translateZ(0)' }}>
                    <span className="smooth_head--movable flex-none block mr-16">What People are saying?</span>
                    <span className="smooth_head--movable flex-none block mr-16">What People are saying?</span>
                    <span className="smooth_head--movable flex-none block mr-16">What People are saying?</span>
                    <span className="smooth_head--movable flex-none block mr-16">What People are saying?</span>
                </span>
            </h3>
            <div className="container mt-12">
                <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <section className="flex cursor-grab justify-center">
                        <Splide aria-label="Testimonials" options={{ type: 'loop', autoplay: true, arrows: false, autoHeight: true, pagination: false, interval: 5000 }}>
                            {reviews.map(review => <SplideSlide key={review.name} className="splide__slide" data-splide-interval="5000">
                                <figure className="mx-auto">
                                    <svg className="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                            fill="currentColor" />
                                    </svg>
                                    <blockquote>
                                        <p className="text-2xl font-medium text-gray-900">{review.comment}</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div className="pr-3 font-medium text-gray-900">{review.name}</div>
                                            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{review.designation}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </SplideSlide>)}
                        </Splide>
                    </section>
                </div>
            </div>
        </section>
    )
}
