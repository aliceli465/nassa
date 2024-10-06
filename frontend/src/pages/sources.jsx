function Sources() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "600px",
        margin: "20px auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        color: "black",
        fontFamily: "roboto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Sources</h2>
      <ol
        style={{
          listStylePosition: "inside",
          padding: "10px",
          lineHeight: "2",
          fontSize: "18px",
        }}
      >
        <li>
          https://exoplanetarchive.ipac.caltech.edu/
          <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
            <li>Main source of data + playing around</li>
          </ul>
        </li>
        <li>
          https://blog.google/technology/ai/hunting-planets-machine-learning/
          <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
            <li>A great read for learning about exoplanets for beginners</li>
          </ul>
        </li>
        <li>
          https://science.nasa.gov/exoplanets/habitable-zone/
          <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
            <li>HABITABILITY BABYYYYYY</li>
          </ul>
        </li>
        <li>
          https://www.hou.usra.edu/meetings/lpsc2020/pdf/3074.pdf
          <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
            <li>
              A difficult read but gave us insight on how to use temperature of
              both star + planets in our calculations{" "}
            </li>
          </ul>
        </li>
        <li>
          https://arxiv.org/abs/1911.04441
          <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
            <li>
              Main source of equations + deriving easy-to-use ones for our
              application
            </li>
          </ul>
        </li>
        <li>
          https://threejs.org/
          <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
            <li>ThreeJS. You're a pain to learn, but you the goat</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Sources;
