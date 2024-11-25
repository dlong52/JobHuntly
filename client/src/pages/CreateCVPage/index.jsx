import React from "react";

const CreateCVPage = () => {
  return (
    <div>
      <div className="h-[250px] bg-white flex items-end">
        <div className="flex w-full" style={{ height: "calc(100% - 75px)" }}>
          <input type="text" />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="col-span-10">
            <div className="">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCVPage;
