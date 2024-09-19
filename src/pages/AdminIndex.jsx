import React, { useEffect } from "react";
import {
  Navigate,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function AdminIndex() {
  const isLogin = true;
  const navigate = useNavigate();

  // Lấy ra location của trình duyệt
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    // Cuộn về đầu trang
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: 20,
          position: "fixed",
          top: 0,
          backgroundColor: "#fff",
        }}
      >
        <NavLink end to="/admin">
          Dashboard
        </NavLink>
        <NavLink to="/admin/manager-user">Manager User</NavLink>
        <NavLink to="/admin/manager-product">Manager Product</NavLink>
        <button onClick={() => navigate(-1)}>Trang trước</button>
        <button onClick={() => navigate(1)}>Trang sau</button>
      </nav>

      {/* {isLogin ? <Outlet /> : navigate("/login")} */}
      {isLogin ? <Outlet /> : <Navigate to="/login" />}

      <nav>Footer</nav>
    </div>
  );
}
