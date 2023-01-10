import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
// import demo from "./demo.jpg";
import { FcSearch } from "react-icons/fc";
import Idle from "../Components/Idle";
import Loading from "../Components/Loading";
import "./style/imagegenerator.css";

export default function ImageGenerator() {
  //   const [download] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPEN_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateAiImage = async () => {
    setLoading(true);
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    console.log(prompt);
    setLoading(true);

    setResult(response.data.data[0].url);
    console.log(response.data.data[0].url);
    setLoading(false);
  };

  return (
    <section className="image-gen-main">
      {/* <section className="image-gen-hero">
        <h1>Ai image Generator</h1>
        <div className="search-inpu">
          <input type="text" onChange={(e) => setPrompt(e.target.value)} />
          <button onClick={generateAiImage}> Click Me</button>
        </div>
      </section> */}

      <div className="hero-main">
        <div className="hero-serch-main">
          {/* <h1>Ai Image Generator</h1> */}
          <div className="search-input">
            <input
              type="text"
              className="input"
              placeholder="Write Something.."
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button onClick={generateAiImage}>
              {" "}
              <FcSearch size={20} />{" "}
            </button>
          </div>
          {result.length > 0 ? (
            <div className="download-btn">
              <a
                href={result}
                target="_blank"
                download={result}
                rel="noreferrer"
              >
                Download Image
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="result-main">
        {loading ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div className="result-image">
            {result.length > 0 ? (
              <img src={result} alt="" />
            ) : (
              // <img src={demo} alt="" />
              <div className="idle">
                <Idle />
              </div>
            )}
            {/* <img src={result} alt="" /> */}
            {/* <img src={demo} alt="" /> */}
          </div>
        )}
      </div>
    </section>
  );
}
