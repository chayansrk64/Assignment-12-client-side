import './ParallaxCompo.css'
const ParallaxCompo = () => {
    return (
        <section className='parallax-bg bg-fixed '>
            <div className=" gap-8 text-center   bg-slate-400 bg-opacity-40 text-white px-32 pt-10 pb-20">
                 
                <div>
                <p className='italic font-bold'>Next Level Photography</p>
                <h4 className="text-xl uppercase mt-10">Great photography should not be so hard.</h4>
                <p> With <span className='md:text-6xl text-sky-200 font-bold p-5 '>Next Photograph</span> isnt it? </p>
                <p className='mt-10 italic'>--- To learn more stay with next photograph ---</p>
                
                </div>
            </div>
        </section>
    );
};

export default ParallaxCompo;