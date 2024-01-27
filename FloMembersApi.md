| Field              | Type    | Format             | Example      |
|--------------------|---------|--------------------|--------------|
| id                 | Integer | Unique             | 123          |
| extraaddress       | Text    |                    | 'PB 123'     |
| country            | Text    |                    | 'USA'        |
| is_foreign         | Boolean | 0=no, 1=yes        | 1            |
| phone              | Text    |                    | '0401234567' |
| language           | Text    | ISO-639 (lang), ISO-3166 (country) | 'fi-FI'      |
| info               | Integer | 1=email, 2=email and paper, 3=no postings, 4=paper | 1 |
| invoice_preference | Integer | 1=email, 2=paper, 3=e-invoice   | 2 |
| date_joined        | Text    | dd.mm.yyyy         | '15.06.2023' |
