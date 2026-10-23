import Sidebar from "@/components/admin/Sidebar";
import AdminPage from "../pages/admin/AdminPage";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <AdminPage />
      </div>
    </div>
  );
};

export default AdminLayout;
