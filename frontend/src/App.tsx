import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";

const App = () => {
  const admin = true;
  const publicUser = false;

  if (admin) {
    return <AdminLayout />;
  }
  if (publicUser) {
    return <PublicLayout />;
  }
};

export default App;
