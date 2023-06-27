"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function withAuth(Component: any) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const user = typeof window !== "undefined" && localStorage.getItem("user");

    useEffect(() => {
      const userIsAuthenticated = user !== null;
      if (!userIsAuthenticated) {
        router.push("/login");
      }
    }, [user, router]);

    return <Component {...props} />;
  };
}
