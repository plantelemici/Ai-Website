"use client";

import React, { useState, useEffect } from 'react';
import { ConvexProvider, ConvexReactClient } from "convex/react";

const ConvexClientProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false);
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    if (!convexUrl) {
        if (!isClient) {
            return null;
        }
        
        return (
            <div style={{ padding: '20px', color: 'red' }}>
                <h2>Configuration Error</h2>
                <p>NEXT_PUBLIC_CONVEX_URL is not defined. Please ensure your .env.local file contains:</p>
                <pre>NEXT_PUBLIC_CONVEX_URL=your_convex_url_here</pre>
                <p>Run `npx convex dev` to get your local development URL.</p>
            </div>
        );
    }

    const convex = new ConvexReactClient(convexUrl);
    
    return (
        <ConvexProvider client={convex}>
            {children}
        </ConvexProvider>
    );
};

export default ConvexClientProvider;