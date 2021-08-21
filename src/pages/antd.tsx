import React, { useState } from "react";
import { DatePicker, message, Alert } from "antd";
import { Moment } from "moment";

const AntdPage = (): JSX.Element => {
  const [date, setDate] = useState<Moment>();

  const handleChange = async (value: Moment) => {
    await message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );

    await setDate(value);
  };

  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        <Alert
          message="Selected Date"
          description={date ? date.format("YYYY-MM-DD") : "None"}
        />
      </div>
    </div>
  );
};

export default AntdPage;
