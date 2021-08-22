import React, { useState } from "react";
import { DatePicker, message, Alert, Button } from "antd";
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
        <div style={{ display: "flex", padding: "16px" }}>
          <Button type="primary">primary button</Button>
          <Button type="ghost">ghost button</Button>
          <Button type="dashed">dashed button</Button>
          <Button type="link">link button</Button>
          <Button type="text">text button</Button>
        </div>
      </div>
    </div>
  );
};

export default AntdPage;
