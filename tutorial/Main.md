Add message box and board in main

```html
App.tsx

<main>
  <div className="alert text-white text-center" role="alert">
    Computer Thinking !!
  </div>

  <div className="board p-3">
    <table className="text-light text-center">
      <tr>
        <td className="top-left">-</td>
        <td className="top-center">-</td>
        <td className="top-right">-</td>
      </tr>
      <tr>
        <td className="middle-left">-</td>
        <td className="middle-center">-</td>
        <td className="middle-right">-</td>
      </tr>
      <tr>
        <td className="bottom-left">-</td>
        <td className="bottom-center">-</td>
        <td className="bottom-right">-</td>
      </tr>
    </table>
  </div>
</main>
```

Add styles for table (styles already discussed earlier)
```css
.board {

  /* Expand or contract current div to fill all space */
  flex: 1 1 auto;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* These styles are self explanatory */

table {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

td {
  border-top-style: solid;
  border-top-width: 5px;
  border-right-style: solid;
  border-right-width: 5px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-style: solid;
  border-left-width: 5px;

  --empty: #212121;
  --filled: white;
}

.top-left {
  border-top-color: var(--empty);
  border-right-color: var(--filled);
  border-bottom-color: var(--filled);
  border-left-color: var(--empty);
}

.top-center {
  border-top-color: var(--empty);
  border-right-color: var(--filled);
  border-bottom-color: var(--filled);
  border-left-color: var(--filled);
}

.top-right {
  border-top-color: var(--empty);
  border-right-color: var(--empty);
  border-bottom-color: var(--filled);
  border-left-color: var(--filled);
}

.middle-left {
  border-top-color: var(--filled);
  border-right-color: var(--filled);
  border-bottom-color: var(--filled);
  border-left-color: var(--empty);
}

.middle-center {
  border-top-color: var(--filled);
  border-right-color: var(--filled);
  border-bottom-color: var(--filled);
  border-left-color: var(--filled);
}

.middle-right {
  border-top-color: var(--filled);
  border-right-color: var(--empty);
  border-bottom-color: var(--filled);
  border-left-color: var(--empty);
}

.bottom-left {
  border-top-color: var(--filled);
  border-right-color: var(--filled);
  border-bottom-color: var(--empty);
  border-left-color: var(--empty);
}

.bottom-center {
  border-top-color: var(--filled);
  border-right-color: var(--filled);
  border-bottom-color: var(--empty);
  border-left-color: var(--filled);
}

.bottom-right {
  border-top-color: var(--filled);
  border-right-color: var(--empty);
  border-bottom-color: var(--empty);
  border-left-color: var(--filled);
}
```
