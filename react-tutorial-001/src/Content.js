import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <main>
        {items.length ? (
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
          ) : (
            <p style={{ marginTop: '2rem' }}>
              Your list is empty.
            </p>
          )}
    </main>
  )
}

export default Content

/*
imports module(?) handleNameChange
uses the function in Content function
is the word module or component for stuff like this?
*/