import PageRoutes from "./routes/PageRoutes";
import "../src/assets/fonts.css"
import AuthContext from "./contexts/Auth";
export default function App() {

    return (
        <AuthContext>
            <PageRoutes />
        </AuthContext>
    )

}
