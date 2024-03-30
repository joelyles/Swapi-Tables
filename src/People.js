import Table from "./Table";

const People = ({ items, setItems }) => {
  return (
    <>
      <div className="main">
      <h2>One day or another...</h2>
      <p>a grid of people from Starwars will be here.</p>
      <Table items={items} />
      </div>
    </>
  )
}

export default People
