koori — Modern Farm Marketplace

koori is a modern, scalable web platform designed for managing agricultural products.  
The project uses a modular structure where every page has its own HTML, CSS, and JavaScript files, with PHP integration and a large database planned for future expansion.

Pages Included (each page has its own HTML + CSS + JS + optional PHP):

- Home
- Products
- Categories
- Add Item
- Cart
- Contact
- Login

Project Structure:

koori/
│── home.html
│── home.css
│── home.js
│── home.php (future)
│
│── products.html
│── products.css
│── products.js
│── products.php (future)
│
│── categories.html
│── categories.css
│── categories.js
│── categories.php (future)
│
│── add-item.html
│── add-item.css
│── add-item.js
│── add-item.php (future)
│
│── cart.html
│── cart.css
│── cart.js
│── cart.php (future)
│
│── contact.html
│── contact.css
│── contact.js
│── contact.php (future)
│
│── login.html
│── login.css
│── login.js
│── login.php (future)
│
└── assets/
     ├── images/
     └── icons/

Backend (PHP + Database):

- PHP will be used to handle form submissions, authentication, product management, and server-side logic.
- A large MySQL database will store:
  - Users
  - Products
  - Categories
  - Cart items
  - Messages (Contact form)
  - Images and metadata

Database Structure (planned):

Tables:
- users (id, name, email, password, role)
- products (id, name, price, category_id, image, description)
- categories (id, name)
- cart (id, user_id, product_id, quantity)
- messages (id, name, email, message)
- images (id, product_id, path)

How It Works:

- Each page loads its own CSS and JS for clean separation.
- PHP files will handle backend logic.
- The database will store all dynamic content.
- LocalStorage is used temporarily for the cart until PHP integration is complete.

Tech Stack:

- HTML5
- CSS3
- JavaScript
- PHP
- MySQL Database
- LocalStorage
- Responsive Design

How to Run:

1. Download or clone the repository.
2. Open home.html for the front-end preview.
3. For PHP features, move the project to XAMPP/htdocs.
4. Start Apache and MySQL.
5. Import the database file (koori.sql) when available.

Future Improvements:

- Full authentication system (PHP + MySQL)
- Admin dashboard
- Product image upload
- Search and filters
- Real-time offers
- API integration

Author:

Created by Rayen.

License:

MIT License — free to use and modify.
