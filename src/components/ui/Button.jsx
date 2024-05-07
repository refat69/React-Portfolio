export const Button = ({ className, title }) => {
  return (
    <button
      className={`text-designColor/70 text-sm font-semibold bg-gradient-to-tr from-black to-primaryColor rounded-md hover:bg-gradient-to-tr hover:from-primaryColor hover:to-black hover:text-designColor duration-300 hover:-translate-y-1 ${className}`}>
      {title ? title : "Hire Me"}
    </button>
  );
};
