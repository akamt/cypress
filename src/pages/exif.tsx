import exif from "exif-js/exif";
import { useState } from "react";

const ExifPage = (): JSX.Element => {
  const [make, setMake] = useState("");

  const handleChange = (e) => {
    // eslint-disable-next-line no-console
    console.log(e);

    const { files } = e.target;
    // const fileReader = new FileReader();

    // fileReader.readAsArrayBuffer(files[0]);
    //
    // fileReader.onload = (e) => {
    //   const bytes = e.target.result;
    //   // EXIF.readFromBinaryFileでexifの解析
    //   const hoge = exif.readFromBinaryFile(bytes);
    //   // 結果を表示
    //   let result = "";
    //
    //   console.log(hoge);
    //
    //   // EXIF.getTag(this, "[exifのタグ名]")で、値を取得
    //   result += "DateTimeOriginal:" + hoge["DateTimeOriginal"];
    //   result += "<br>";
    //   result += "Orientation:" + hoge["Orientation"];
    //   // eslint-disable-next-line no-console
    //   console.log(result);
    // };

    exif.getData(files[0], function () {
      setMake(exif.getTag(this, "DateTimeOriginal"));
    });
  };

  return (
    <div>
      <p>make: {make}</p>
      <input type="file" onChange={handleChange} />
    </div>
  );
};

export default ExifPage;
