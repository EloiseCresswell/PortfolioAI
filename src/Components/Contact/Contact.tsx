import "./Contact.css";
import "../../../globals.css";
import * as React from "react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <Card className="w-[350px]">
        <CardHeader className="bg-blue-500">
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>
            Please fill out this form to send your details
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-blue-500">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Enter your name</Label>
                <Input id="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Reason for contacting</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Employer</SelectItem>
                    <SelectItem value="sveltekit">Fellow coder</SelectItem>
                    <SelectItem value="astro">Recruiter</SelectItem>
                    <SelectItem value="nuxt">Just for fun!</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between bg-blue-500">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-green-500">Submit</Button>
        </CardFooter>
      </Card>
    </>
  );
}
