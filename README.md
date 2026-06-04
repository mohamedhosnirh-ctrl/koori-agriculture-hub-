<div align="center">

# 🌿 koori

### Modern Farm Marketplace

A clean, modular web platform for managing and browsing agricultural products — built with a scalable file-per-page architecture and PHP/MySQL backend integration planned.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Pages](#-pages)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [Getting Started](#-getting-started)
- [Tech Stack](#-tech-stack)
- [Roadmap](#-roadmap)
- [License](#-license)

---

## Overview

**koori** is a modern, scalable web marketplace designed for agricultural products. Each page follows a clean separation of concerns — its own HTML, CSS, and JavaScript — with PHP and MySQL integration coming in future releases.

---

## Pages

| Page | Description |
|------|-------------|
| 🏠 Home | Landing page and featured products |
| 🛒 Products | Browse all available items |
| 📂 Categories | Filter products by category |
| ➕ Add Item | Submit a new product listing |
| 🛍️ Cart | View and manage selected items |
| 📬 Contact | Send a message or inquiry |
| 🔐 Login | User authentication |

---

## Project Structure

```
koori/
├── home.html / home.css / home.js / home.php
├── products.html / products.css / products.js / products.php
├── categories.html / categories.css / categories.js / categories.php
├── add-item.html / add-item.css / add-item.js / add-item.php
├── cart.html / cart.css / cart.js / cart.php
├── contact.html / contact.css / contact.js / contact.php
├── login.html / login.css / login.js / login.php
└── assets/
    ├── images/
    └── icons/
```

> Each page is fully self-contained with its own HTML, CSS, and JS file. PHP files handle backend logic (planned).

---

## Database Schema

> MySQL integration is planned. The following tables will be used:

```sql
users       (id, name, email, password, role)
products    (id, name, price, category_id, image, description)
categories  (id, name)
cart        (id, user_id, product_id, quantity)
messages    (id, name, email, message)
images      (id, product_id, path)
```

---

## Getting Started

### Frontend Preview

```bash
# Clone the repository
git clone https://github.com/your-username/koori.git

# Open in your browser
open koori/home.html
```

### Full Stack (PHP + MySQL)

1. Move the project folder into your XAMPP `htdocs/` directory
2. Start **Apache** and **MySQL** from the XAMPP control panel
3. Import `koori.sql` into phpMyAdmin *(available in a future release)*
4. Visit `http://localhost/koori/home.html`

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 |
| Logic | JavaScript |
| Backend | PHP *(planned)* |
| Database | MySQL *(planned)* |
| Temp Storage | LocalStorage |

---

## Roadmap

- [ ] PHP authentication system (login/register)
- [ ] MySQL integration for all pages
- [ ] Admin dashboard
- [ ] Product image upload
- [ ] Search and category filters
- [ ] Real-time offers / notifications
- [ ] REST API integration

---

## Author

**Rayen**  
Feel free to open issues or submit pull requests!

---

## License

This project is licensed under the [MIT License](LICENSE) — free to use and modify.
