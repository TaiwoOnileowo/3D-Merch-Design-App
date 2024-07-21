import React from "react";
import CustomButtton from "./CustomButtton";
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButtton
          title="Logo"
          type="outline"
          customStyles="text-xs"
          handleClick={() => readFile("logo")}
        />
        <CustomButtton
          title="Full"
          type="filled"
          customStyles="text-xs"
          handleClick={() => readFile("full")}
        />
      </div>
    </div>
  );
};

export default FilePicker;
