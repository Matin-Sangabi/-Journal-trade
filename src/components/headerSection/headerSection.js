const HeaderSection = ({imgURI , title , desc}) => {
  return (
    <div className="p-2 flex flex-col items-center ">
      <img
        src={`/images/icons/${imgURI}`}
        alt="passion"
        className="object-cover object-center aspect-auto"
      />
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-slate-800 font-extrabold text-3xl ">
          {title}
        </h1>
        <h2 className="text-gray-500  font-bold line-clamp-2 w-72 text-center">
          {desc}
        </h2>
      </div>
    </div>
  );
};

export default HeaderSection;
