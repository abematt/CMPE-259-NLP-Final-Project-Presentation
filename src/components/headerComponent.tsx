function HeaderComponent() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-5 lg:pb-20">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        {" "}
        Finetuning Atlas Model on Custom Dataset for MCQ Answering
      </h1>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        This project aimed at taking the pretrained Atlas Model published by
        Meta and finetuning it on a custom dataset. The custom dataset was
        Chapters 4,5,6 in a question answer format. The answers were in the form
        of multiple choice questions. This was fed into models of varying
        complexity for finetuning subject to hyperparameter tuning as well.
      </p>
    </section>
  );
}

export default HeaderComponent;
