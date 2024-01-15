function MainList() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-5 lg:pb-20">
      <h2 className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[0.6]">
        Overview of Steps Taken
      </h2>
        {/* <Separator className="bg-slate-400 max-w-[750px] mt-4"/> */}
      <ol className="mt-4 lg:max-w-[750px] md:max-w-[750px] max-w-[500px] text-left text-lg text-muted-foreground list-decimal">
        <li className="word-wrap">Prepared Dataset consisting of 400 questions from Chapters 2,3,4 of James et al. "An Introduction to Statistical Learning with Applications in Python"</li>
        <li>Dataset split into train-validation-test as 75%-10%-15%</li>
        <li>Train set further split into different sample sizes</li>
        <li>Base and Large models experimentally fine tuned on different sample sizes</li>
        <li>Hyperparameters such as total_steps,temperature
            ,text_maxlength,dropout,n_context,learning rate 
            also experimentally tested</li>
        <li>Best Accuracy at 85.37% on Large Model</li>
      </ol>
    </section>
  );
}

export default MainList;
