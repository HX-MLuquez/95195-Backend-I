# APP AGENDA

- Seguir buenas prácticas
- Convención 
- Estructura de carpetas y archivos

# Semana 3: Programación Backend Avanzada

## ESM - Arquitectura de trabajo - FS PROMISES (async/await)


```bash
-> ProductManager (o ProductDao - Conectar con la DB) 
          -> ProductService (o ProductProvider - Lógica)
                   -> ProductController (o ProductHandler - Controlador que maneja REQ -> RES)
                            -> ProductRouter (rutas - url + método + función controladora)
```

1. Inicio Package.json
```bash
npm init -y
```

2. Instalación de dependencias
```bash
npm install express
```

3. Armar mi estructura de carpetas y archivos
```bash