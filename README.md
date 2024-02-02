# SQL Dev Tool

## Overview
Introducing **SQL Dev Tools!**

This is a tool for **SQL Developers**, a React-based application empowering SQL developers with versatile functionalities and make their **day-to-life tasks** easy.

## Features
### DROP CONSTRAINT

In SQL, the `DROP CONSTRAINT` command plays a crucial role in managing the data integrity and structure of your tables. It allows you to remove existing constraints that are no longer needed or that are causing unwanted limitations. Here's a breakdown of its work and why you might use it.

- **DROP CONSTRAINT**: Removes a specific constraint from a table. This constraint could be UNIQUE, PRIMARY KEY, FOREIGN KEY, or CHECK.
  
  **Risks:**
  - **Data integrity loss:** Dropping certain constraints like PRIMARY KEY can compromise data integrity and lead to duplicate or invalid entries.
  - **Unexpected behavior:** Removing constraints can affect dependent objects and queries that rely on them, leading to unexpected results.

### Counting Total Rows in a Table

Counting the total number of rows in a table is a common use case. `COUNT(*)` iterates through every row in the specified table and returns the total number of rows found. This information is valuable for data analysis, performance optimization, and understanding overall data volume.

### Custom Statement

You can create a repetitive statement with a middle statement and prefix statement and suffix statement. This flexibility allows you to customize your queries efficiently.

### As I continuously evolve, future features will expand the capabilities of SQL Dev Tools.

## Demo

[Live Demo](https://sql-dev-tool.web.app/) - Initial Version

### Installation

To run this application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/PranabKumarSahoo/sql-dev-tools.git
```
2. Change into the project directory:
```
cd sql-dev-tools
```
3. Install dependencies:
```
npm install
```
4. To start the development server and run the project, use the following command:
```
npm start
```
This will start the development server and open your project in the browser. Any changes you make to the source code will be automatically reflected in the browser.
Building for Production:
```
npm run build
```
This will create an optimized build of your project in the dist directory.

## Contributing

If you would like to contribute. Follow these simple steps or you can refer to [Contribution Guidelines](https://github.com/PranabKumarSahoo/sql-dev-tools/blob/main/CONTRIBUTING.md):

1. **Fork the Repository**: Click "Fork" at the top right to create your copy.
2. **Create a Branch**: Make a new branch for your work.
3. **Make Changes**: Code your feature or bug fix.
4. **Commit Changes**: Keep it clear and concise.
5. **Push to Your Fork**: Send changes to your forked repo.
6. **Pull Request**: Submit a PR, explaining your changes. [PR Guidelines](https://github.com/PranabKumarSahoo/sql-dev-tools/blob/main/pull_request_template.md)
7. Make sure to leave a ⭐ on this repo.

That's it!!

Your contributions are greatly appreciated. Whether you find and report issues, submit pull requests, or simply provide feedback, you're making a valuable contribution to the community.

## Contributors
<a href="https://github.com/PranabKumarSahoo/sql-dev-tools/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=PranabKumarSahoo/sql-dev-tools" />
</a>

## Contact
Feel free to reach out to kumarspranab19@gmail.com with any questions or feedback!

## License
This project is open-source and available under the [MIT License](LICENSE). Feel free to contribute.
