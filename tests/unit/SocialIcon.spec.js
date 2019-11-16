import { mount } from '@vue/test-utils'
import SocialIcon from '@/components/elements/SocialIcon'

describe('SocialIcon.vue', () => {
  it('renders with correct image', () => {
    const wrapper = mount(SocialIcon , {
      propsData: {
        img: 'mail'
      }
    })
    
    expect(wrapper.find('img').exists()).toBeTruthy()
  })
})