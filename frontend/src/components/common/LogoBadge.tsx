const LogoBadge = () => {
  const admin = true;
  return (
    <div className="flex items-center">
      <img src="/logo.png" className="w-12" />
      <div>
        <h5 className="font-bold">
          Home<span className="text-royal">Care</span>
        </h5>
        <p className="bg-gradient-to-r from-forest via-royal to-slate-800 bg-clip-text text-transparent ">
          For {admin ? "Admin" : "Nursing Care"}
        </p>
      </div>
    </div>
  );
};

export default LogoBadge;
