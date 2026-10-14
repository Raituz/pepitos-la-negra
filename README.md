# 🥖 Pepitos La Negra - Tienda Virtual & App de Gestión (PWA)

Demo interactiva y funcional diseñada para presentar al dueño de **Pepitos La Negra**, optimizada para cerrar la venta demostrando una solución completa de comercio electrónico y logística de comida rápida.

---

## 🌟 Características Principales

### 1. App para Clientes (PWA Mobile-First)
- **Identidad Visual Premium:** Paleta de colores extraída directamente del logo oficial (Negro profundo `#0F0E0C`, Ámbar oro `#F59E0B`, Naranja fuego `#EA580C`).
- **Catálogo de Especialidades:**
  1. **Pepito La Negra (Especial Mixto):** 30 cm de pan baguette artesanal, carne, pollo marinada, tocineta, queso de mano, papitas al hilo y salsas. Incluye selector interactivo de salsas y extras con precios dinámicos.
  2. **Hamburguesa Especial La Negra:** Doble smash angus, pollo crispy, doble cheddar y salsas.
  3. **Marquesa de Chocolate Tentación:** Capas de galleta María, pudín belga, Oreo y pirulines.
- **Carrito Flotante:** Contador en tiempo real, desglose de salsas, extras y notas para la cocina.
- **Geolocalización Automática:** Botón **"📍 Obtener mi ubicación actual"** usando la API `navigator.geolocation` para obtener coordenadas exactas y sincronizar mapa.
- **Pasarela de Pago Móvil Exclusiva:**
  - Banco: **Provincial (0108)**
  - Cédula: **32.705.849**
  - Teléfono: **0412-0424336**
  - Nombre: **Lismaury Torres**
  - Botones de copiado de 1 clic para cada campo.
  - Validación de los últimos 4 dígitos de la referencia.
- **Comprobante Digital Térmico:** Modal descargable con formato de ticket fiscal/digital oficial.
- **Línea de Tiempo en Vivo (4 Estados):**
  1. 🟡 Por pagar
  2. 🟢 Pago completado y verificado (automático con Banco Provincial)
  3. 🔵 En preparación para el delivery
  4. 🟣 Entregado al cliente
- **Chat Directo del Pedido:** Mensajería en tiempo real con el restaurante y el repartidor.

---

### 2. Panel de Administración y Delivery (Uso Interno)
- **Verificación Automática de SMS Provincial:**
  - Simula el servicio en segundo plano que escucha SMS del Banco Provincial.
  - Al coincidir la referencia y monto, pasa a **Estado 2** automáticamente emitiendo alerta sonora de caja registradora y notificación push.
  - Botón de demostración rápida: **"🔔 Simular SMS Provincial"**.
- **Gestión de Pedidos en 3 Pestañas:**
  - **Activos:** Estados 2 (Verificados) y 3 (En preparación).
  - **Entregados:** Estado 4 (Historial con evidencias).
  - **Todos:** Historial completo con buscador por referencia o cliente.
- **Módulo de Repartidor:**
  - Pedidos asignados en ruta.
  - Enlaces directos a Google Maps / Waze y llamada al cliente.
  - Botón **"📸 Marcar como Entregado"** con toma o subida de foto de evidencia en sitio.

---

## 🚀 Cómo Ejecutar Localmente

1. Abre la carpeta `D:\pepitos-la-negra-web`.
2. Haz doble clic en el archivo:
   ```cmd
   Abrir Web Pepitos La Negra.bat
   ```
   o abre `index.html` directamente en tu navegador (Chrome, Edge, Opera GX, Safari).

---

## 🌐 Despliegue en GitHub Pages

El proyecto se encuentra alojado en tu GitHub oficial:
- **Repositorio:** [https://github.com/Raituz/pepitos-la-negra](https://github.com/Raituz/pepitos-la-negra)
- **URL Online para Clientes:** [https://raituz.github.io/pepitos-la-negra/](https://raituz.github.io/pepitos-la-negra/)

---
*Desarrollado para Pepitos La Negra • Barquisimeto / Venezuela*
