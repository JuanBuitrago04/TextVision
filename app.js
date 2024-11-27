// URL de la API y tu token
const apiUrl = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";
const token = "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"; 

// Función para generar la imagen
async function generateImage(text) {
    const data = { inputs: text };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        // Leer la respuesta como blob
        const blob = await response.blob();
        console.log(blob)
        const imageUrl = URL.createObjectURL(blob);

        // Mostrar la imagen en el HTML
        const imageContainer = document.getElementById("Image");
        imageContainer.innerHTML = ""; // Limpiar resultados anteriores
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageContainer.appendChild(imageElement);

    } catch (error) {
        console.error("Error durante la solicitud:", error.message);
    }
}

// Configurar el botón
document.getElementById("generateButton").addEventListener("click", function () {
    const text = document.getElementById("message").value.trim();
    if (text) {
        generateImage(text);
    } else {
        alert("Por favor, escribe algo.");
    }
});
