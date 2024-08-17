/* eslint-disable react/prop-types */
const Button = ({name}) => {
    return (
        <div>
            <button className="bg-[#3C5B6F] px-3 py-1 rounded-md text-white font-semibold">{name}</button>
        </div>
    );
};

export default Button;