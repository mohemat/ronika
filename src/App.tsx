import {BrowserRouter as Router} from "react-router-dom";
import * as React from "react";
import {Home} from "@/features/home";
import {QueryClient, QueryClientProvider,} from "@tanstack/react-query";
import {queryConfig} from '@/lib/react-query';
import {Toaster} from "sonner";


function App() {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: queryConfig,
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Toaster dir={'rtl'} position={'top-center'} richColors/>
                <Home/>
            </Router>
        </QueryClientProvider>
    )
}

export default App
