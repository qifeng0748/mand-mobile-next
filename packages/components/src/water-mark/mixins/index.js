export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    spacing: {
      type: [String, Number],
      default: '20vw',
    },
    repeatX: {
      type: Boolean,
      default: true,
    },
    repeatY: {
      type: Boolean,
      default: true,
    },
    rotate: {
      type: [String, Number],
      default: -30,
    },
    opacity: {
      type: [String, Number],
      default: 0.1,
    },
    color: {
      type: String,
      default: '#858B9C',
    },
    fontSize: {
      type: Number,
      default: 14,
    },
  },
}
