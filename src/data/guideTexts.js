export const countOfRows = () => {
    return `
      Instructions:
  
      1. **Enter schema name:**
        - Type the name of the schema you want to query for row counts. This field is required.
  
      2. **Optionally enter table names (line by line):**
        - If you want to filter the results to specific tables, enter their names line by line in the text box. Leave this field empty to include all tables in the schema.
  
      3. **Click "Submit" to generate the SQL statement:**
        - The generated SQL statement will be displayed in the output box below. You can then copy and use it in your database.
  
      **Example:**
  
      To get the row counts for all tables in the "dbo" schema:
  
      - Enter "dbo" in the Schema Name field.
      - Leave the Tables Name field empty.
      - Click "Submit".
  
      The generated SQL statement will be:
  
      SELECT t.name AS table_name, SUM(p.rows) AS row_count
      FROM sys.tables t
      INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
      INNER JOIN sys.partitions p ON t.object_id = p.object_id
      WHERE s.name = 'dbo'
      GROUP BY t.name
      ORDER BY t.name;
    `;
  };


  export const dropConstraint = () => {
    return `
      Instructions:
  
      1. **Enter table and constraint names:**
        - Type the table and constraint names you want to drop, line by line, in the following format:
          {table_name}: {constraint_name}
  
        - For example:

          employees: emp_pk
          customers: cust_fk
          
  
        - Each line should specify one table and one constraint to drop.
  
      2. **Click "Submit" to generate the SQL statements:**
        - The generated SQL statements will be displayed in the output box below. You can then copy and use them in your database.
  
      **Example:**
  
      To drop the primary key constraint "emp_pk" from the "employees" table and the foreign key constraint "cust_fk" from the "customers" table:
  
      - Enter the following in the text box:
  
        
        employees: emp_pk
        customers: cust_fk
  
      - Click "Submit".
  
      The generated SQL statements will be:
  
      ALTER TABLE employees DROP CONSTRAINT emp_pk;
      ALTER TABLE customers DROP CONSTRAINT cust_fk;
    `;
  };

  export const nthHighestText = () => {
    return `
    Instructions:
  
    1. Enter the name of the column you want to find the Nth highest value for.
    2. Enter the name of the table containing the data.
    3. Enter the value of N (e.g., 3 for the 3rd highest value).
    4. Click the "Submit" button to generate the SQL statement.
  
    Example:
  
    If you want to find the 2nd highest salary in the "employees" table,
    enter "salary" for the column name, "employees" for the table name, and "2" for the Nth highest.
    `;
  };

  export const NthMinimumText = () => {
    return `
      Instructions:
      1. Enter the name of the column you want to find the Nth minimum value for.
      2. Enter the name of the table containing the data.
      3. Enter the value of N (e.g., 3 for the 3rd minimum value).
      4. Click the "Submit" button to generate the SQL statements for Oracle 10g and MySQL.
  
      Example:
      If you want to find the 2nd minimum salary in the "employees" table,
      enter "salary" for the column name, "employees" for the table name, and "2" for the Nth minimum.
    `;
  };

 export const SelectStatementText = () => {
    return `
      Instructions:
  
      1. **Enter middle statements or table names (line by line):**
        - Type each middle statement or table name on a separate line in the large text box.
        - These will be placed in the middle of the generated SQL statements.
  
      2. **Optionally add prefix and suffix statements:**
        - Use the input boxes below to add optional statements that will be placed before and after each middle statement or table name.
        - These can be used to add common keywords or clauses to your SQL queries.
  
      3. **Click "Submit" to generate the SQL statements:**
        - The generated SQL statements will be displayed in the output box below, combining the prefix, middle statements/table names, and suffix as specified.
        - You can then copy and use these statements in your database.
  
      Example:
  
      If you enter the following:
  
      - Prefix: SELECT * FROM 
      - Middle statements: employees\ncustomers
      - Suffix: WHERE age > 30
  
      The generated SQL statements will be:
  
      SELECT * FROM employees WHERE age > 30
      SELECT * FROM customers WHERE age > 30
    `;
  };