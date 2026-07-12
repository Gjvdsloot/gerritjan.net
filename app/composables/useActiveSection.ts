import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0])

  function update() {
    const marker = window.innerHeight * 0.35

    let current = sectionIds[0]

    for (const id of sectionIds) {
      const element = document.getElementById(id)

      if (!element) continue

      const rect = element.getBoundingClientRect()

      if (rect.top <= marker) {
        current = id
      }
    }

    // Ensure the last section becomes active at the bottom of the page.
    if (
      window.innerHeight + window.scrollY
      >= document.documentElement.scrollHeight - 4
    ) {
      current = sectionIds[sectionIds.length - 1]
    }

    activeSection.value = current
  }

  onMounted(() => {
    update()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return {
    activeSection
  }
}
