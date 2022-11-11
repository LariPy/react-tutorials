const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave']
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }

  export default handleNameChange

  /*
  notice how this is not a component
  so the name is in camelcase
  export this, import in Content react component
  */