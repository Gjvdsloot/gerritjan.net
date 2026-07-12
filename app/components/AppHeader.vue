<script setup lang="ts">
import { computed, ref } from 'vue'

const mobileMenuOpen = ref(false)

const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Over mij' },
  { id: 'contact', label: 'Contact' }
]

const { activeSection } = useActiveSection(
  navigation.map(x => x.id)
)

const navItems = computed(() =>
  navigation.map(item => ({
    ...item,
    active: item.id === activeSection.value
  }))
)

function navigate(id: string) {
  mobileMenuOpen.value = false

  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-default bg-default/80 backdrop-blur"
  >
    <UContainer class="flex h-16 items-center justify-between">
      <!-- Logo -->

      <button
        class="text-lg font-semibold tracking-tight transition-colors hover:text-primary"
        @click="navigate('home')"
      >
        Gerritjan.net
      </button>

      <!-- Desktop -->

      <div class="hidden sm:flex items-center gap-2">
        <button
          v-for="item in navItems"
          :key="item.id"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="item.active
            ? 'bg-primary text-white'
            : 'hover:bg-muted'"
          @click="navigate(item.id)"
        >
          {{ item.label }}
        </button>

        <div class="mx-2 h-6 w-px bg-border" />

        <UButton
          variant="ghost"
          to="/cv-gerritjan-van-der-sloot.pdf"
          target="_blank"
          trailing-icon="i-lucide-arrow-up-right"
        >
          Download CV
        </UButton>

        <UButton
          icon="i-simple-icons-linkedin"
          variant="ghost"
          color="neutral"
          to="https://www.linkedin.com/in/gerritjan-van-der-sloot/"
          target="_blank"
          aria-label="LinkedIn"
        />

        <UButton
          icon="i-simple-icons-github"
          variant="ghost"
          color="neutral"
          to="https://github.com/Gjvdsloot"
          target="_blank"
          aria-label="GitHub"
        />
      </div>

      <!-- Mobile -->

      <UButton
        class="sm:hidden"
        icon="i-lucide-menu"
        variant="ghost"
        aria-label="Menu"
        @click="mobileMenuOpen = true"
      />
    </UContainer>

    <USlideover v-model:open="mobileMenuOpen">
      <template #content>
        <div class="flex h-full flex-col p-8">
          <div class="text-lg font-semibold">
            Gerritjan.net
          </div>

          <div class="space-y-2">
            <button
              v-for="item in navItems"
              :key="item.id"
              class="w-full rounded-lg px-4 py-3 text-left transition-colors"
              :class="item.active
                ? 'bg-primary text-white'
                : 'hover:bg-muted'"
              @click="navigate(item.id)"
            >
              {{ item.label }}
            </button>
          </div>

          <USeparator class="my-6" />

          <UButton
            block
            to="/cv-gerritjan-van-der-sloot.pdf"
            target="_blank"
            trailing-icon="i-lucide-arrow-up-right"
          >
            Download CV
          </UButton>

          <div class="mt-6 flex justify-center gap-3">
            <UButton
              icon="i-simple-icons-linkedin"
              variant="ghost"
              color="neutral"
              to="https://www.linkedin.com/in/gerritjan-van-der-sloot/"
              target="_blank"
            />

            <UButton
              icon="i-simple-icons-github"
              variant="ghost"
              color="neutral"
              to="https://github.com/Gjvdsloot"
              target="_blank"
            />
          </div>
        </div>
      </template>
    </USlideover>
  </header>
</template>
