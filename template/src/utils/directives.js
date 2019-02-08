import store from '@/store'

export const hashTo = (el, val) => {
  el.onclick = () => {
    document.body.scrollTop = document.querySelector(val.value).offsetTop
  }
}
export const role = (el, binding, vnode) => {
  const { value } = binding
  const role = store.getters && store.getters.role

  if (value && value instanceof Array && value.length > 0) {
    const permissionRoles = value
    if (!permissionRoles.includes(role)) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  } else {
    throw new Error(`need roles! Like v-role="['admin','editor']" `)
  }
}
