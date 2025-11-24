"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

function Providers({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        {children}
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
}

export default Providers;
