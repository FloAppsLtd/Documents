(() => {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yy = String(now.getFullYear()).slice(-2);

  const values = {
    SenderInfoIdentifier: `flomembers${dd}${mm}${yy}`,
    InvoiceSenderIntermediatorAddress: 'DABAFIHH',
    PaymentInstructionIdentifier: 'flomembers',

    SellerInvoiceTypeText_fi: 'Jäsenmaksu',
    SellerInvoiceTypeText_sv: 'Medlemsavgift',
    SellerInvoiceTypeText_en: 'Membership fee',

    SellerInstructionFreeText_fi:
      'Ilmoituksen vastaanoton jälkeen emme lähetä laskuja paperilla.',
    SellerInstructionFreeText_sv:
      'Efter att vi har mottagit meddelandet kommer vi inte att skicka pappersfakturor.',
    SellerInstructionFreeText_en:
      'No paper invoices will be sent after the e-invoice notification.',

    SellerInvoiceIdentifierText1_fi: 'Viitenumero',
    SellerInvoiceIdentifierText1_sv: 'Referensnummer',
    SellerInvoiceIdentifierText1_en: 'Reference number',

    SellerInvoiceIdentifierType1: '01',
  };

  // Verify all fields before proceeding.
  const missing = Object.keys(values).filter(
    id => !document.getElementById(id)
  );

  if (missing.length) {
    console.error(
      'Täyttö keskeytetty. Avaa ensin luontilomake. Puuttuvat kentät:',
      missing
    );
    return;
  }

  for (const [id, value] of Object.entries(values)) {
    const field = document.getElementById(id);
    field.value = value;
    field.dispatchEvent(new Event('input', { bubbles: true }));
    field.dispatchEvent(new Event('change', { bubbles: true }));
  }

  // Enter the invoice issuer's details manually.
  const manualFields = [
    'InvoiceSenderAddress',       // EDI
    'SellerPartyIdentifier',      // Y-tunnus: 1234567-8
    'SellerOrganisationName1_fi',
    'SellerStreetName',
    'SellerPostCodeIdentifier',
    'SellerTownName',
    'SellerAccountID0',           // IBAN
    'SellerBic0',                 // BIC
  ];

  console.log('Vakioarvot täytetty:', values.SenderInfoIdentifier);
  console.table(
    manualFields.map(id => {
      const field = document.getElementById(id);
      return {
        Kenttä: id,
        Tila: !field
          ? 'Kenttää ei löytynyt'
          : field.value.trim()
            ? 'Täytetty'
            : 'Täytä käsin',
      };
    })
  );
})();
