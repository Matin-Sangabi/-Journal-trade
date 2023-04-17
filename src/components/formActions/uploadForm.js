const UploadDataForm = () => {
  return (
    <div className="bg-indigo-50 rounded-3xl shadow p-2 flex flex-col items-center">
      <h1 className="text-slate-800 font-bold text-sm ">Upload your file </h1>
      <h2 className="text-slate-400 text-xs font-semibold">
        file should be zip,jpeg,png
      </h2>
      <div className="w-full px-2 border-2 mt-2 border-gray-700 border-dashed rounded-2xl flex flex-col items-center justify-center py-2 ">
        <img src={"/images/icons/createOrder.png"} />
        <h3 className="text-slate-400 text-xs font-semibold">
          Drag and Drop file here
        </h3>
      </div>
    </div>
  );
};

export default UploadDataForm;
