import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemSubmissionForm from "../components/ui/ItemSubmissionForm";

const Home = () => {

  // debugging lol
  // console.log("data", wardrobejson);

  return (
    <div className="container mx-auto py-8">
      <ItemSubmissionForm />
    </div>
  );
};

export default Home;

