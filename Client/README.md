# *Tienda online - Front-end*

<p align="left">
  <img height="100" src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/97/221803697/logo-2020110321053553500.png" />
</p>

## *Objetivos del Proyecto*

- Construir una tienda online de diversos productos, diferenciados por categorias y con la posibilidad de buscar por nombre de producto.
- Garantizar una buena experiencia de usuario a traves de una navegación intuitiva.
- Aplicar buenas practicas y modularización haciendo flexible el código.
- Que sea totalmente responsive.
- Formato PC, Tablet y mobile.
---
### *Tecnologías implementadas:*
- <strong>Frontend</strong>
  - #### HTML5, CSS3, JavaScript, Jquery, Bootstrap
- <strong>Backend</strong>
  - #### NodeJs, TypeScript, Express, MySql
---
## Link Deploy:
- <a href="https://ventasbsale.vercel.app">Tienda Virtual</a>
---
## *Puesta en marcha:*
- Ejecutar archivo "index.html" de la carpeta "client".

---
## Endpoints
  ### GET - Obtener todos los productos.
  Retorna todos los productos existentes en el sistema y devuelve un arreglo con los resultados. En el caso de no encontrar ningún producto, el backend retorna un mensaje de error y el Fronten muestra el mensaje en pantalla de "Sin Productos".
  
  - #### GET /v1/products.
    - Parámetros:
      * Ninguno.
      
    - Respuesta de <strong>Éxito</strong>: (200: OK)
      ```
        [
          {
            "id_prod": number
            "product_name": string
            "url_image": string
            "id_cat": number
            "cat_name": string
            "price": number
          }
        ]
      ```
     - Respuesta de <strong>Fracaso</strong>: (404: Not Found)
       
        ```
          {
            error_message: "NOT_FOUND_PRODUCT" 
          }
        ```

### GET - Obtener un producto por id.
  Retorna el producto existente en el sistema y lo devuelve. En el caso de no encontrar ningún producto, el backend retorna un mensaje de error y el Fronten muestra el mensaje en pantalla de "Sin Productos".
  
  - #### GET /v1/products/:id.
    - Parámetros:
      * id: id del producto.
    - Respuesta de parámetro igual a "null": (400: Bad Request)
      ```
        {
          error_message: "NOT_ALLOWED_NULL_ID"
        }
      ```
    - Respuesta de <strong>Éxito</strong>: (200: OK)
      ```
        [
          {
            "id_prod": number
            "product_name": string
            "url_image": string
            "id_cat": number
            "cat_name": string
            "price": number
          }
        ] 
      ```
     - Respuesta de <strong>Fracaso</strong>: (404: Not Found)
       
        ```
          {
            error_message: "NOT_FOUND_PRODUCT" 
          }
        ```
### GET - Obtener todas las categorias.
  Retorna todos las categorias existentes en el sistema y devuelve un arreglo con los resultados. En el caso de no encontrar categorias, el backend retorna un mensaje de error.
  
  - #### GET /v1/category.
    - Parámetros:
      * Ninguno.
      
    - Respuesta de <strong>Éxito</strong>: (200: OK)
      ```
        [
          {
            "id": number,
            "name": string 
          }
        ]
      ```
     - Respuesta de <strong>Fracaso</strong>: (404: Not Found)
       
        ```
          {
            Error_message: "CATEGORIES_NOT_FOUND" 
          }
        ```

### GET - Obtener una categoria por id.
  Retorna la categoria existente en el sistema y lo devuelve. En el caso de no encotrar la categoria, el backend retorna un mensaje de error.
  
  - #### GET /v1/category/:id.
    - Parámetros:
      * id: id del producto.
    - Respuesta de parámetro igual a "null": (400: Bad Request)
      ```
        {
          error_message: "NOT_ALLOWED_NULL_ID"
        }
      ```
    - Respuesta de <strong>Éxito</strong>: (200: OK)
      ```
        [
          {
            "id": number,
            "name": string 
          }
        ]
      ```
     - Respuesta de <strong>Fracaso</strong>: (404: Not Found)
       
        ```
         {
            error_message: "CATEGORY_NOT_FOUND"
          }
        ```
### POST - Buscar productos que coincidan con el nombre buscado.
  Retorna los productos existente en el sistema que coincidan con el valor introducido por el usuario. Si no se pasa un valor por body, devuelve todos los productos del sistema. En el caso de no encontrar el producto, el backend retorna un mensaje de error.
  
  - #### POST /v1/search.
    - Parámetros:
      * Body: 
        ```
         {
          "nameProduct": string
         }
        ``` 
    - Respuesta de parámetro igual a "null": (200: OK)
      ```
        [
          {
            "id_prod": number
            "product_name": string
            "url_image": string
            "id_cat": number
            "cat_name": string
            "price": number
          }
        ] 
      ```
    - Respuesta de <strong>Éxito</strong>: (200: OK)
      ```
        [
          {
            "id_prod": number
            "product_name": string
            "url_image": string
            "id_cat": number
            "cat_name": string
            "price": number
          }
        ] 
      ```
     - Respuesta de <strong>Fracaso</strong>: (404: Not Found)
       
        ```
         {
           "error_message": "NOT_FOUND_PRODUCT"
         }
        ```
     - Respuesta de <strong>Error de server</strong>: (500: Internal Server Error)
       
        ```
         {
           "error_message": "Error_server"
         }
        ```

### POST - Filtrar productos que coincidan con la categoria seleccionada.
  Retorna los productos existente en el sistema que coincidan con el valor id pasado por body. Si no se pasa un valor por body, retorna un mensaje error. En el caso de no encontrar el producto, el backend retorna un mensaje de error.
  
  - #### POST /v1/filterProduct.
    - Parámetros:
      * Body: 
        ```
         {
          "idCategory": string
         }
        ``` 
    - Respuesta de parámetro igual a "null": (400: Bad Request)
      ```
        {
          "error_messageNull": "ID_CATEGORY_NULL" 
        }
      ```
    - Respuesta de <strong>Éxito</strong>: (200: OK)
      ```
        [
          {
            "id_prod": number
            "product_name": string
            "url_image": string
            "id_cat": number
            "cat_name": string
            "price": number
          }
        ] 
      ```
     - Respuesta de <strong>Fracaso</strong>: (404: Not Found)
       
        ```
         {
            "error_message": "NOT_FOUND_PRODUCTS_CATEGORY" 
          }
        ```
      - Respuesta de <strong>Error de server</strong>: (500: Internal Server Error)
        
        ```
          {
            "Error_message": "Error_server"
          }
        ```