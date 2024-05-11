import { Helmet } from "react-helmet";
import Swipper from "../../components/Swipper";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>DineDash | Home</title>
            </Helmet>
            <Swipper></Swipper>
        </div>
    );
};

export default Home;