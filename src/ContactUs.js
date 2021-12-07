import { Button,TextField} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import React from "react";

export function ContactUs() {
  return (
    <div className="contact-container">
       
      <form className="contact">
      <h1 className="contact-heading">Contact Us</h1>
      <TextField  variant="outlined" type="text" label="Name"/>
      <TextField variant="outlined" type="email" label=" Email"/>
      <TextField variant="outlined" type="number" label="Mobile"/>
      <TextareaAutosize className="txt-area"
      aria-label="minimum height"
      minRows={3}
      placeholder="enter message here..."
     style={{ width: 498 }}
/>
      <Button variant="contained" type="submit">submit</Button>
      </form>

    </div>
  );

}
