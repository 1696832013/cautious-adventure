/*
 * FileName: lb-render.vue
 * Remark: 自定义render
 * Project: lb-element-table
 * Author: LiuBing
 * File Created: Tuesday, 19th March 2019 10:15:30 am
 * Last Modified: Tuesday, 19th March 2019 10:15:32 am
 * Modified By: LiuBing
 */
<script>
export default {
  name: 'LbRender',
  functional: true,
  props: {
    // eslint-disable-next-line vue/require-default-prop
    scope: Object,
    // eslint-disable-next-line vue/require-default-prop
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render ? ctx.props.render(h, ctx.props.scope) : ''
  }
}
</script>
