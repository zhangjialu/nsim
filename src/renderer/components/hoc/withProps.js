import Vue from 'vue'

const withProps = (component, props) => {
  const newProps = Object.keys(component.props).reduce((acc, cur) => {
    if (!(cur in props)) {
      acc[cur] = component.props[cur]
    }
    return acc
  }, {})
  return Vue.component('WithProps', {
    render(h) {
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          vnode.context = this._self
          return vnode
        })
      return h(
        component,
        {
          on: this.$listeners,
          attrs: this.$attrs,
          scopedSlots: this.$scopedSlots,
          props: {
            ...this.$props,
            ...props
          }
        },
        slots
      )
    },
    props: newProps
  })
}

export default withProps
