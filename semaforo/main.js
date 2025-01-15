import { app, BrowserWindow } from "electron";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Define __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 766,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false, // Desactiva para pruebas locales
    },
  });

  // Usa __dirname para cargar el archivo index.html
  mainWindow.loadFile(join(__dirname, "dist", "index.html"));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
