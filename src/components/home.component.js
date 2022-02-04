import MainView from "./mainView.component";
import Sidebar from "./sidebar.component";

function Home() {
  return (
    <div className="container">
      <div className="app">
        <Sidebar />
        <MainView />
      </div>
    </div>
  );
}

export default Home;
