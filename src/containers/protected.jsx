import { Navigate } from "react-router-dom";

export function Protected({ children, ...props }) {
  return user ? children : <Navigate to="/login" />;
}
