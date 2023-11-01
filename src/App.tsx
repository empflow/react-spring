import Tree from "./Tree";

function App() {
  return (
    <main className="min-h-screen flex justify-center">
      <Tree label="layer 1">
        <Tree label="this is a tree"></Tree>
        <Tree label="hello"></Tree>
        <Tree label="there">
          <Tree label="level 3">level 3 content</Tree>
        </Tree>
      </Tree>
    </main>
  );
}

export default App;
