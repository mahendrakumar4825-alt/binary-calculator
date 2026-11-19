# Advanced Binary Calculator
 
A responsive, browser-based calculator for working with binary, decimal, octal and hexadecimal numbers. Built as an MCA project for **Computer Organization & Architecture (COA)** using plain HTML, CSS and JavaScript — no frameworks or build tools required.
 
## Features
 
- **Four number systems:** Binary (base 2), Decimal (base 10), Octal (base 8) and Hexadecimal (base 16)
- **Nine operations:**
  - Arithmetic: Addition, Subtraction, Multiplication, Division
  - Bitwise: AND, OR, XOR
  - Shifts: Left Shift (`<<`), Right Shift (`>>`)
- **Separate input and output bases:** enter numbers in one system and get the result in another
- **Number system overview:** the result is shown in all four bases at once
- **Utilities:** swap the two inputs, clear everything, and copy the result with one click
- **Input validation:** error messages are shown for invalid input
- **Responsive design:** works on desktop, tablet and mobile screens
## Project Structure
 
```
├── index.html    # Page structure and layout
├── Style.css     # Styling and responsive rules
└── script.js     # Calculator logic
```
 
## Getting Started
 
No installation is needed.
 
1. Download or clone the project folder.
2. Make sure `index.html`, `Style.css` and `script.js` are in the same folder.
3. Open `index.html` in any modern web browser.
> **Note:** The HTML links to `Style.css` with a capital **S**. On case-sensitive systems (Linux, most web hosts) the file name must match exactly, or the styles won't load.
 
## How to Use
 
1. Enter the **first** and **second** numbers.
2. Choose the **input number system** that the numbers are written in.
3. Choose the **operation** to perform.
4. Choose the **result number system** for the output.
5. Click **Calculate Result →**.
6. View the result, along with its Binary, Decimal, Octal and Hexadecimal forms in the overview section.
### Buttons
 
| Button | Action |
| --- | --- |
| Calculate Result → | Runs the selected operation |
| ⇄ | Swaps the first and second numbers |
| Clear | Resets the inputs and result |
| Copy Result | Copies the result to the clipboard |
 
### Example
 
| Field | Value |
| --- | --- |
| First number | `1010` |
| Second number | `0011` |
| Input system | Binary |
| Operation | Addition (+) |
 
Binary `1010` (10) + `0011` (3) = `1101` binary, which is 13 in decimal, `15` in octal and `D` in hexadecimal.
 
## Technologies Used
 
- **HTML5**: page structure
- **CSS3**: dark theme, flexbox and grid layout, `clamp()` for fluid sizing, media queries for responsiveness
- **JavaScript**: calculation, base conversion and DOM updates

## Browser Support
 
Works in current versions of Chrome, Edge, Firefox and Safari.
 
### Team Members
 
| S. No. | Name | Roll No. | Role |
| --- | --- | --- | --- |
| 1 | Suneel Kumar | 2600520140069 | JavaScript Logic |
| 2 | Manish Kumar | 2600520140040 | HTML Structure |
| 3 | Kundan Paswan | 2600520140038 | CSS & Responsive Design |

 
### Project Details
 
| | |
| --- | --- |
| **Course** | MCA |
| **Subject** | Computer Organization & Architecture (COA) |
| **College / University** | I.E.T. Lucknow |
| **Submitted To** | Ms. Shweta Tiwari |

 
