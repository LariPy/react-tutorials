import handleNameChange from "./handleNameChange"

const Content = () => {

  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content

/*
imports module(?) handleNameChange
uses the function in Content function
is the word module or component for stuff like this?
*/