import "./About.css";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function About() {
  return (
    <>
      <div className="popovers">
        <Popover>
          <PopoverTrigger className="border-solid border-2 border-black hover:border-dotted p-2 m-5">
            Our Team
          </PopoverTrigger>
          <PopoverContent className="h-45 w-45">
            <img src="/photos.png" className="imageOfUs" />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
