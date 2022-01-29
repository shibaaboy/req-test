import React, { useEffect, useState } from "react";
import style from './Main.module.scss'

function Main() {
  const [title, setTitle] = useState('')
  const [lists, setLists] = useState([])
  const [dropdownTitle, setDropdownTitle] = useState('')
  const [expanders, setExpanders] = useState([])


  useEffect(() => {
    fetch('http://45.9.24.31/strapi/pages?slug=about')
      .then(response => response.json())
      .then((data) => {
        setTitle(data[0]?.title)
        setLists(data[0]?.content[0]?.list)
        setDropdownTitle(data[0]?.content[2]?.title)
        setExpanders(data[0]?.content[2]?.expander)
      })
  }, [])

  return (
    <div className="flex flex-wrap flex-row justify-center items-center self-center gap-[20px]">
      <h1 className="font-bold text-2xl text-bubble-gum">{title}</h1>
      {lists.map((list, i) => (
        <div key={i} className={style.marquee}>
          <span>{list.id} {list.text}</span>
        </div>
      ))}
      <h2>{dropdownTitle}</h2>
      {expanders.map((expander, i) => (
        <ul key={i}>
          <li className="italic underline">{expander.id} {expander.title}</li>
          <li>{expander.description}</li>
        </ul>
      ))}
    </div>
  )
}

export default Main;