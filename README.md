# Vehicle Rental Business Prototype

Este es un prototipo de una página web para un negocio de renta de vehículos. El objetivo de este proyecto es mostrar un ejemplo de cómo podría funcionar una plataforma de alquiler de automóviles en línea, utilizando tecnologías modernas para la creación de una aplicación web robusta y escalable.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para la construcción de aplicaciones web del lado del servidor y del cliente.
- **Prisma**: ORM que facilita la gestión de bases de datos en Node.js y TypeScript.
- **Uploadthing**: Servicio de gestión y subida de archivos.
- **Clerk Authentication**: Sistema de autenticación de usuarios que facilita la integración de inicio de sesión y registro.
- **Stripe**: Plataforma de pago para procesar transacciones de manera segura.

## Configuración del Entorno

Para que el proyecto funcione correctamente, necesitas crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=sk_
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Prisma env variables
DATABASE_URL=""

# Uploadthing env variables
UPLOADTHING_SECRET=''
UPLOADTHING_APP_ID=''

# Stripe env variables
STRIPE_API_KEY=''

# URL del frontend
NEXT_PUBLIC_FRONTED_STORE_URL='http://localhost:3000'

NEXT_PUBLIC_ADMIN=''
```
