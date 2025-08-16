#  TXT File Upload & Filter Tool

A lightweight React.js tool to upload `.txt` files, search/filter lines, remove duplicates, and copy results — optimized to handle **large files (200k+ lines)** without freezing using chunked reading

---

##  Features

* **Upload `.txt` file** (client-side only — no backend).
* **Search by domain** (e.g., `example.com`).
* **Filter by word** (any keyword).
* **Remove duplicates** (checkbox toggle).
* **Live match count** in real-time.
* **Copy results** to clipboard.
* **Chunked reading** for large files (keeps UI responsive).
* **Minimal modern UI** (responsive layout, rounded buttons, clear labels).
* **Progress indicator** while reading file.

---

##  Tech Stack

* **React.js** (Functional Components + Hooks)
* **HTML5 FileReader API**
* **CSS Flexbox / Responsive Design**

---

##  Installation

1. Clone this repository:

   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the app:

   ```bash
   npm start
   ```

---

##  Usage

1. Click **Upload .txt File** and select your text file.
2. Enter a **domain** in the search box (optional).
3. Enter a **word** to filter lines further (optional).
4. Check **Remove Duplicates** if needed.
5. View total matches instantly.
6. Click **Copy Results** to copy to clipboard.

---

##  Demo

**Live Demo:** [[Demo](https://text-file-filter-tool.vercel.app/))
---

##  Project Structure

```
src/
 ├── components/
 │   ├── FileUploader.js
 │   ├── Filters.js
 │   ├── ResultsTable.js
 │   └── ProgressBar.js
 ├── App.js
 ├── App.css
 └── index.js
```

---

##  Notes

* Designed for **client-side only** — no server required.
* Tested with files up to **200k+ lines** without freezing.
* Performance may vary depending on browser and system.

