import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { "dataset-size": 15, accuracy: 73.17 },
  { "dataset-size": 30, accuracy: 75.61 },
  { "dataset-size": 45, accuracy: 82.93 },
  { "dataset-size": 75, accuracy: 82.93 },
  { "dataset-size": 105, accuracy: 80.49 },
  { "dataset-size": 150, accuracy: 82.93 },
  { "dataset-size": 180, accuracy: 78.05 },
  { "dataset-size": 225, accuracy: 78.05 },
  { "dataset-size": 300, accuracy: 85.37 },
];

function ResultDiscussion() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-5 lg:pb-20">
      <h2 className="mb-4 text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[0.6]">
        Result Discussion
      </h2>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        className="max-w-[400px] mt-4 lg:max-w-[750px] md:max-w-[500px]"
      >
        <XAxis
          dataKey="dataset-size"
          label={{
            value: "Sample Size",
            position: "insideBottomRight",
            offset: 40,
          }}
        />
        <YAxis domain={[70, 90]} tickFormatter={(value) => `${value}%`} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="accuracy"
          stroke="#ff7300"
          name="Accuracy"
        />
        {/* <Legend verticalAlign="top" height={36}/> */}
      </LineChart>
      <table>
        <thead>
          <tr>
            <th>ParameterS</th>
            <th>Initial</th>
            <th>Best</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Steps</td>
            <td>300</td>
            <td>600</td>
          </tr>
          <tr>
            <td>Temperature gold /score</td>
            <td>0.1</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td>Text max length</td>
            <td>512</td>
            <td>512</td>
          </tr>
          <tr>
            <td>N context</td>
            <td>30</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Learning rate</td>
            <td>1e-5</td>
            <td>1e-5</td>
          </tr>
          <tr>
            <td>Dropout</td>
            <td>0.1</td>
            <td>0.1</td>
          </tr>
        </tbody>
      </table>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        After finetuning the large model on{" "}
        <span className="text-emerald-500 font-bold">300</span> samples with the
        above parameters, the highest accuracy we were able to obtain was{" "}
        <span className="text-emerald-500 font-bold">85.37%</span>
      </p>
      <h3 className="mt-4 mb-4 text-center text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[0.6]">
        Key Insights
      </h3>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        <span className="text-slate-500 font-bold">Context Matters</span>:
        Providing more background information (N_Context) significantly boosted
        model accuracy, highlighting the importance of context for optimal
        performance.
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        <span className="text-slate-500 font-bold">
          Hyperparameter Tweaking
        </span>
        : Lower dropout and learning rates led to consistently better results
        across model sizes. Balanced temperature scores proved optimal, while
        extreme values negatively impacted accuracy. The ideal text length
        varied depending on the dataset size and model. Increasing total steps,
        representing computation time, had inconsistent effects on different
        experiments.
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        <span className="text-slate-500 font-bold">Beyond Higher Values</span>:
        Exceeding certain parameter thresholds, like dropout rate and learning
        rate, didn't always lead to better performance. Identifying the optimal
        balance for these parameters was crucial.
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        <span className="text-slate-500 font-bold">
          Automation for Efficiency and Reliability
        </span>
        : Automated processes, such as data splitting, ensured consistency and
        eliminated errors, enhancing result reliability.
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        <span className="text-slate-500 font-bold">Streamlined Evaluation</span>
        : An automated post-processing approach facilitated extracting
        evaluation metrics from data files, streamlining evaluation and enabling
        rapid performance analysis.
      </p>
    
    </section>
  );
}

export default ResultDiscussion;
