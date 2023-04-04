import CurrentTrade from "src/components/tradeTasks/currentTrade";
import TradePlan from "src/components/tradeTasks/tradePlan";
import Layout from "src/container/layout";

const Home = () => {
  return (
    <Layout>
      <TradePlan/>
      <CurrentTrade />
    </Layout>
  );
};

export default Home;
