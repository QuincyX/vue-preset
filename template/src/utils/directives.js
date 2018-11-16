export const hashTo = (el, val) => {
  el.onclick = () => {
    document.body.scrollTop = document.querySelector(val.value).offsetTop
  }
}
