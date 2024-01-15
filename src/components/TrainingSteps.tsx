import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

function AtlasTraining() {
  const bashScript = `#!/bin/bash

# SLURM job settings
#SBATCH --mail-user=abraham.mathew@sjsu.edu
#SBATCH --mail-user=/dev/null
#SBATCH --mail-type=BEGIN,END,FAIL
#SBATCH --job-name=gpuTest_016018990
#SBATCH --output=gpuTest_%j.out
#SBATCH --error=gpuTest_%j.err
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1
#SBATCH --time=48:00:00
##SBATCH --mem-per-cpu=2000
##SBATCH --gres=gpu:p100:1
#SBATCH --partition=gpu

# Load Python and Slurm modules
module load python-3.10.8-gcc-11.2.0-c5b5yhp slurm

# Set up proxy
export http_proxy=http://172.16.1.2:3128
export https_proxy=http://172.16.1.2:3128

# Change to project directory
cd /home/016018990/CMPE259/project/mcqs/atlas

# Activate Python virtual environment
source /home/016018990/CMPE259/project/scripts/atlas-2/bin/activate

# Set up directories and files
DATA_DIR=/scratch/cmpe259-fa23/016018990/sub_dataset
EXPERIMENTS_DIR=/home/016018990/CMPE259/project/mcqs/atlas/experiments
TRAIN_FILE="\${DATA_DIR}/15/train_15.jsonl"
EVAL_FILE="\${DATA_DIR}/15/eval_15.jsonl"
PASSAGES_FILE="\${DATA_DIR}/unified_passages.jsonl"
SAVE_DIR=\${DATA_DIR}/output/
EXPERIMENT_NAME="experiment-train-15"

# Set up training parameters
TRAIN_STEPS=30
PRECISION="bf16"
port=$(shuf -i 15000-16000 -n 1)

# Run training script
python3 /home/016018990/CMPE259/project/mcqs/atlas/train.py \\
  --shuffle \\
  --train_retriever \\
  --gold_score_mode ppmean \\
  --use_gradient_checkpoint_reader \\
  --use_gradient_checkpoint_retriever \\
  --precision \${PRECISION} \\
  --shard_optim \\
  --shard_grads \\
  --temperature_gold 0.1 \\
  --temperature_score 0.1 \\
  --refresh_index -1 \\
  --target_maxlength 16 \\
  --reader_model_type google/t5-base-lm-adapt \\
  --dropout 0.1 \\
  --lr 5e-5 \\
  --lr_retriever 1e-5 \\
  --scheduler linear \\
  --weight_decay 0.01 \\
  --text_maxlength 512 \\
  --model_path "/home/016018990/atlas/atlas_data/models/atlas/base/" \\
  --train_data \${TRAIN_FILE} \\
  --eval_data \${EVAL_FILE} \\
  --per_gpu_batch_size 1 \\
  --n_context 30 \\
  --retriever_n_context 30 \\
  --name \${EXPERIMENT_NAME} \\
  --checkpoint_dir \${SAVE_DIR} \\
  --eval_freq 30 \\
  --log_freq 4 \\
  --total_steps 2000 \\
  --warmup_steps 50 \\
  --save_freq \${TRAIN_STEPS} \\
  --main_port $port \\
  --write_results \\
  --task multiple_choice \\
  --multiple_choice_train_permutations all \\
  --multiple_choice_eval_permutations cyclic \\
  --index_mode flat \\
  --passages "\${PASSAGES_FILE}" \\
  --query_side_retriever_training \\
  --save_index_path \${SAVE_DIR}/\${EXPERIMENT_NAME}/saved_index \\
  --save_index_n_shards 1
`;
  const gitCommand = "git clone https://github.com/facebookresearch/atlas.git";

  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-5 lg:pb-20">
      <h2 className="mb-4 text-center text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[0.6]">
        Atlas Model Training
      </h2>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        The Atlas model was cloned into the HPC environment and finetuned on the
        dataset Prepared
      </p>
      <SyntaxHighlighter
        language="bash"
        style={okaidia}
        className="max-w-[400px] mt-4 lg:max-w-[750px]"
      >
        {gitCommand}
      </SyntaxHighlighter>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        After the datasets are prepared, the model was finetuned on the dataset
        varying the hyperparameters such as
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        1. Total Steps
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        2. Temperature
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        3. Text MaxLength
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        4. Dropout
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        5. N-Context
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        6. Learning Rate
      </p>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        Additionally, different models were also experimented with including
        base and large bert models with different sample sizes ranging from 15
        to 300 as the dataset allowed it.
      </p>
      <SyntaxHighlighter
        language="bash"
        style={okaidia}
        className="max-w-[400px] mt-4 lg:max-w-[750px]"
      >
        {bashScript}
      </SyntaxHighlighter>
    </section>
  );
}

export default AtlasTraining;
