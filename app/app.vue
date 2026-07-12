<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'canonical', href: siteUrl }
  ],
  htmlAttrs: {
    lang: 'nl'
  }
})

const title = 'Gerritjan van der Sloot'
const description = 'Softwareontwikkelaar met een passie voor moderne cloudoplossingen, .NET en Microsoft Azure.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
