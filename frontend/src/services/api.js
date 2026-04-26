const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function getHealth() {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error("Error al conectar con el servidor");
    }
    return response.json();
}