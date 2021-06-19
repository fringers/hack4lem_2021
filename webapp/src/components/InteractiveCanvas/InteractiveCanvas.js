import { useEffect } from "react";
import Canvas from "./Canvas";

export const InteractiveCanvas = () => {
  useEffect(() => {
    const interactive_canvas = document.createElement("script");
    interactive_canvas.src =
      "https://www.gstatic.com/assistant/interactivecanvas/api/interactive_canvas.min.js";

    const PixiJS = document.createElement("script");
    PixiJS.src =
      "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.7/pixi.min.js";

    const Stats = document.createElement("script");
    Stats.src =
      "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js";

    document.body.appendChild(interactive_canvas);
    document.body.appendChild(PixiJS);
    document.body.appendChild(Stats);

    return () => {
      document.body.removeChild(Stats);
      document.body.removeChild(PixiJS);
      document.body.removeChild(interactive_canvas);
    };
  }, []);

  return <Canvas />;
};
