"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from 'next-themes'

const DynamicMap = dynamic(() => import("./DynamicMap"), { ssr: false });

const Map: React.FC = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <DynamicMap />
            <div>
                <h1>El tema actual es: {theme}</h1>
                <button onClick={() => setTheme('light')}>Modo claro</button>
                <button onClick={() => setTheme('dark')}>Modo oscuro</button>
            </div>
        </div>
    );
};

export default Map;
