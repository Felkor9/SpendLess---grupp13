<template>
  <div class="about-container">
    <section class="company-info">
      <h1>Om SpendLess</h1>
      <p>
        Välkommen till <strong>SpendLess</strong> – din marknadsplats för att
        köpa och sälja begagnade produkter på ett smartare och mer hållbart
        sätt!
      </p>
      <p>
        Vårt mål är att ge användare en plattform där de enkelt kan lägga upp
        sina produkter för försäljning och hitta bra erbjudanden på begagnade
        varor.
      </p>
    </section>

    <section class="policy">
      <h2>Vår Policy</h2>
      <p>
        På SpendLess värnar vi om en trygg och säker handelsplats. Genom att
        använda vår plattform godkänner du följande:
      </p>
      <ul>
        <li>Alla annonser ska vara ärliga och tydliga.</li>
        <li>Endast lagliga produkter får säljas.</li>
        <li>Användare ansvarar själva för sina transaktioner.</li>
      </ul>
      <p>
        Vi uppmuntrar till en hållbar konsumtion och att ge produkter en andra
        chans!
      </p>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
  /* Grundläggande styling */
  .about-container {
    max-width: 900px;
    margin: auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }

  h1,
  h2 {
    color: #2c3e50;
  }

  /* Grid-layout för desktop */
  @media (min-width: 768px) {
    .about-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  /* Mobilanpassning */
  @media (max-width: 768px) {
    .about-container {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .policy ul {
      text-align: left;
      padding-left: 1rem;
    }
  }
</style>
