import "./Contact.css";
import "../../../globals.css";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import * as React from "react";

export default function Contact() {
  return (
    <>
      <div className="popovers">
        <Popover>
          <PopoverTrigger className="border-solid border-2 border-black hover:border-dotted p-2 m-5">
            Our Reflections
          </PopoverTrigger>
          <PopoverContent className="h-45 w-45">
            <img src="/reflect.png" className="imageOfUs" />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
