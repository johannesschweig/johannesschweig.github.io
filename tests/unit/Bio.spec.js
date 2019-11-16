import { mount } from '@vue/test-utils'
import Bio from '@/components/content/Bio'

describe('Bio.vue', () => {
  it('renders', () => {
    const wrapper = mount(Bio)
    
    expect(wrapper.find('#bio').exists()).toBeTruthy()
    expect(wrapper.find('#mail-address').exists()).toBeFalsy()
    wrapper.setData({ mail_activated: true })
    expect(wrapper.find('#mail-address').exists()).toBeTruthy()
  })
})