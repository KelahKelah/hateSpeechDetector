import { TweetList, DetectedTweetList } from "./pages";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { Layout } from "./components";

const Approute = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Layout />} >
          <Route path={"/"} element={<TweetList />} />
          <Route path={"/detected"} element={<DetectedTweetList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Approute;