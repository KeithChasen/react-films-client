import { Outlet } from "react-router-dom";
import { 
    Container,
    CssBaseline
  } from '@mui/material';
import Navigation from "./navigation";


export default function Layout() {
    return (
        <>
            <CssBaseline /> {/* Drops basic margins of body */}
            <Navigation />
            <Container maxWidth="xl">
                <Outlet />
            </Container>
        </>
    );
}