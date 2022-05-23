import Vue from 'vue'
import VueSanitize from 'vue-sanitize'

Vue.use(VueSanitize, {
  allowedTags: VueSanitize.defaults.allowedTags.concat(['img']),
})
