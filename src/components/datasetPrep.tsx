import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

function DatasetPrep() {
  const qnaJSON = [
    {
      id: 35,
      "contributed by": "group 5",
      question:
        "What is term used to refer to the two unknown constants that represent slope and intercept in the mathematical representation of the linear model",
      options: { A: "coefficients", B: "variables", C: "weights", D: "bounds" },
      answer: "A",
      contributed_by: "group 5",
    },
  ];
  const passageJSON = [
    {
      id: "35",
      title: "Simple Linear Regression",
      section: "3.1",
      text: "β0 and β1 are two unknown constants that represent the intercept and slope terms in the linear model. Together, β0 and β1 are intercept slope known as the model coefficients or parameters.",
    },
  ];

  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-5 lg:pb-20">
      <h2 className="mb-4 text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[0.6]">
        Dataset Preperation
      </h2>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        Using the textbook as a reference, we created a dataset of this
        format with one file with QnA and another with the passage and its source
      </p>
      <SyntaxHighlighter
        language="json"
        style={okaidia}
        className="max-w-[400px] mt-4 lg:max-w-[750px]"
      >
        {JSON.stringify(qnaJSON, null, 2)}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="json"
        style={okaidia}
        className="max-w-[400px] mt-4 lg:max-w-[750px]"
      >
        {JSON.stringify(passageJSON, null, 2)}
      </SyntaxHighlighter>
    </section>
  );
}

export default DatasetPrep;
