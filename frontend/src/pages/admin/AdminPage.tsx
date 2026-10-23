const AdminPage = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      <div className="col-span-4 p-5 ">
        <h3>Welcome Back Abhishek</h3>
        <p>There is the latest update for the last 7 days , check now</p>
      </div>
      <div className="border p-5 bg-white">
        <h6>Patient</h6>
        <p className="font-bold text-5xl ">128</p>
      </div>
      <div className="border p-5 bg-white">
        <h6>Nurses</h6>
        <p className="font-bold text-5xl ">46</p>
      </div>
      <div className="border p-5 bg-white">
        <h6>Bookings</h6>
        <p className="font-bold text-5xl ">32</p>
      </div>
      <div className="border p-5 bg-white">
        <h6>Pending</h6>
        <p className="font-bold text-5xl ">8</p>
      </div>
    </div>
  );
};
export default AdminPage;
