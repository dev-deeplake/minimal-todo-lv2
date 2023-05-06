import * as style from "../ui/styles"

function Header () {
    const TITLE = "Minimal-todo"
    const EXPLANATION = "Simple and minimal todo. Just write a todo and start organizing your life."
    return (
        <style.HeaderContainer>
          <h1>{TITLE}</h1>
          <p>{EXPLANATION}</p>
        </style.HeaderContainer>
    )
}

export default Header