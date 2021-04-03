In <strong>App.tsx</strong>

Let us divide the app (page) into three sections

<ul>
  <li> Header: Contains title (tictactoe)</li>
  <li> Main: Contains game board and message box (that gives messages about current state of game)</li>
  <li> Footer: <em>Sujest something to put here</em> Currently it will just prevent main from extending till bottom of the screen.</li>
</ul>

```tsx
App.tsx;

function App() {
  return (
    <div className="App">
      <header>{/* Title (Heading) */}</header>

      <main>
        {/* Message Box */}
        {/* Game Board */}
      </main>

      <footer>
        {/* Currently it will just prevent main from extending till bottom of the screen */}
      </footer>
    </div>
  );
}
```

Add styles to the structure so that every filed takes space as intended

<ul> 
  <li>Header takes 10% of the height.</li>
  <li>Main takes 80% of the height.</li>
  <li>Footer takes 10% of the height.</li>
</ul>

```css
.App {
  /* ... */

  /* As the name sujests allow contents to flex and fit (or fill) space */
  display: flex;

  /* App div will not expand more than 1000px it may contract if device width is less than 1000px */
  max-width: 1000px;

  /* margin vertical is 0 and horizontal is auto (basically align app div center) */
  margin: 0 auto;

  /* To understand what it does try removing it and see */
  flex-direction: column;
}

/* 
  Uncomment color properties in below styles to see how page is structured 
  background-color may be removed later
*/

header {
  flex: 0 0 10%;

  /* background-color: blue; */
}

main {
  flex: 1 1 auto;

  /* background-color: orange; */
}

footer {
  flex: 0 0 10%;

  /* background-color: green; */
}
```

Next open [Header](./Header.md)
