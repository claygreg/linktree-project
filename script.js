function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  /*  A função toggle escrita faz algo semelhante ao que está abaixo:
        if(html.classList.contains('light')) {
            html.classList.remove('light')
        } else {
         html.classList.add('light')
        }
    */
}
