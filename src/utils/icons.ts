/**
 * Obtiene el ícono de Iconify correspondiente a una tecnología
 * @param tech - Nombre de la tecnología
 * @returns String del ícono en formato "collection:icon"
 */
export const getTechIcon = (tech: string): string => {
  const icons: Record<string, string> = {
    // Frontend
    React: "simple-icons:react",
    "Next.js": "simple-icons:nextdotjs",
    Astro: "simple-icons:astro",
    Tailwind: "simple-icons:tailwindcss",
    "Tailwind CSS": "simple-icons:tailwindcss",
    TypeScript: "simple-icons:typescript",
    Flutter: "simple-icons:flutter",
    HTML: "simple-icons:html5",
    CSS: "simple-icons:css3",
    JavaScript: "simple-icons:javascript",
    Javascript: "simple-icons:javascript",

    // Backend
    Python: "simple-icons:python",
    "Node.js": "simple-icons:nodedotjs",
    PHP: "simple-icons:php",
    "REST APIs": "mdi:api",

    // Databases
    "SQL Server": "simple-icons:microsoftsqlserver",
    PostgreSQL: "simple-icons:postgresql",
    MongoDB: "simple-icons:mongodb",
    MySQL: "simple-icons:mysql",
    SQL: "simple-icons:mysql",

    // Tools & Others
    SAP: "simple-icons:sap",
    "SAP GUI": "simple-icons:sap",
    Git: "simple-icons:git",
    Docker: "simple-icons:docker",
    Linux: "simple-icons:linux",
    pandas: "simple-icons:pandas",
    Pandas: "simple-icons:pandas",
    Firebase: "simple-icons:firebase",
    "Windows COM": "mdi:microsoft-windows",
    localStorage: "mdi:database",
  };

  return icons[tech] || "mdi:code-tags";
};
