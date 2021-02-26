import { mount } from '@vue/test-utils'
import About from '@/components/content/About'

describe('About.vue', () => {
  it('renders', () => {
    const wrapper = mount(About)
    
    expect(wrapper.find('#about').exists()).toBeTruthy()
    expect(wrapper.find('#mail-address').exists()).toBeFalsy()
    wrapper.setData({ mail_activated: true })
    expect(wrapper.find('#mail-address').exists()).toBeTruthy()
  })
})