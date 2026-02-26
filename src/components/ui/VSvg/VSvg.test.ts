import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import VSvg from '@/components/ui/VSvg/VSvg.vue'

describe('VSvg', () => {
  it('рендерит корректный href', () => {
    const wrapper = mount(VSvg, {
      props: { name: 'instagram' },
    })

    expect(wrapper.find('use').attributes('href')).toBe('/svg/instagram.svg')
  })

  it('применяет дефолтный size 30', () => {
    const wrapper = mount(VSvg, {
      props: { name: 'instagram' },
    })

    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('30')
    expect(svg.attributes('height')).toBe('30')
  })

  it('применяет переданный size', () => {
    const wrapper = mount(VSvg, {
      props: { name: 'instagram', size: 48 },
    })

    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('48')
    expect(svg.attributes('height')).toBe('48')
  })

  it('width и height перекрывают size', () => {
    const wrapper = mount(VSvg, {
      props: { name: 'instagram', size: 30, width: 20, height: 40 },
    })

    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('20')
    expect(svg.attributes('height')).toBe('40')
  })

  it('содержит role="img" и aria-hidden="true"', () => {
    const wrapper = mount(VSvg, {
      props: { name: 'instagram' },
    })

    const svg = wrapper.find('svg')
    expect(svg.attributes('role')).toBe('img')
    expect(svg.attributes('aria-hidden')).toBe('true')
  })
})
