<script setup lang="ts">
const navigation = [
  { label: 'Home', to: '#home' },
  { label: 'Over mij', to: '#about' },
  { label: 'Contact', to: '#contact' }
]
</script>

<template>
  <div
    id="home"
    class="min-h-screen bg-default"
  >
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-default bg-default/80 backdrop-blur">
      <UContainer class="flex h-16 items-center justify-between">
        <NuxtLink
          to="/"
          class="text-lg font-semibold tracking-tight"
        >
          Gerritjan.net
        </NuxtLink>

        <div class="flex items-center gap-6">
          <UNavigationMenu
            :items="navigation"
            orientation="horizontal"
          />

          <UButton
            variant="ghost"
            to="cv-gerritjan-van-der-sloot.pdf"
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
      </UContainer>
    </header>

    <main>
      <!-- Hero -->
      <UContainer class="py-20">
        <section class="grid items-center gap-12 lg:grid-cols-2">
          <!-- Tekst -->
          <div>
            <div class="flex flex-wrap items-center gap-4">
              <h1 class="text-5xl font-bold tracking-tight">
                Gerritjan van der Sloot
              </h1>

              <UBadge
                color="primary"
                variant="soft"
              >
                Softwareontwikkelaar
              </UBadge>
            </div>

            <p class="mt-6 max-w-2xl text-lg text-muted leading-8">
              Hallo! Mijn naam is Gerritjan. Ik ben softwareontwikkelaar met een passie
              voor moderne cloudoplossingen, .NET en Microsoft Azure. Ik vind het leuk om
              complexe technische vraagstukken om te zetten in praktische en betrouwbare
              oplossingen.
            </p>

            <p class="mt-4 max-w-2xl text-lg text-muted leading-8">
              Naast mijn werk ben ik plaatsvervangend raadslid voor de gemeente Assen.
              Daar draag ik graag bij aan de lokale politiek en maatschappelijke vraagstukken.
            </p>
          </div>

          <!-- Foto -->
          <div class="flex justify-center lg:justify-end">
            <img
              src="~/assets/img/me.png"
              alt="Portret van Gerritjan van der Sloot"
              class="h-80 w-80 rounded-3xl object-cover shadow-2xl ring-1 ring-default"
            >
          </div>
        </section>
      </UContainer>

      <!-- About -->
      <section id="about">
        <UContainer class="py-12">
          <h2 class="text-3xl font-semibold mb-6">
            Over mij
          </h2>

          <div class="max-w-3xl space-y-4 text-lg text-muted leading-8">
            <p>
              In het dagelijks leven werk ik als softwareontwikkelaar. Mijn
              voornaamste interesse ligt bij het ontwikkelen van cloud-native
              applicaties met .NET en Azure. Ik haal veel plezier uit het ontwerpen
              van APIs, het verbeteren van softwarearchitectuur en het automatiseren
              van deployments.
            </p>

            <p>
              Ik heb een bachelor Artificial Intelligence afgerond en ben iemand die
              graag blijft leren. Regelmatig verdiep ik mij in nieuwe technologieën,
              Microsoft-certificeringen en persoonlijke projecten om mijn kennis
              verder uit te breiden.
            </p>

            <p>
              Buiten mijn werk ben ik actief als plaatsvervangend raadslid voor de
              gemeente Assen. Het geeft mij de mogelijkheid om mij in te zetten voor
              maatschappelijke onderwerpen en een bijdrage te leveren aan mijn
              woonomgeving.
            </p>
          </div>
        </UContainer>
      </section>

      <!-- Contact -->
      <section id="contact">
        <UContainer class="py-12">
          <h2 class="text-3xl font-semibold mb-4">
            Contact
          </h2>

          <p class="mb-6 max-w-2xl text-lg text-muted">
            Heb je een vraag, wil je samenwerken of gewoon eens kennismaken?
            Neem gerust contact met mij op.
          </p>

          <UButton
            icon="i-lucide-mail"
            to="mailto:hello@gerritjan.net"
          >
            hello@gerritjan.net
          </UButton>
        </UContainer>
      </section>
    </main>

    <footer class="border-t border-default py-8">
      <UContainer class="text-sm text-muted">
        © {{ new Date().getFullYear() }} Gerritjan van der Sloot
      </UContainer>
    </footer>
  </div>
</template>
