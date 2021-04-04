Declare some variables just to work with them in a better way

```tsx
helper.ts;

const EMPTY = "-";
const X = "X";
const O = "O";

export type BoardValue = "-" | "X" | "O";
```

Define a board (programmatic representation of board on screen) in app to work with

```tsx
App.tsx;

// prettier-ignore
const [board, setBoard] = useState<string[]>([
  EMPTY,  EMPTY,  EMPTY,
  EMPTY,  EMPTY,  EMPTY,
  EMPTY,  EMPTY,  EMPTY,
]);
```

board a list of values and setBoard is a function to set board (assign value)

whenever something happens on the document, events are fired

For example:
if you move your mouse move event is fired
if you click something click event is fired

let us assign a fuction to call when any of our table cells is clicked

write a function to handle click event

```tsx
App.tsx;

const handleClick = (event: React.MouseEvent) => {
  // ...
};
```

We need a way to know which cell was clicked in the table
we do that by checking the class name of cell user clicked on

```tsx
helper.ts;

const index: Record<string, number> = {
  "top-left": 0,
  "top-center": 1,
  "top-right": 2,
  "middle-left": 3,
  "middle-center": 4,
  "middle-right": 5,
  "bottom-left": 6,
  "bottom-center": 7,
  "bottom-right": 8,
};
```

user Clicked on index i of our board array

```tsx
App.tsx;

const handleClick = (event: React.MouseEvent) => {
  let i = index[(event.target as Element).className];
  // ...
};
```

add onClick attribute to table cells as assign handleClick function to it and update table such that it shows values according to board array

```html
App.tsx

<table className="text-light text-center">
  <tbody>
    <tr>
      <td className="top-left" onClick="{handleClick}">{board[0]}</td>
      <td className="top-center" onClick="{handleClick}">{board[1]}</td>
      <td className="top-right" onClick="{handleClick}">{board[2]}</td>
    </tr>
    <tr>
      <td className="middle-left" onClick="{handleClick}">{board[3]}</td>
      <td className="middle-center" onClick="{handleClick}">{board[4]}</td>
      <td className="middle-right" onClick="{handleClick}">{board[5]}</td>
    </tr>
    <tr>
      <td className="bottom-left" onClick="{handleClick}">{board[6]}</td>
      <td className="bottom-center" onClick="{handleClick}">{board[7]}</td>
      <td className="bottom-right" onClick="{handleClick}">{board[8]}</td>
    </tr>
  </tbody>
</table>
```

> For above code to work we need to import from helper
>
> ```ts
> import { EMPTY, X, O, BoardValue, index, player } from "./helper";
> ```
>
> Import functions and variables or constants (just in case i forgot to mention them)

Add a message list, that stores all the messages we would possibly show

```ts
App.tsx;

const messages = [
  "Make a move !",
  "Computer Thinking !",
  "X Won !!",
  "O Won !!",
  "It was a Draw !!",
];
```

Add two more state variables to keep track of which message to show and wether the board is terminated

```ts
App.tsx;

const [msg, setMsg] = useState(0);
const [terminate, setTerminate] = useState(false);
```
