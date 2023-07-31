import { Box } from "@chakra-ui/react";
import {homePageConfiguration} from "../utils/componentTree.js"
import ComponentGenerator from "../utils/componentGenerator.jsx";

const Index = () => {
  return (
      <ComponentGenerator pageConfiguration={homePageConfiguration}/>
  );
};

export default Index;
