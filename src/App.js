import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import CreateQuiz from "./pages/CreateQuiz";
import EditQuiz from "./pages/EditQuiz";
import Home from "./pages/Home";
import NotFound from "./pages/errors/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quiz/create" element={<CreateQuiz />} />
        <Route exact path="/quiz/edit/:id" element={<EditQuiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
