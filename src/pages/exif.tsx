import React, { useState } from "react";
import exif from "exif-js/exif";

const ExifPage = (): JSX.Element => {
  const [allMetaData, setAllMetaData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exif.getData(file, function () {
      setAllMetaData(exif.getAllTags(this));
    });
  };

  return (
    <div>
      <div>
        {Object.keys(allMetaData).map((k) => (
          <p key={k}>
            {(typeof allMetaData[k] === "string" && (
              <span>
                {k}: {allMetaData[k]}
              </span>
            )) ||
              (typeof allMetaData[k] === "object" &&
                Object.keys(allMetaData[k]).map((kk) => (
                  <span key={kk}>{kk} </span>
                )))}
          </p>
        ))}
      </div>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default ExifPage;
