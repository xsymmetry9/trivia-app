import App from "./App";
import {loadTriviaQuestions} from "./loader";
import Game from "./pages/Game";
import Questions from "./pages/Questions";

const routes = [
    {
        path: "/",
        element: <App/>,
        loader: loadTriviaQuestions,
        children:[
            {index: true, element: <Game />},
            {
                path: "questions",
                element: <Questions/>
            }
        ]
    }
]

export default routes;