import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mt-8">
          Welcome to Tommie Fulp Academy
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Empowering students with knowledge and values for a brighter future.
        </p>
      </main>
    </div>
  );
}

export default App;
