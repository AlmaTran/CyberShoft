import React from 'react'

function AuthTemplate() {
  return (
    <div>
        <aside 
              style={{
                height: 200,
                backgroundColor: "blue",
                width: 200,
            }}
        >Aside</aside>

        <footer 
              style={{
                height: 50,
                backgroundColor: "black",
                color: "white"
            }}
        >Footer</footer>

    </div>
  )
}

export default AuthTemplate;