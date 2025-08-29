function LineThing() {
  return (
    <>
      <div className="h-59 max-lg:h-59 w-[1px] bg-stone-600 absolute left-6 top-[50px] rounded-full"></div>
      <div className="bg-stone-600 h-4 w-4 rounded-full absolute left-[15px] top-[80px] flex items-center justify-center">
        <div className="absolute bg-blue h-2 w-2 rounded-full"></div>
      </div>
      <div className="bg-stone-600 h-4 w-4 rounded-full absolute left-[15px] top-[178px] flex items-center justify-center">
        <div className="absolute bg-blue h-2 w-2 rounded-full "></div>
      </div>
      <div className="bg-stone-600 h-4 w-4 rounded-full absolute left-[15px] top-[280px] max-lg:top-[270px] flex items-center justify-center">
        <div className="absolute bg-blue h-2 w-2 rounded-full"></div>
      </div>
    </>
  );
}

export default LineThing;
