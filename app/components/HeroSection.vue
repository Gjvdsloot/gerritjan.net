<script setup lang="ts">
</script>

<template>
  <section
    id="home"
    class="scroll-mt-20"
  >
    <UContainer class="flex min-h-[calc(100vh-4rem)] items-center py-20">
      <div class="grid w-full items-center gap-12 lg:grid-cols-[3fr_2fr]">
        <!-- Text -->
        <div>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            Gerritjan van der Sloot
          </h1>

          <UBadge
            class="mt-4"
            color="primary"
            variant="soft"
          >
            Softwareontwikkelaar
          </UBadge>

          <div class="mt-6 space-y-4 lg:max-w-2xl">
            <p class="text-lg leading-8 text-muted">
              Hallo! Mijn naam is Gerritjan. Ik ben softwareontwikkelaar met een passie
              voor moderne cloudoplossingen, .NET en Microsoft Azure. Ik vind het leuk
              om complexe technische vraagstukken om te zetten in praktische en
              betrouwbare oplossingen.
            </p>

            <p class="text-lg leading-8 text-muted">
              Naast mijn werk ben ik plaatsvervangend raadslid voor de gemeente Assen.
              Daar draag ik graag bij aan de lokale politiek en maatschappelijke
              vraagstukken.
            </p>
          </div>
        </div>

        <!-- Photo -->
        <div class="flex justify-center lg:justify-end">
          <img
            src="~/assets/img/me.png"
            alt="Portret van Gerritjan van der Sloot"
            class="h-72 w-72 rounded-3xl object-cover shadow-2xl ring-1 ring-default sm:h-80 sm:w-80"
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>
