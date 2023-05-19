"use client";
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
    // Crear el estado del modo usando useState
    const [mode, setMode] = useState("light");

    // Crear una función para cambiar el modo al hacer clic en el botón
    const toggleMode = () => {
        // Si el modo es claro, cambiarlo a oscuro y viceversa
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };

    // Usar useEffect para modificar las variables CSS cuando el estado cambia
    useEffect(() => {
        // Obtener el elemento documentElement (la etiqueta html)
        const root = document.documentElement;

        // Si el modo es oscuro, cambiar las variables CSS a los valores oscuros
        if (mode === "dark") {
            root.style.setProperty("--foreground-rgb", "255, 255, 255");
            root.style.setProperty("--background-start-rgb", "0, 0, 0");
            root.style.setProperty("--background-end-rgb", "0, 0, 0");
            root.style.setProperty("--primary-glow", "radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))");
            root.style.setProperty("--secondary-glow", "linear-gradient(to bottom right, rgba(1, 65, 255, 0), rgba(1, 65, 255, 0), rgba(1, 65, 255, 0.3))");
            root.style.setProperty("--tile-start-rgb", "2, 13, 46");
            root.style.setProperty("--tile-end-rgb", "2, 5, 19");
            root.style.setProperty("--tile-border", "conic-gradient(#ffffff80,#ffffff40,#ffffff30,#ffffff20,#ffffff10,#ffffff10,#ffffff80)");
            root.style.setProperty("--callout-rgb", "8, 16, 32");
            root.style.setProperty("--callout-border-rgb", "83, 86, 87");
            root.style.setProperty("--card-rgb", "75, 80, 83");
            root.style.setProperty("--card-border-rgb", "24, 27, 28");
        } else {
            // Si el modo es claro, cambiar las variables CSS a los valores claros
            root.style.setProperty("--foreground-rgb", "0, 0, 0");
            root.style.setProperty("--background-start-rgb", "214, 219, 220");
            root.style.setProperty("--background-end-rgb", "255, 255, 255");
            root.style.setProperty("--primary-glow", "conic-gradient(from 180deg at 50% 50%, #16abff33 0deg,#0885ff33 55deg,#54d6ff33 120deg,#0071ff33 160deg,#00000000)");
            root.style.setProperty("--secondary-glow", "radial-gradient(rgba(255 ,255 ,255 ,1), rgba(255 ,255 ,255 ,0))");
            root.style.setProperty("--tile-start-rgb", "239 ,245 ,249 ");
            root.style.setProperty("--tile-end-rgb", "228 ,232 ,233 ");
            root.style.setProperty("--tile-border", "conic-gradient(#00000080,#00000040,#00000030,#00000020,#00000010,#00000010,#00000080)");
            root.style.setProperty("--callout-rgb", "238 ,240 ,241 ");
            root.style.setProperty("--callout-border-rgb", "172 ,175 ,176 ");
            root.style.setProperty("--card-rgb", "180 ,185 ,188 ");
            root.style.setProperty("--card-border-rgb", "131 ,134 ,135 ");
        }

        // Guardar la preferencia del usuario en el localStorage
        localStorage.setItem("theme-mode", mode);

        // Agregar una clase al body según el modo para facilitar la selección de otros elementos
        document.body.className = mode;

        // Mostrar un mensaje en la consola con el modo actual
        console.log(`Theme mode: ${mode}`);

        // Pasar una lista vacía como segundo argumento de useEffect para que solo se ejecute cuando cambie el estado del modo
    }, [mode]);

    // Usar useEffect para obtener la preferencia del usuario del localStorage o del sistema al montar el componente
    useEffect(() => {
        // Obtener la preferencia del usuario del localStorage si existe
        const storedMode = localStorage.getItem("theme-mode");

        // Si hay una preferencia guardada en el localStorage
        if (storedMode) {
            // Establecer el estado del modo con esa preferencia
            setMode(storedMode);
        } else {
            // Si no hay una preferencia guardada en el localStorage
            // Obtener la preferencia del sistema usando matchMedia
            const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

            // Establecer el estado del modo con la preferencia del sistema
            setMode(systemMode);
        }

        // Pasar una lista vacía como segundo argumento de useEffect para que solo se ejecute al montar el componente
    }, []);

    return (
        <div className="theme-toggle">
            <button onClick={toggleMode}>
                {mode === "light" ? (
                    <>
                        🌙 Cambiar a modo oscuro
                    </>
                ) : (
                    <>
                        🌞 Cambiar a modo claro
                    </>
                )}
            </button>
        </div>
    );
};

export default ThemeToggle;
