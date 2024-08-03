import React from 'react'

export default function Modes() {
  return (

    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        DarkModes
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="/">GreenDarkMode</a></li>
        <li><a class="dropdown-item" href="/">BlueDarkMode</a></li>
        <li><a class="dropdown-item" href="/">RedDarkMode</a></li>
    </ul>
    </div>

  )
}
