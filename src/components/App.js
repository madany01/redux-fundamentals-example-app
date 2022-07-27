import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'

function App() {
  return (
    <div className='App'>
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section className='medium-container'>
          <h2>Todos</h2>
          <div className='todoapp'>
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
