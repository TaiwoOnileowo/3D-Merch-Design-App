import React from "react";
import CustomButtton from "./CustomButtton";
const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AI..."
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButtton
            title="Asking AI..."
            type="outline"
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButtton
              title="AI Logo"
              type="outline"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButtton
              title="AI Full"
              type="filled"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
