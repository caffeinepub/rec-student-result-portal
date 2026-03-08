import { Toaster } from "@/components/ui/sonner";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import ExaminationPage from "./pages/ExaminationPage";
import LoginPage from "./pages/LoginPage";
import PlacementsPage from "./pages/PlacementsPage";

// ── Auth Context ─────────────────────────────────────────────────────────────
interface AuthContext {
  sessionToken: string | null;
  setSessionToken: (token: string | null) => void;
}

export const AuthCtx = createContext<AuthContext>({
  sessionToken: null,
  setSessionToken: () => {},
});

export function useAuth() {
  return useContext(AuthCtx);
}

// ── Root Layout ──────────────────────────────────────────────────────────────
function RootLayout() {
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
}

// ── Route Components ─────────────────────────────────────────────────────────
function LoginRoute() {
  const { sessionToken, setSessionToken } = useAuth();
  if (sessionToken) {
    return <Navigate to="/dashboard" />;
  }
  return <LoginPage onLogin={(t) => setSessionToken(t)} />;
}

function DashboardRoute() {
  const { sessionToken, setSessionToken } = useAuth();
  if (!sessionToken) {
    return <Navigate to="/" />;
  }
  return (
    <DashboardPage
      sessionToken={sessionToken}
      onLogout={() => setSessionToken(null)}
    />
  );
}

// ── Route Definitions ────────────────────────────────────────────────────────
const rootRoute = createRootRouteWithContext<AuthContext>()({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LoginRoute,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardRoute,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const departmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/departments",
  component: DepartmentsPage,
});

const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: AcademicsPage,
});

const placementsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/placements",
  component: PlacementsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const examinationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/examination",
  component: ExaminationPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  aboutRoute,
  departmentsRoute,
  academicsRoute,
  placementsRoute,
  contactRoute,
  examinationRoute,
]);

const router = createRouter({
  routeTree,
  context: {
    sessionToken: null,
    setSessionToken: () => {},
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const [sessionToken, setSessionTokenState] = useState<string | null>(() =>
    sessionStorage.getItem("rec_session_token"),
  );

  const setSessionToken = useCallback((token: string | null) => {
    setSessionTokenState(token);
    if (token) {
      sessionStorage.setItem("rec_session_token", token);
    } else {
      sessionStorage.removeItem("rec_session_token");
    }
  }, []);

  const authContext = useMemo(
    () => ({ sessionToken, setSessionToken }),
    [sessionToken, setSessionToken],
  );

  return (
    <AuthCtx.Provider value={authContext}>
      <RouterProvider router={router} context={authContext} />
    </AuthCtx.Provider>
  );
}
