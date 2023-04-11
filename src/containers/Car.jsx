import React from "react";
import Carousel from "./Carousel";

const images = [
  "https://user-images.githubusercontent.com/99425379/230284205-e5cf7ca5-0ba0-4b4e-a93d-1ddd2d82f914.png",
  "https://user-images.githubusercontent.com/99425379/230283764-adaa00f6-3bd5-4ea9-830c-024a2bda91f3.png",
  "https://user-images.githubusercontent.com/99425379/230283845-98c989df-37a5-4aeb-8d14-91e1575f4418.png",
];

const App = () => {
  return <Carousel images={images} />;
};

export default App;