

const Heading = ({title, subtitle}) => {
    return (
        <div className="space-y-2">
            <h1 className="w-full font-bold text-3xl text-center">{title}</h1>
            <p className="w-full text-gray-500 text-center">{subtitle}</p>
        </div>
    );
};

export default Heading;