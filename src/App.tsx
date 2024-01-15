import "./App.css";
import HeaderComponent from "./components/headerComponent";
import MainList from "./components/mainList";
import DatasetPrep from "./components/datasetPrep";
import AtlasTraining from "./components/TrainingSteps";
import ResultDiscussion from "./components/resultDiscussion";

function App() {
  return (
    <>
      <HeaderComponent />
      <MainList />
      <DatasetPrep/>
      <AtlasTraining/>
      <ResultDiscussion/>
    </>
  );
}

export default App;
