 
const SectionTitle = ({ heading}) => {
    return (
        <div className="w-2/3 md:w-3/12  text-center mx-auto my-10">
            <h3 className="border-double border-y-4 border-sky-500 py-3 uppercase text-3xl"> {heading} </h3>
        </div>
    );
};

export default SectionTitle;