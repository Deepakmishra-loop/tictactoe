Create a react app ( I'll use create-react-app )

```bash
# Create react app named tictactoe
npx create-react-app tictactoe

# Navigate to app directory
cd tictactoe
```

Remove the default app by removing everything from App.jsx, App.css and Index.css file.

Add Some css for app to cover all visible viewport

```css
Index.css html,
body {
  /* Cover all visible height and width on screen */
  height: 100vh;
  width: 100vw;

  /* Remove any margin or padding */
  margin: 0;
  padding: 0;
}

#root {
  /* Take all the visible space in root div */
  /* Root is the main div we will make our app in */
  /* Making sure it cover all height */
  height: 100%;

  /* Set background color */
  background-color: #212121;
}
```

```css
App.css 

.App {
  /* Taking complete height of screen */
  height: 100%;
}
```

Create an App Component

```tsx
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
  
      {/* App Contenent will go here */}
  
    </div>
  );
}

export default App;
```

Install bootstrap ( Styling library )
```bash
npm install bootstrap@next
```

classnames such as bg-dark bg-light bg-info text-white are all part of bootstrap library (stylesheet)

include bootstrap stylesheet in app
```jsx
index.tsx

import 'bootstrap/dist/css/bootstrap.css';
```

Next [Structure App](./StructureApp.md)
