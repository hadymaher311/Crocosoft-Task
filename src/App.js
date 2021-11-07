import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import CreateQuiz from "./pages/CreateQuiz";
import EditQuiz from "./pages/EditQuiz";
import Home from "./pages/Home";
import ShowQuiz from "./pages/ShowQuiz";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quiz/create" element={<CreateQuiz />} />
        <Route exact path="/quiz/edit/:id" element={<EditQuiz />} />
        <Route exact path="/quiz/show/:id" element={<ShowQuiz />} />
      </Routes>
    </Layout>
  );
}

export default App;
